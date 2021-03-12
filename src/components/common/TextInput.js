import React from 'react';
import PropTypes from 'prop-types';

function TextInput(props){

    let wrapperClass = 'from-group';
    if(props.error.length > 0){
        wrapperClass += ' has-eror';
            }
    return (
        <div className={wrapperClass}>
        <label htmlFor={props.id}>{props.label}</label>
        <div className="field">
          <input
            id={props.id}
            type="text"
            onChange={props.onChange}
            name={props.name}
            className="form-control"
            value={props.value}
          />
        </div>
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>

    );
}

TextInput.prototype = {
    id:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    value:PropTypes.string,
    error:PropTypes.string
}

TextInput.defaultProps = {
error:''
};

export default TextInput;