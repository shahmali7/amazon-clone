import React, {useRef,useState} from 'react'
import { useDispatch } from 'react-redux'
import { signUp,useAuth } from '../firebase'
import { getUserMail } from '../redux/actions/prodActions'
import { useNavigate } from "react-router-dom";


const Register = () => {
  const  [loading,setLoading]=useState(false)
  const [registered,setRegistered] =useState(false)
  const currentUser=useAuth()
  const emailRef=useRef()
  const passwordRef=useRef()
  const dispatch = useDispatch()
  let navigate = useNavigate();

  dispatch(getUserMail(currentUser))
  async function handleSignUp(){
    
    try{
      setLoading(true)
      await signUp(emailRef.current.value,passwordRef.current.value)
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1000);
      setRegistered(true)
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
               <h3>Sign-Up </h3>
               <small>Email</small><br/>
               <input ref={emailRef} className='login-input'  type='email'  minLength={6} placeholder='Email...' required />
               <span></span><br/>
               <small>Password</small><br/>
               <input ref={passwordRef} className='login-input' type='password' minLength={6} maxLength={15} placeholder="Password" required/>
               <br/>
               <button disabled={loading} onClick={handleSignUp} className='SignIn'>Sign Up</button>
               <p className='RegContent'> <br/>{registered ?  'Succesfully Registered' : ''} </p>
                <select>
                <option>Need Help?</option>
                <option>Forgot Your Password</option>
                <option>Other issues Sign-In</option>
               </select>
           </form>
           </div>
          <hr/>
           <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
       </div>
    </div>
  )
}

export default Register