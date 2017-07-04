export const initialState = {
  text: "Sample Text",
  count: 1
}

// Actions 

export const CHANGE_TEXT = 'CHANGE_TEXT';
export const CHANGE_COUNT = 'CHANGE_COUNT';


// Reducers 

export const reducer = (state = initialState, action) => {
    if (!action) return state;
    
    switch (action.type) {
        case CHANGE_TEXT:
            const {text} = action;
            return {
                ...state,
                text
            }
        case CHANGE_COUNT:
            const {count} = action;
            return {
                ...state,
                count
            }
        default:
            return state;
    }
}

// Store

const validateAction = action => {
    if (!action || typeof action !== 'object' || Array.isArray(action)) {
        throw new Error('Action must be an object.');
    }
    if (typeof action.type === 'undefined') {
        throw new Error('Action must have a type.');
    }
}

const createStore = (reducer) => {
    let state;
    const subscribers = [];
    const store = {
        dispatch: action => {
            validateAction(action);
            state = reducer(state, action);
            subscribers.forEach(handler => handler());
        },
        getState: () => state,
        subscribe: handler => {
            subscribers.push(handler);
            return () => {
                const index = subscribers.indexOf(handler);
                if (index > 0) {
                    subscribers.splice(index, 1);
                }
            }
        }
    }
    store.dispatch({type: '@@redux/INIT'});
    return store;
}

export const store = createStore(reducer);