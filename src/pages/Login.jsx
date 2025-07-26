import React from 'react';
import '../context/Auth.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/');
  };
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <div className="auth-options">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" onClick={handleLogin}>Login</button>
        </form>
        <div className="divider">OR</div>
        <button className="google-btn">Continue with Google</button>
        <p className="switch-auth">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
