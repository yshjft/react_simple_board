import {createStore} from 'redux';

export default createStore(function(state, action){
    if(state===undefined){
        return {
            list : [
                {id : 0},
            ]
        }
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());