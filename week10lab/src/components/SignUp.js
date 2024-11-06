import React from 'react'
import { useRef } from 'react'

export default function SignUp() {
    var firstnameRef = useRef()
    var lastnameRef = useRef()

    const handleSubmit = (e) => {

        e.preventDefault()
        const data = {
            fnm: firstnameRef.current.value,
            lnm: lastnameRef.current.value
        }

        console.log(data)

    }
  return (
    <div>
        <h1>SignUp</h1>  
        <form onSubmit={handleSubmit}>
        First Name: <input type='text' ref={firstnameRef}  placeholder='Enter First Name'/> <br/>
        Last Name: <input type='text' ref={lastnameRef}  placeholder='Enter Last Name'/> <br/>
        <input type='submit' value='SignUp' />

        </form>
    </div>
  )
}
