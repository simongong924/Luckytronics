import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {ReCaptcha } from 'react-recaptcha-google'
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
