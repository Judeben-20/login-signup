import React, { useState } from 'react';

const Signup = ({ onSwitchToLogin, onSignupSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // No real signup logic, just go to dashboard
    onSignupSuccess();
  };

  return (
    <div className="card auth-card">
      <div className="card-header">
        <h1 className="card-title">Create an account</h1>
        <p className="card-subtitle">Sign up to get started</p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <label className="form-label">
          Name
          <input
            type="text"
            required
            className="form-input"
            placeholder="Jane Doe"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>

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
            placeholder="At least 8 characters"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>

        <button type="submit" className="btn-primary">
          Create account
        </button>
      </form>

      <p className="card-footer-text">
        Already have an account?{' '}
        <button
          type="button"
          className="link-button"
          onClick={onSwitchToLogin}
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default Signup;
