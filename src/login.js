// Login.js

import React, { useState } from 'react';
import './Login.css'; // Import CSS for styling
import loginimg from "./media/login-image.jpg";

const Login = () => {
  // State variables for form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs (basic validation for demo purposes)
    if (!username || isNaN(username)) {
      alert('Username must be a number.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Invalid email format.');
      return;
    }

    if (!validatePhoneNumber(phone)) {
      alert('Phone number must be numeric and 10 digits.');
      return;
    }

    if (password.length < 5) {
      alert('Password must be at least 5 characters long.');
      return;
    }

    // If all validations pass, you can proceed with further actions like login API call
    alert('Form submitted!');
  };

  // Function to validate email format
  const validateEmail = (email) => {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Function to validate phone number format (numeric and 10 digits)
  const validatePhoneNumber = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };
  return(
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="number"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            pattern="[0-9]{10}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            minLength="5"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
        <button class="login-btn" type="submit">Login</button>
        <button class="Sign_up-btn" type="submit">Sign Up</button>
        </div>
        <div className="Remember-forgot"> 
        <label><input type="checkbox"/>Remember-me</label>
        <a href="#">Forgot-password?</a>
        </div> 

      </form>
    </div>
  );
 
};

export default Login;
