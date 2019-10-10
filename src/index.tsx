import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from 'components/App';
import 'antd/dist/antd.css';

const a: string = 00;
const element = (document as Document).getElementById('root');

ReactDom.render(<App />, element);
