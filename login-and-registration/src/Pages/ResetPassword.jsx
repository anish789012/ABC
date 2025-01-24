import React, { useState } from 'react'
import FormInput from '../Components/FormInput';
import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom';
import '../Style/ResetPassword.css'

const ResetPassword = () => {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Password reset successful!"); 
  };

  return (
    <>
    <div className="container reset-password-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 style={{ marginTop: "40px" }}>Reset Password</h1>
        <p>Enter your new password below.</p>
        <FormInput
          type="password"
          name="password"
          placeholder="New Password"
          icon="lock"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          icon="lock"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit" label="Reset Password" className="primary-button"/>
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

export default ResetPassword
