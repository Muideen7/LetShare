import React from "react";
import "./Dashboard.module.css"; // Import the Business Dashboard styling

const BusinessDashboard = () => {
  return (
    <div className="business-dashboard">
      <div className="business-dashboard-navigation">
        <ul>
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="/">Orders</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Settings</a>
          </li>
        </ul>
      </div>

      <div className="business-dashboard-content">
        <h2>Business Dashboard</h2>

        <div className="business-dashboard-content-section">
          {/* Business dashboard content */}
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;
