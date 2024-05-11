import React, { useState } from 'react'

const DisplayFullName = () => {
    const [fields, setFields] = useState({});
    const [error, setError] = useState()

    const handleChange = (field, value) => {
        setFields({...fields,[field]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fields);
        const formFields = {...fields};
        if(!formFields['firstname']){
            setError("Please fill out this field");
            return;
        }
    }
  return (
    <div>
        <form action="">
        <h1>Full Name Display</h1>
        <div>
            <label htmlFor="firstname">FirstName:</label>
            <input name="firstname" type="text" 
            onChange={e => handleChange('firstname',e.target.value)} value={fields['firstname']} />
            <span>{error}</span>
        </div>
        <div>
        <label htmlFor="lastname">LastName:</label>
            <input name="lastname" type="text" 
            onChange={e => handleChange('lastname',e.target.value)} value={fields['lastname']} />
            <span></span>
        </div>
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
       
    </div>
  )
}

export default DisplayFullName