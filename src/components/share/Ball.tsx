import * as React from 'react';

type BallProps = {
    radius?: number;
    color?: string;
};

class Ball extends React.Component<BallProps, Readonly<{}>> {
    static defaultProps = {
        radius: 15,
        color: '#aaa'
    };

    render(): React.ReactElement {
        const {radius, color} = this.props;
        const ballStyle = {
            width: radius + 'px',
            height: radius + 'px',
            background: color,
            borderRadius: '50%',
            display: 'inline-block'
        };
        return <div style={ballStyle} />;
    }
}

export default Ball;
