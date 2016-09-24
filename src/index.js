import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/App.jsx';
import store from './state';
import Constants from './constants/const'
import API_YTItems from './api/YTItems'

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

store.subscribe( () => console.log('New state: ', store.getState()));

store.dispatch({
    type: Constants.INC_NUMBER
});

store.dispatch({
    type: Constants.INC2_NUMBER
});

store.dispatch({
    type: Constants.INC2_NUMBER
});

store.dispatch({
    type: Constants.REV_NUMBER
});

store.dispatch({
    type: Constants.RES_NUMBER
});

store.dispatch({
    type: Constants.LOAD_VIDEO,
    YTItems: [{id: 0, yti: 0}, {id:1, yti: 1}] 
});


store.dispatch({
    type: 'PROMISE',
    actions: ['YT_LOADING', 'YT_LOADED', 'YT_ERROR'],
    promise: API_YTItems.getVideoListByTitle('car')
});