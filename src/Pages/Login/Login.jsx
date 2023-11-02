import React from 'react'
import '../Register/Register.css'


const Login = () => {
  return (
    <div className='form-container'>
        <div className="form-wrapper">
            <span className="logo">Charan Chat</span>
            <span className="title">Login</span>
            <form >   
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>SignIn</button>
            </form>
            <p>You don't have an account? Register</p>

        </div>
      
    </div>
  )
}

export default Login
