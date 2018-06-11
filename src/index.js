import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './static/css/font.css';
import './static/css/common.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { RootReducer } from './reducers';

const store = createStore(RootReducer);
ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
