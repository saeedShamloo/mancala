import * as React from 'react';
import {Typography} from 'antd';
import Paper from 'components/share/Paper';

const {Text} = Typography;

export type ScoreProps = {
    value: number;
    playerName: string;
};

class Score extends React.Component<ScoreProps, {}> {
    static defaultProps = {
        value: 0
    };

    render() {
        const {value, playerName} = this.props;
        return (
            <Paper
                style={{
                    borderRadius: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '10px 0'
                }}
            >
                <Text type="secondary" ellipsis>
                    {playerName}
                </Text>
                <Text>{value}</Text>
            </Paper>
        );
    }
}

export default Score;
