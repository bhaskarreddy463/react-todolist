import React, { useState } from 'react';
import './formInput.scss';

const FormInputs = (props) => {
    const {label, onChange, errorMessage, ...inputValues} = props;
    const [focused, setFocused] = useState(false);
    const handleBlur = ()=>{
        setFocused(true);
    }
  return (
    <div className="formInput">
        <label>{label}</label>
        <input 
        {...inputValues}
        onBlur={handleBlur}
        focused={focused.toString()}
        onChange={onChange}/>
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInputs