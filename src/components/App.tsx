import * as React from 'react';
import {Style} from './share/types';
import Game from './game/Game';

const containerStyle: Style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    background: '#eaeaea',
    minHeight: '100vh'
};

class App extends React.Component<{}, Readonly<{}>> {
    render() {
        return (
            <div style={containerStyle}>
                <Game />
            </div>
        );
    }
}

export default App;
