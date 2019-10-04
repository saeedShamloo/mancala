import * as React from 'react';
import GameEntry from './GameEntry';
import GameBoard from './GameBoard';
import {Typography, notification, Icon, Modal} from 'antd';

const {Title} = Typography;

const capturedIndex = {
    1: 13,
    2: 12,
    3: 11,
    4: 10,
    5: 9,
    6: 8,
    8: 6,
    9: 5,
    10: 4,
    11: 3,
    12: 2,
    13: 1
};

export type GamePalayers = {firstPlayer: string; secondPlayer: string};
type GameProps = {};
type GameState = {
    palayers: GamePalayers;
    gameIsStarting: boolean;
    board: number[];
    playerTurn: 1 | 2;
};

const initialBoard = [0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4];

const initialState: GameState = {
    palayers: {
        firstPlayer: '',
        secondPlayer: ''
    },
    gameIsStarting: false,
    board: [...initialBoard],
    playerTurn: 1
};

class Game extends React.Component<GameProps, GameState> {
    constructor(props: GameProps) {
        super(props);
        this.state = initialState;
    }

    hanldeEntryFormSubmit = (palayers: GamePalayers) => {
        this.setState({
            palayers: palayers,
            gameIsStarting: true
        });
    };

    handleGameReset = () => {
        this.setState({
            board: [...initialBoard],
            playerTurn: 1
        });
    };

    handleExitGame = () => {
        this.setState({
            ...initialState,
            board: [...initialBoard]
        });
    };

    showWinner = (
        gameResult: string,
        firstPlayerResult: {name: string; score: number},
        secondPlayerResult: {
            name: string;
            score: number;
        }
    ) => {
        Modal.info({
            title: gameResult,
            content: (
                <div>
                    <p>
                        {firstPlayerResult.name} : {firstPlayerResult.score}
                    </p>
                    <p>
                        {secondPlayerResult.name} : {secondPlayerResult.score}
                    </p>
                </div>
            ),
            onOk: () => {
                this.handleGameReset();
            }
        });
    };

    openNotification = (msg: string) => {
        notification.open({
            message: 'congratulations',
            description: msg,
            icon: <Icon type="smile" style={{color: '#108ee9'}} />
        });
    };

    handlePitClick = (playerIndex: 1 | 2, pitIndex: number, pitValue: number) => {
        const {board} = this.state;
        const skipIndex = playerIndex == 1 ? 7 : 0;

        board[pitIndex] = 0;
        let i = pitIndex - 1;
        for (let j = 0; j < pitValue; i--) {
            if (i == skipIndex) continue;
            if (i < 0) {
                i = 14;
                continue;
            }
            board[i] = board[i] + 1;
            j++;
        }

        this.setState(
            {
                board: board,
                playerTurn: this.detecNextPlayer(i + 1, playerIndex)
            },
            () => this.afterMoveHandler(playerIndex, i)
        );
    };

    afterMoveHandler = (playerIndex: 1 | 2, actionPitIndex: number) => {
        if (this.state.playerTurn == playerIndex) {
            this.openNotification('you get free turn !!!');
        }
        if (this.canCapture(this.state.board, playerIndex, actionPitIndex)) {
            this.captureHandler(playerIndex, actionPitIndex);
        } else {
            this.checkGameResult();
        }
    };

    canCapture = (board: number[], playerIndex: 1 | 2, index: number) => {
        if (playerIndex == 1) {
            return (
                index >= 0 &&
                index < 6 &&
                board[index + 1] == 1 &&
                board[capturedIndex[index + 1]] > 0
            );
        }

        if (playerIndex == 2) {
            return (
                index <= 12 &&
                index > 6 &&
                board[index + 1] == 1 &&
                board[capturedIndex[index + 1]] > 0
            );
        }
    };

    captureHandler = (playerIndex: 1 | 2, activePitIndex: number) => {
        const {board} = this.state;
        if (playerIndex == 1) {
            board[0] += board[activePitIndex + 1] + board[capturedIndex[activePitIndex + 1]];
        } else {
            board[7] += board[activePitIndex + 1] + board[capturedIndex[activePitIndex + 1]];
        }
        this.openNotification('captured!!!');
        board[activePitIndex + 1] = 0;
        board[capturedIndex[activePitIndex + 1]] = 0;
        this.setState({board}, () => {
            this.checkGameResult();
        });
    };

    checkGameResult = () => {
        const {board} = this.state;
        const firstPlayerStones = board
            .slice(1, 7)
            .reduce((total: number, current: number) => total + current, 0);

        const secondPlayerStones = board
            .slice(8)
            .reduce((total: number, current: number) => total + current, 0);
        const gameFinished = firstPlayerStones == 0 || secondPlayerStones == 0;
        if (gameFinished) {
            board[0] += firstPlayerStones;
            board[7] += secondPlayerStones;
            this.setState({board}, () => {
                this.showGameResult(board);
            });
        }
    };

    showGameResult = (board: number[]) => {
        let gameResult = 'Draws';
        if (board[0] > board[7]) {
            gameResult = this.state.palayers.firstPlayer + ' - winned the game';
        } else if (board[0] < board[7]) {
            gameResult = this.state.palayers.secondPlayer + ' - winned the game';
        }
        this.showWinner(
            gameResult,
            {
                name: this.state.palayers.firstPlayer,
                score: board[0]
            },
            {
                name: this.state.palayers.secondPlayer,
                score: board[7]
            }
        );
    };

    togglePlayer = (playerIndex: 1 | 2) => {
        return playerIndex == 1 ? 2 : 1;
    };

    getFreeTurnIndex(playerIndex: number) {
        return playerIndex == 1 ? 0 : 7;
    }

    detecNextPlayer = (activePitIndex: number, playerIndex: 1 | 2) => {
        if (activePitIndex == this.getFreeTurnIndex(playerIndex)) {
            return playerIndex;
        } else {
            return this.togglePlayer(playerIndex);
        }
    };

    render() {
        const {gameIsStarting, playerTurn} = this.state;
        return (
            <div>
                <Title level={2} style={{textAlign: 'center'}}>
                    welcome to Mancala Game
                </Title>
                {!gameIsStarting && <GameEntry onSubmit={this.hanldeEntryFormSubmit} />}
                {gameIsStarting && (
                    <GameBoard
                        board={this.state.board}
                        onPitClick={this.handlePitClick}
                        activePlayer={playerTurn}
                        players={this.state.palayers}
                        onExit={this.handleExitGame}
                        onReset={this.handleGameReset}
                    />
                )}
            </div>
        );
    }
}

export default Game;
