
import {CHANGE_COUNT, CHANGE_VALUE, reducer, initialState} from './redux';

it('returns undefined state correctly', () => {
    let undefinedState = reducer(undefined, undefined);
    expect(undefinedState).toEqual(initialState);
});

it('returns unknown action state correctly', () => {
    let noActionState = reducer(undefined, {type: 'blah'});
    expect(noActionState).toEqual(initialState);
});

it ('returns change value state correctly', () => {
    let expectedState = {
        ...initialState,
        value: 'Something new'
    }
    let changeValueState = reducer(initialState, {type:CHANGE_VALUE, value:"Something new"});
    expect(changeValueState).toEqual(expectedState);
});

it ('returns change count state correctly', () => {
    let expectedState = {
        ...initialState,
        count: 10
    }
    let changeCountState = reducer(initialState, {type:CHANGE_COUNT, count: 10});
    expect(changeCountState).toEqual(expectedState);
});