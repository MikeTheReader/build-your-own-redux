import React from 'react';
import PropTypes from 'prop-types';


const DisplayValues = ({text, count}) => {
    return (
        <div className="panel panel-success">
            <div className="panel-heading">Display Stuff</div>
            <div className="panel-body">
                <h3>Value</h3>
                <p>{text}</p>

                <h3>Count</h3>
                <p>{count}</p>
            </div>
        </div>
    );
}

DisplayValues.propTypes = {
    text: PropTypes.string,
    count: PropTypes.number
}

export default DisplayValues;