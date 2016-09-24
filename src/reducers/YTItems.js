import Constants from '../constants/const.js'

export default function(state = [], action) {
    switch(action.type) {
        case Constants.LOAD_VIDEO: 
            return action.YTItems;

        default: 
            return state;
    }
}