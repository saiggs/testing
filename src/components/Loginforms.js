import React, { useState } from 'react';
import './Loginforms.css';


const LoginForm = () =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);


 
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegistering) {
      // Handle register logic
      if (username && password) {
        // Perform registration action
        console.log('Registered successfully!');
      } else {
        // Display error message for invalid registration data
        console.log('Invalid registration data');
      }
    } else {
      // Handle login logic
      if (username && password) {
        // Perform login action
        console.log('Logged in successfully!');
      } else {
        // Display error message for invalid login credentials
        console.log('Invalid username or password');
      }
    }
  };

return (
  <form onsubmit={handleSubmit}>
    <input 
    type = "text"
    placeholder="Username"
    value = {username}
    onChange={(e)=>setUsername(e.target.value)}
    />

    <input 
    type ="password"
    placeholder = "Password"
    value ={password}
    onChange={(e)=>setPassword(e.target.value)}
    />

    <button type="submit"> { isRegistering ? 'Register':'Login'} </button>

    <p>
        {isRegistering
          ? 'Already have an account?'
          : "Don't have an account?"}{' '}
        <span
          className="link"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering ? 'Login' : 'Register'}
        </span>
      </p>
    </form>
  );
};

export default LoginForm;
    





























































