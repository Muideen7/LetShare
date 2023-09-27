import React from "react";
import "./Dashboard.module.css"; // Import the User Dashboard styling

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>

      <div className="user-dashboard-navigation">
        <ul>
          <li>
            <a href="/">Profile</a>
          </li>
          <li>
            <a href="/">Orders</a>
          </li>
          <li>
            <a href="/">Settings</a>
          </li>
        </ul>
      </div>

      <div className="user-dashboard-content">
        {/* User dashboard content */}
      </div>
    </div>
  );
};

export default UserDashboard;
