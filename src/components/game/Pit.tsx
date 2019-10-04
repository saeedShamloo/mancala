import * as React from 'react';
import Ball from 'components/share/Ball';
import {Popover, Button} from 'antd';

type PitProps = {
    value?: number;
    onClick: (value: number) => void;
    disabled: boolean;
};

class Pit extends React.Component<PitProps> {
    renderBalls = () => {
        const ballsCount: number = this.props.value;
        const balls = [];
        for (let i = 0; i < ballsCount; i++) {
            balls.push(<Ball />);
        }
        return balls;
    };

    handleClick = () => {
        const {value, onClick} = this.props;
        onClick(value);
    };

    getBasicPitButton = (label: string | number) => {
        return (
            <Button shape={'circle'} type="primary" style={{margin: '0 5px'}}>
                {label}
            </Button>
        );
    };

    render() {
        const {value, disabled} = this.props;
        if (value == 0 || disabled) {
            return (
                <Popover
                    content={
                        disabled
                            ? 'it is not your turn'
                            : 'you can not select empty pit'
                    }
                    title="oops!!!"
                    trigger="click"
                >
                    {React.cloneElement(this.getBasicPitButton(value), {
                        disabled
                    })}
                </Popover>
            );
        }
        return React.cloneElement(this.getBasicPitButton(value), {
            onClick: this.handleClick
        });
    }
}

export default Pit;
