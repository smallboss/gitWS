import Constants from '../constants/const.js'

export default function(state = 0, action) {
    switch(action.type) {
        case Constants.INC_NUMBER:
            return ++state;

        case Constants.DEC_NUMBER: 
            return --state;

        case Constants.INC2_NUMBER: 
            return state+=2;

        case Constants.DEC2_NUMBER: 
            return state-=2;

        case Constants.REV_NUMBER: 
            return -state;

        case Constants.RES_NUMBER:
            return 0;

        default:
            return state;
    }
}