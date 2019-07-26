import React from 'react';
import PropTypes from 'prop-types';
import './InputField.scss';

const InputField = props => {
    const { id, placeholder, onChange, name, error, type } = props;
    return (
        <div className="form-group">
            <input
                type={type}
                className="form-control"
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                name={name}
            />
            <p id="passwordHelp" className="text-danger error-message">
                {error}
            </p>
        </div>
    );
};

export default InputField;

InputField.propTypes = {
    id: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func
};
