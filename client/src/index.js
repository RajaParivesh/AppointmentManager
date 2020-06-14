import React from 'react';
import {render} from 'react-dom';
import './assets/styles/index.css';
import Navigation from "./routers/Navigation";
import { createLogicMiddleware } from 'redux-logic';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers'
import logics from './logics';
import { Provider } from 'react-redux';

const initialState = {};
const enhancers = [];

const deps = {};
const logicMiddleware = createLogicMiddleware(logics, deps);
const middleware = [
    logicMiddleware,
];

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    reducers,
    initialState,
    composedEnhancers
);


const target = document.getElementById('root');

const WebApp = () => (
    <Provider store={store}>
        <Navigation/>
    </Provider>
);
render(<WebApp />, target);
