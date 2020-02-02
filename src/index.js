import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './frontend/App';
import { BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './frontend/serviceWorker';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

serviceWorker.unregister();

