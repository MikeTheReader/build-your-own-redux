import React, { Component } from 'react';
import { CHANGE_TEXT, CHANGE_COUNT, connect } from '../our-redux/redux';

import TextInput from '../presentational/functional-text-input';
import CountInput from '../presentational/functional-count-input';
import CountSlider from '../presentational/functional-count-slider';

class EnterStuff extends Component {
    render() {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">Enter Stuff</div>
                <div className="panel-body">
                    <TextInput 
                        label="Input Text"
                        text={this.props.text}
                        onChange={(event) => this.props.onChangeText(event.target.value)}/>
                    <CountInput
                        label="How Many Times Do You Want to Show the Text?"
                        count={this.props.count}
                        onChange={(event) => this.props.onChangeCount(parseInt(event.target.value, 10))}/>
                    <CountSlider
                        label="Or use this one to adjust the count"
                        count={this.props.count}
                        onChange={(event) => this.props.onChangeCount(parseInt(event.target.value, 10))}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.text,
    count: state.count
});

const mapDispatchToProps = dispatch => ({
    onChangeText: (text) => dispatch({
        type: CHANGE_TEXT,
        text: text
    }),

    onChangeCount: (count) => dispatch({
        type: CHANGE_COUNT,
        count: count
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(EnterStuff);

