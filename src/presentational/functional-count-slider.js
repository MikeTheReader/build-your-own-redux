import React from 'react';
import PropTypes from 'prop-types';

const CountSlider = ({count, onChange, label}) => {
    return (
        <div className='form-group'>
            <label>{label}</label>
            <input
                type='range'
                value={count}
                min="0" max="100"
                onChange={onChange}/>
        </div>
    );
}

CountSlider.propTypes = {
    label: PropTypes.string.isRequired,
    count: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default CountSlider;


