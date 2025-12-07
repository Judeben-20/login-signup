import React, { useState } from 'react';

const Login = ({ onSwitchToSignup, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // No real auth here; just jump to dashboard
    onLoginSuccess();
  };

  return (
    <div className="card auth-card">
      <div className="card-header">
        <h1 className="card-title">Welcome back</h1>
        <p className="card-subtitle">Login to access your dashboard</p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <label className="form-label">
          Email
          <input
            type="email"
            required
            className="form-input"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>

        <label className="form-label">
          Password
          <input
            type="password"
            required
            className="form-input"
            placeholder="••••••••"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>

        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>

      <p className="card-footer-text">
        Don&apos;t have an account?{' '}
        <button
          type="button"
          className="link-button"
          onClick={onSwitchToSignup}
        >
          Sign up
        </button>
      </p>
    </div>
  );
};

export default Login;
