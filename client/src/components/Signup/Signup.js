import { useState,useEffect } from "react"
import React from 'react';
import { Link,useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import "./Signup.css"
import axios from "axios"
import { clearErrors, register } from "../../actions/userAction"
import image1 from "../../Images/Rectangle1.jpg"
import { Metadata } from "../layout/Metadata"
import { Loader } from "../layout/Loader"
import { Success } from "../layout/Success"
import {useAlert, userAlert} from "react-alert"



export const Signup = ()=>{

const navigate = useNavigate()
const alert = useAlert()

    const {error,loading,isAuthenticated} = useSelector((state)=>state.user)
    
    const dispatch =  useDispatch()
    const [data,setData] = useState({
        username:"",
        email:"",
        password:"",
        dob: ``,
        gender:"",

    })

    const handleChange = (event)=>{

setData({...data,[event.target.name]:event.target.value})
console.log(data)


    }

const handleSubmit = async(e)=>{
e.preventDefault()
dispatch(register(data))
  
}

useEffect(()=>{

if(error){
    alert.error(error)
    dispatch(clearErrors())
}


if(isAuthenticated){
    alert.success("Signup Successfull")
    navigate("/")
}
},[navigate,isAuthenticated,loading,error])
  return(
      <>
{loading&&<Loader/>}
      <Metadata title = "Signup"/>
      <section id="form-section">
    <div className="wel-form">
      <div className="wel-p1 img-main">
        <div className="img-main">

        </div>
      </div>
      <div className="wel-p1 wel-bg">
        <div className="form-content">
          <h2>Hello!</h2>
          <div className="form-main">
            <form onSubmit={handleSubmit} className="form-floating mb-3">
              <div className="form-floating">

              </div>
              <div className="form-floating mb-3">
                <input name="username" value={data.username} onChange={handleChange} type="text" className="form-control"
                  placeholder="Your Full Name"/>
                <label htmlFor="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleChange} type="email" name = "email" required value = {data.email} className="form-control" placeholder="yourmail@mail.com"/>
                <label htmlFor="floatingInput">Email Address</label>
              </div>

              <div className="form-floating mb-3">
                <input 
                        value = {data.password}
                        required 
                        onChange={handleChange} name = "password" 
                 type="password" className="form-control" id="myInput" placeholder="*******"/>
                <i className="fa fa-eye" ></i>
                <label htmlFor="floatingPassword">Passwords</label>
              </div>
              <div className="form-inner">
                <div className="form-floating mb-3">
                  <input onChange={handleChange} name = "dob" value= {data.dob} required type="date" className="form-control" placeholder="dd/mm/yyyy"/>
                  <label htmlFor="floatingInput">Date of Birth</label>
                </div>
                <div className="form-floating">
                  <select name = "gender" onChange = {handleChange} className="form-select" aria-label="Floating label select example">
                    <option disabled>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <label htmlFor="floatingSelect">Gender (Optional)</label>
                </div>

              </div>
            <div className="fom-btn mb-3">
              <button style={{backgroundColor:" #10867F",color:'black'}} disabled = {data.dob ===""} type="submit" className="btn btn-outline-secondary">Sign Up</button>
              <Link to = "/login" type="login" className="btn btn-outline-secondary">Login</Link>
            </div>
            </form>

          </div>
          <p>By signing up, I agree to the <span>Terms and conditions and Privacy policy</span></p>

        </div>
      </div>
    </div>

  </section>



    </>
    )
}

