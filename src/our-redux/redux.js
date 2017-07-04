import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

const createStore = (reducer, middleware) => {
    let state;
    const subscribers = [];
    const coreDispatch = action => {
        validateAction(action);
        state = reducer(state, action);
        subscribers.forEach(handler => handler());
    };
    const getState = () => state;

    const store = {
        dispatch: coreDispatch,
        getState,
        subscribe: handler => {
            subscribers.push(handler);
            return () => {
                const index = subscribers.indexOf(handler);
                if (index > 0) {
                    subscribers.splice(index, 1);
                }
            }
        }
    };

    if (middleware) {
        const dispatch = action => store.dispatch(action);
        store.dispatch = middleware({
            dispatch, 
            getState
        })(coreDispatch);
    }

    coreDispatch({type: '@@redux/INIT'});
    return store;
}

const applyMiddleware = (...middlewares) => store => {
    if (middlewares.length === 0) {
        return dispatch => dispatch;
    }

    if (middlewares.length === 1) {
        return middlewares[0]
    }

    const boundMiddlewares = middlewares.map(middleware =>
        middleware(store)
    );

    return boundMiddlewares.reduce((a, b) =>
        next => a(b(next))
    );
}

// Middleware example
const loggingMiddleware = ({getState}) => next => action => {
    console.info('before', getState());
    console.info('action', action);
    const result = next(action);
    console.info('after', getState());
    return result;
}

const thunkMiddleware = ({dispatch, getState}) => next => action => {
    if (typeof action === 'function') {
        return action({dispatch, getState});
    }
    return next(action)
}


export const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggingMiddleware));

// Provider Component
// Note that only Provider and connect are React-specific

export class Provider extends Component {
    getChildContext() {
        return {
            store: this.props.store
        }
    }

    render() {
        return this.props.children;
    }
}

Provider.childContextTypes = {
    store: PropTypes.object
}


// connect (high level component factory)

export const connect = (
    mapStateToProps = () => ({}),
    mapDispatchToProps = () => ({})
) => Component => {
    class Connected extends Component {
        onStoreOrPropsChange(props) {
            const {store} = this.context;
            const state = store.getState();
            const stateProps = mapStateToProps(state, props);
            const dispatchProps = mapDispatchToProps(store.dispatch, props);
            this.setState({
                ...stateProps,
                ...dispatchProps
            });
        }

        componentWillMount() {
            const {store} = this.context;
            this.onStoreOrPropsChange(this.props);
            this.unsubscribe = store.subscribe(() => this.onStoreOrPropsChange(this.props));
        }

        componentWillReceiveProps(nextProps) {
            this.onStoreOrPropsChange(nextProps);
        }

        componentWillUnmount() {
            this.unsubscribe();
        }

        render() {
            return <Component {...this.props} {...this.state} />;
        }
    }

    Connected.contextTypes = {
        store: PropTypes.object
    }

    return Connected;
}