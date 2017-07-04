import React from 'react';
import PropTypes from 'prop-types';

const CountInput = ({value, onChange, label}) => {
    return (
        <div className='form-group'>
            <label>{label}</label>
            <input
                className='form-control'
                type='number'
                value={value}
                min="0" max="100"
                onChange={onChange}/>
        </div>
    );
}

CountInput.propTypes = {
    label: PropTypes.string.isRequired,
    count: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default CountInput;