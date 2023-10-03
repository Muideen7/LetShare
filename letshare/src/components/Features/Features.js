import React from 'react';

function Features() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* Text */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Key Features of LetShare</h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Discover how LetShare brings together restaurants and charity homes to reduce food wastage and fight hunger.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {/* Feature 1 - Food Donations */}
          <div className="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Food Donations</h3>
            <p className="mb-4 text-gray-500">Restaurants can easily donate surplus food to nearby charity homes with just a few clicks.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Learn More</a>
          </div>

          {/* Feature 2 - Food Pickup Scheduling */}
          <div className="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Scheduling Pickups</h3>
            <p className="mb-4 text-gray-500">Charity homes can request food pickups at convenient times, reducing food wastage and hunger.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Request Pickup</a>
          </div>

          {/* Feature 3 - Inventory Management */}
          <div className="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Inventory Management</h3>
            <p className="mb-4 text-gray-500">Track food inventory in real-time, ensuring efficient allocation to those in need.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Manage Inventory</a>
          </div>

          {/* Feature 4 - Community Engagement */}
          <div className="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Community Engagement</h3>
            <p className="mb-4 text-gray-500">Build a community of restaurants and charity homes dedicated to reducing food wastage and hunger.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Join Community</a>
          </div>

          {/* Feature 5 - Reporting and Analytics */}
          <div className="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Reporting and Analytics</h3>
            <p className="mb-4 text-gray-500">Access detailed reports and analytics to measure the impact of food donations and hunger prevention efforts.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">View Reports</a>
          </div>

          {/* Feature 6 - Mobile App Access */}
          <div className="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Mobile App Access</h3>
            <p className="mb-4 text-gray-500">Stay connected on the go with the LetShare mobile app, available on iOS and Android.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Download App</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;