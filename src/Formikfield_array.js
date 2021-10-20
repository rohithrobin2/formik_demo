import { useFormik } from 'formik';
import React from 'react'

function FormikfieldArray() {
    const formik=  useFormik({
        initialValues:{
          name:'',
          email:'',
         channnel:''
      
        }
      })
    return (
        <div>
 <label>Name</label>
    <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
    <label>Email</label>
    <input type='email' id='email' name='email'onChange={formik.handleChange}/>
    <label>channel name</label>
    <input type='text' id='channel' name='channel' onChange={formik.handleChange}/>
    
<button>Submit</button>
<p>{formik.values.name}</p>
<p>{formik.values.email}</p>
<p>{formik.values.channel}</p>
        </div>
    )
}

export default FormikfieldArray;
