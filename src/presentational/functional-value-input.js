import React from 'react';
import PropTypes from 'prop-types';

const ValueInput = ({label, value, onChange}) => {
    return (
        
        <div className='form-group'>
            <label>{label}</label>
            <input className='form-control'
                type='text'
                value={value}
                onChange={onChange}/>
        </div>
    )
};

ValueInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default ValueInput;

