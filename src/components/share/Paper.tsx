import * as React from 'react';
import {Style} from 'components/share/types';

type PaperProps = {
    borderWidth?: number;
    noShadow?: boolean;
    style?: Style;
};

class Paper extends React.Component<PaperProps, Readonly<{}>> {
    static defaultProps = {
        borderWidth: 1,
        noShadow: false,
        style: {}
    };

    render() {
        const {borderWidth, noShadow, style} = this.props;
        const paperStyle: Style = {
            borderWidth: borderWidth,
            borderStyle: 'solid',
            padding: 20,
            borderColor: '#ebedf0',
            borderRadius: 2,
            boxShadow: noShadow ? '' : '0px 1px 3px 0px #00000033',
            background: '#fff',
            ...style
        };

        return <div style={paperStyle}>{this.props.children}</div>;
    }
}

export default Paper;
