import React from 'react';
import PropTypes from 'prop-types';

const ValueInput = ({label, text, onChange}) => {
    return (
        
        <div className='form-group'>
            <label>{label}</label>
            <input className='form-control'
                type='text'
                value={text}
                onChange={onChange}/>
        </div>
    )
};

ValueInput.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default ValueInput;

