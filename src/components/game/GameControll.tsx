import * as React from 'react';
import {Button} from 'antd';
import {Style} from 'components/share/types';

const buttonStyle: Style = {width: '50%'};
const containerStyle: Style = {marginTop: 10};

type GameControllProps = {
    onReset: () => void;
    onExit: () => void;
};
class GameControll extends React.Component<GameControllProps, Readonly<{}>> {
    render() {
        const {onExit, onReset} = this.props;
        return (
            <div style={containerStyle}>
                <Button type="primary" onClick={onReset} style={buttonStyle}>
                    reset
                </Button>
                <Button type="danger" onClick={onExit} style={buttonStyle}>
                    exit
                </Button>
            </div>
        );
    }
}

export default GameControll;
