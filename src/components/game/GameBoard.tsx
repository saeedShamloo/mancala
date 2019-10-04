import * as React from 'react';
import Paper from 'components/share/Paper';
import Score from './Score';
import Pit from './Pit';
import {GamePalayers} from './Game';
import {Row, Col} from 'antd';
import {Style} from 'components/share/types';
import GameControll from './GameControll';
import UserAvatar from './UserAvatar';

const pitsRowStyle: Style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '25px 0'
};

const secondPitsRowStyle: Style = {
    ...pitsRowStyle,
    flexDirection: 'row-reverse'
};

type GameBoardProps = {
    board: number[];
    onPitClick: (playerIndex: number, index: number, value: number) => void;
    activePlayer: 1 | 2;
    players: GamePalayers;
    onReset: () => void;
    onExit: () => void;
};

class GameBoard extends React.Component<GameBoardProps, {}> {
    handleClick = (playerIndex: number, PitIndex: number) => (
        value: number
    ) => {
        this.props.onPitClick(playerIndex, PitIndex, value);
    };

    renderPits = (pitsIndex: number[], playerIndex: 1 | 2) => {
        const {board, activePlayer} = this.props;
        return pitsIndex.map((pitIndex: number) => (
            <Pit
                value={board[pitIndex]}
                key={pitIndex}
                onClick={this.handleClick(playerIndex, pitIndex)}
                disabled={activePlayer != playerIndex}
            />
        ));
    };

    renderFirstPlayerPits = () => {
        return this.renderPits([1, 2, 3, 4, 5, 6], 1);
    };
    renderSecondPlayerPits = () => {
        return this.renderPits([8, 9, 10, 11, 12, 13], 2);
    };

    render() {
        const {board, activePlayer, players, onReset, onExit} = this.props;
        return (
            <>
                <Paper>
                    <Row gutter={16}>
                        <Col xs={24} sm={4}>
                            <UserAvatar isActive={activePlayer == 1} />
                            <Score
                                value={board[0]}
                                playerName={players.firstPlayer}
                            />
                        </Col>
                        <Col span={16} xs={24} sm={16}>
                            <div style={pitsRowStyle}>
                                {this.renderFirstPlayerPits()}
                            </div>
                            <div style={secondPitsRowStyle}>
                                {this.renderSecondPlayerPits()}
                            </div>
                        </Col>
                        <Col span={4} xs={24} sm={4}>
                            <UserAvatar isActive={activePlayer == 2} />
                            <Score
                                value={board[7]}
                                playerName={players.secondPlayer}
                            />
                        </Col>
                    </Row>
                </Paper>
                <GameControll onExit={onExit} onReset={onReset} />
            </>
        );
    }
}

export default GameBoard;
