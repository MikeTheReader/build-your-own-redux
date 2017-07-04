import React from 'react';
import PropTypes from 'prop-types';


const DisplayValues = ({value, count}) => {
    return (
        <div className="panel panel-success">
            <div className="panel-heading">Display Stuff</div>
            <div className="panel-body">
                <h3>Value</h3>
                <p>{value}</p>

                <h3>Count</h3>
                <p>{count}</p>
            </div>
        </div>
    );
}

DisplayValues.propTypes = {
    value: PropTypes.string,
    count: PropTypes.number
}

export default DisplayValues;