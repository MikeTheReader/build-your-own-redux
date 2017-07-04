import { CHANGE_VALUE } from '../actions/index';

export default function(state = 'Sample text', action) {
    switch(action.type) {
        case CHANGE_VALUE:
            return action.value;
        default:
            return state;
    }
}
