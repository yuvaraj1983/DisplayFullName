import React, { useState } from 'react'
import { Tooltip } from '@mui/material'

const DisplayFullName = () => {
    const [fields, setFields] = useState({});
    const [errors, setErrors] = useState({});
    const [fullName, setFullname] = useState();

    const handleChange = (field, value) => {
        setFields({...fields,[field]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fields);
        const formFields = {...fields};
        setErrors({});
        if(!formFields['firstname']){
            //setErrors("Please fill out this field");
            //setErrors({...errors,['firstname']:"Please fill out this field"})
            setErrors({['firstname']:"Please fill out this field"})
            return;
        }
        else if(!formFields['lastname']){
            //setError("Please fill out this field");
            //setErrors({...errors,['lastname']:"Please fill out this field"})
            setErrors({['lastname']:"Please fill out this field"})
            return;
        }
        setFullname(`Full Name: ${formFields['firstname']} ${formFields['lastname']}`)
    }
  return (
    <div>
        <form action="">
        <h1>Full Name Display</h1>
        <div>
            <label htmlFor="firstname">FirstName:</label>
            {/* <Tooltip title='Please fill out this field' arrow placement="top"> */}
                <input name="firstname" type="text" 
            onChange={e => handleChange('firstname',e.target.value)} value={fields['firstname']} />
            {/* </Tooltip>
             */}
            <span>{errors['firstname']}</span>
        </div>
        <div>
        <label htmlFor="lastname">LastName:</label>
            <input name="lastname" type="text" 
            onChange={e => handleChange('lastname',e.target.value)} value={fields['lastname']} />
            <span>{errors['lastname']}</span>
        </div>
        <button type='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
        <div>
              {fullName}
        </div>
    </div>
  )
}

export default DisplayFullName