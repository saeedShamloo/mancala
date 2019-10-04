import * as React from 'react';
import {Avatar} from 'antd';

const avatarStyle: Style = {
    display: 'block',
    margin: 'auto'
};

export type UserAvatarProps = {
    isActive: boolean;
};
class UserAvatar extends React.Component<UserAvatarProps, Readonly<{}>> {
    render() {
        const {isActive} = this.props;
        return (
            <Avatar
                style={{
                    ...avatarStyle,
                    backgroundColor: isActive && '#87d068'
                }}
                icon="user"
            />
        );
    }
}

export default UserAvatar;
