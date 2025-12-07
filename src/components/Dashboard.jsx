import React from 'react';

const Dashboard = ({ onLogout }) => {
  return (
    <div className="card dashboard-card">
      <header className="dashboard-header">
        <div>
          <h1 className="card-title">Dashboard</h1>
          <p className="card-subtitle">
            This is just a frontend demo. No real data yet.
          </p>
        </div>
        <button type="button" className="btn-outline" onClick={onLogout}>
          Logout
        </button>
      </header>

      <div className="dashboard-grid">
        <div className="dash-item">
          <h2 className="dash-item-title">Overview</h2>
          <p className="dash-item-text">
            Add charts, stats, or quick links here once you connect a backend.
          </p>
        </div>
        <div className="dash-item">
          <h2 className="dash-item-title">Activity</h2>
          <p className="dash-item-text">
            Show recent activity, notifications, or messages here.
          </p>
        </div>
        <div className="dash-item">
          <h2 className="dash-item-title">Shortcuts</h2>
          <p className="dash-item-text">
            Create buttons to navigate to important sections of your app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
