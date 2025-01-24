import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FormInput from '../Components/FormInput';
import Button from '../Components/Button';
import '../Style/ResetPassword.css'

const ForgetPassword = () => {

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email); 
  };

  return (
    <>
    <div className="container forget-password-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 style={{ marginTop: "40px" }}>Forget Password</h1>
        <p>Enter your email address to receive a reset link.</p>
        <FormInput
          type="email"
          name="email"
          placeholder="Email Address"
          icon="mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" label="Send Reset Link" className="primary-button" onClick={() => navigate("/Resetpassword")}/>
        <Button
          type="button"
          label="Back to Login"
          onClick={() => navigate("/")}
          className="secondary-button"
        />
      </form>
    </div>
    </>
  )
}

export default ForgetPassword
