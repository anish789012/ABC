import React, { useState } from 'react'
import SocialIcon from '../Components/SocialIcon';
import FormInput from '../Components/FormInput';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import '../Style/Responsive.css'

const LoginandRegister = () => {

  const [isSignUp, setIsSignUp] = useState(true); 
  const [isPanelActive, setIsPanelActive] = useState(false); 

  const handleSignInClick = () => {
    setIsSignUp(false); 
    setIsPanelActive(false); 
  };

  const handleSignUpClick = () => {
    setIsSignUp(true); 
    setIsPanelActive(true); 
  };

  return (
    <>
    <div
        className={`container ${isPanelActive ? "right-panel-active" : ""}`}
        id="container"
      >
        <div
          className={`form-container sign-up-container ${
            isSignUp ? "active" : ""
          }`}
        >
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <h1>Create Account</h1>
            <SocialIcon />
            <span>or use your email for registration</span>
            <FormInput
              type="text"
              name="name"
              placeholder="Enter Name"
              icon="person"
            />
            
            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              icon="lock"
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div
          className={`form-container sign-in-container ${
            !isSignUp ? "active" : ""
          }`}
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <h1>Sign in</h1>
            <SocialIcon />
            <span>or use your account</span>
            <FormInput
              type="email"
              name="email"
              placeholder="Email Address"
              icon="mail"
            />
            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              icon="lock"
            />
            <Link to='/Forgetpassword'>Forget Password?</Link>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <Button
                onClick={handleSignInClick}
                label="Sign In"
                className=""
              />
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <Button
                onClick={handleSignUpClick}
                label="Sign Up"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginandRegister

