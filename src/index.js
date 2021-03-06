import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import createStore from './configureStore';
import history from './history';
// import { LastLocationProvider } from 'react-router-last-location';

const store = createStore();
ReactDOM.render(<Provider store={store}><Router history={history}><App /></Router></Provider>, document.getElementById('root'));
// ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
