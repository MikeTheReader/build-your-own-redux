import React, { Component } from 'react';
import PropTypes from 'prop-types';
 import { CHANGE_VALUE, CHANGE_COUNT } from '../our-redux/redux';

import ValueInput from '../presentational/functional-value-input';
import CountInput from '../presentational/functional-count-input';
import CountSlider from '../presentational/functional-count-slider';

class EnterStuff extends Component {
    constructor(props) {
        super(props);
        this.state = props.store.getState();
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onChangeCount = this.onChangeCount.bind(this);
    }

    componentWillMount() {
        this.unsubscribe = this.props.store.subscribe(() =>
            this.setState(this.props.store.getState())
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onChangeValue(value) {
        this.props.store.dispatch({
            type: CHANGE_VALUE,
            value: value
        });
    }

    onChangeCount(count) {
        this.props.store.dispatch({
            type: CHANGE_COUNT,
            count: count
        });
    }



    render() {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">Enter Stuff (Container and Presentational Components)</div>
                <div className="panel-body">
                    <ValueInput 
                        label="Input Text"
                        value={this.state.value}
                        onChange={(event) => this.onChangeValue(event.target.value)}/>
                    <CountInput
                        label="How Many Times Do You Want to Show the Text?"
                        value={this.state.count}
                        onChange={(event) => this.onChangeCount(parseInt(event.target.value, 10))}/>
                    <CountSlider
                        label="Or use this one to adjust the count"
                        value={this.state.count}
                        onChange={(event) => this.onChangeCount(parseInt(event.target.value, 10))}/>
                </div>
            </div>
        )
    }
}

EnterStuff.propTypes = {
    store: PropTypes.object.isRequired
}

export default EnterStuff;