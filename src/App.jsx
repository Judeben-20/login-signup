import React, { useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Dashboard from './components/Dashboard.jsx';

function App() {
  const [view, setView] = useState('login'); // 'login' | 'signup' | 'dashboard'

  const handleAuthSuccess = () => {
    setView('dashboard');
  };

  const handleLogout = () => {
    setView('login');
  };

  return (
    <div className="app-root">
      <AnimatedBackground />
      <div className="app-shell">
        {view === 'dashboard' ? (
          <Dashboard onLogout={handleLogout} />
        ) : view === 'login' ? (
          <Login
            onSwitchToSignup={() => setView('signup')}
            onLoginSuccess={handleAuthSuccess}
          />
        ) : (
          <Signup
            onSwitchToLogin={() => setView('login')}
            onSignupSuccess={handleAuthSuccess}
          />
        )}
      </div>
    </div>
  );
}

export default App;
