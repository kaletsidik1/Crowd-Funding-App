import React, { useState } from 'react';

// Assuming you have a user object with roles from your context or state
const user = {
  name: 'Jane Doe',
  roles: ['creator', 'backer'], // User has both roles for this example
};

const Dashboard = () => {
  // State to manage the active tab. 'overview' is the default.
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
          <p className="mt-2 text-gray-600">Here's a quick overview of your activity.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-white rounded-t-lg shadow-md border-b border-gray-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 font-semibold text-lg transition-colors duration-200 ${
              activeTab === 'overview'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Overview
          </button>
          {user.roles.includes('creator') && (
            <button
              onClick={() => setActiveTab('creator')}
              className={`px-6 py-3 font-semibold text-lg transition-colors duration-200 ${
                activeTab === 'creator'
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              My Campaigns
            </button>
          )}
          {user.roles.includes('backer') && (
            <button
              onClick={() => setActiveTab('backer')}
              className={`px-6 py-3 font-semibold text-lg transition-colors duration-200 ${
                activeTab === 'backer'
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              My Contributions
            </button>
          )}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-b-lg shadow-lg p-6 min-h-[500px]">
          {/* Overview Content */}
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard Overview</h2>
              <p className="text-gray-600">This section provides key statistics and recent activity across your creator and backer roles.</p>
              {/* Placeholder for overview widgets like charts, recent activities, etc. */}
            </div>
          )}

          {/* Creator Content */}
          {activeTab === 'creator' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">My Campaigns</h2>
              <p className="text-gray-600">Here you can manage your projects, view metrics, and see recent pledges.</p>
              {/* Placeholder for a list of campaigns, stats, etc. */}
            </div>
          )}

          {/* Backer Content */}
          {activeTab === 'backer' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">My Contributions</h2>
              <p className="text-gray-600">This page shows all the projects you have contributed to and your total contributions.</p>
              {/* Placeholder for a list of contributions with amounts, dates, etc. */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;