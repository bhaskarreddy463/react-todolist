import React from 'react'

const FormInputs = (props) => {
    const {label, onChange, errorMessage, ...inputValues} = props;
  return (
    <div>
        {/* <form> */}
            <label>{label}</label>
            <input 
            {...inputValues}
            onChange={onChange}/>
        {/* </form> */}
    </div>
  )
}

export default FormInputs