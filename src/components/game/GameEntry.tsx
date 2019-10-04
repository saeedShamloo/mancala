import * as React from 'react';
import Paper from 'components/share/Paper';
import {Form, Icon, Input, Button} from 'antd';
import {GeneralObject} from 'components/share/types';
import {GamePalayers} from './Game';

type GameEntryProps = {
    form: {
        getFieldDecorator: (
            id: string,
            config: GeneralObject
        ) => (element: React.ReactElement) => React.ReactElement;
        validateFields: (
            cb?: (err: object, values: GamePalayers) => void
        ) => void;
    };
    onSubmit: (players: GamePalayers) => void;
};
type GameEntryState = {};

class GameEntry extends React.Component<GameEntryProps, GameEntryState> {
    handleSubmit = (e: Event) => {
        e.preventDefault();
        this.props.form.validateFields((err: object, values: GamePalayers) => {
            if (!err) {
                this.props.onSubmit(values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <Paper>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item label="first palayer">
                        {getFieldDecorator('firstPlayer', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please enter firstPlayer name'
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="user"
                                        style={{color: 'rgba(0,0,0,.25)'}}
                                    />
                                }
                                placeholder="first player"
                            />
                        )}
                    </Form.Item>
                    <Form.Item label="second palayer">
                        {getFieldDecorator('secondPlayer', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please enter secondPlayer name'
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="user"
                                        style={{color: 'rgba(0,0,0,.25)'}}
                                    />
                                }
                                placeholder="second palayer"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{width: '100%'}}
                        >
                            start game
                        </Button>
                    </Form.Item>
                </Form>
            </Paper>
        );
    }
}

export default Form.create({name: 'game_entry_form'})(GameEntry);
