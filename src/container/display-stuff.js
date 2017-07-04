import React, { Component } from 'react';
import { connect } from '../our-redux/redux';


class DisplayStuff extends Component {
    render() {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">Display Stuff</div>
                <div className="panel-body">
                    <h3>Value</h3>
                    <p>{this.props.text}</p>

                    <h3>Count</h3>
                    <p>{this.props.count}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.text,
    count: state.count
})

export default connect(mapStateToProps)(DisplayStuff);