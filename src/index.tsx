import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from 'components/App';
import 'antd/dist/antd.css';

const element = (document as Document).getElementById('root');

ReactDom.render(<App />, element);
