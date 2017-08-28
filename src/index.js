import React from 'react';
import ReactDOM from 'react-dom';
import 'grommet/scss/vanilla/index.scss';
import './index.css';
import Root from './routes';
import registerServiceWorker from './registerServiceWorker';

require('particles.js');

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
