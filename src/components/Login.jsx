import React, {useRef,useState} from 'react'
import '../style/Login.css'
import { useAuth,login } from '../firebase'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const Login = () => {

  const  [loading,setLoading]=useState(false)
  const currentUser=useAuth()
  const emailRef=useRef()
  const passwordRef=useRef()
  let navigate = useNavigate();

  console.log(currentUser?.email)
  async function handleLogIn(){
    try{
      setLoading(true)
      await login(emailRef.current.value,passwordRef.current.value)
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1000);
    }catch{
       alert('Something is not working')
    }
    setLoading(false)
  }
  return (
    <div className='Main-Login'>
       <div className='Login'>
           <img src='https://cdn2.downdetector.com/static/uploads/logo/amazon.png' alt='' className='loginImg'/>
           <div className='Login-Div'>
           <form>
               <h3>Sign-In</h3>
               <small>Email</small><br/>
               <input ref={emailRef} className='login-input'  type='email'  minLength={6} placeholder='Email...' required />
               <span></span><br/>
               <small>Password</small><br/>
               <input ref={passwordRef} className='login-input' type='password' minLength={6} maxLength={15} placeholder="Password" required/>
               <br/>
               <button disabled={loading } onClick={handleLogIn} className='SignIn'>Log In</button><br/>
               
               <p className='LogContent'>By continuing, you agree to Amazon's Conditions of <br/> Use and Privacy Notice.</p>
                <select>
                <option>Need Help?</option>
                <option>Forgot Your Password</option>
                <option>Other issues Sign-In</option>
               </select>
           </form>
           </div>
       <div>
       <p className='newAmazon'>New To Amazon?</p>
       <button  className='GoRegister' type='submit'>
       <Link to='/Register'>
         Create Your Amazon Account
       </Link>
       </button>
       </div>
       <hr/>
        <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
       </div>
    </div>
  )
}

export default Login