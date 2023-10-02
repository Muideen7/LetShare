import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [userType, setUserType] = useState('user');
  const [formData, setFormData] = useState({
    userType: 'user',
    firstName: '',
    lastName: '',
    businessName: '',
    city: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

    // Define setMessage state variable
    const [message, setMessage] = useState('');
    
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
    setFormData({ ...formData, userType: event.target.value });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform form submission logic here

    try {
      // Send registration data to the server
      const response = await axios.post("http://localhost:5000/register", formData);

      // Check the response and handle it accordingly
      if (response.status === 200) {
        setMessage('Registration successful: ' + response.data.message);
        // You can set a success message here or redirect to another page
      } else {
        setMessage('Registration failed: ' + response.data.error);
        // Handle the registration error, show an error message, etc.
      }
    } catch (error) {
      setMessage('Registration failed: ' + error.message);
      // Handle network errors or other issues with the registration
    }
  };
 
  return (
    <section className="font-sans">
      <div className="flex flex-col items-center justify-center p-6 sm:p-8 md:flex-row">
        <div className="md:w-1/2">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 mb-4 md:text-2xl text-center">
            Create an account
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="userType" className="block mb-2 text-sm font-medium text-gray-900">
                Select user type
              </label>
              <select
                name="userType"
                id="userType"
                value={userType}
                onChange={handleUserTypeChange}
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring focus:border-primary-600 p-2.5"
                required
              >
                <option value="user">User</option>
                <option value="business">Business</option>
              </select>
            </div>
            {userType === 'user' ? (
              <>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring focus:border-primary-600 p-2.5"
                      placeholder="John"
                      required={userType === 'user'}
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring focus:border-primary-600 p-2.5"
                      placeholder="Doe"
                      required={userType === 'user'}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="businessName" className="block mb-2 text-sm font-medium text-gray-900">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    id="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring focus:border-primary-600 p-2.5"
                    placeholder="ABC Inc."
                    required={userType === 'business'}
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring focus:border-primary-600 p-2.5"
                    placeholder="New York"
                    required={userType === 'business'}
                  />
                </div>
              </>
            )}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring focus:border-primary-600 p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring focus:border-primary-600 p-2.5"
                placeholder="••••••••"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring focus:border-primary-600 p-2.5"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Create an account
            </button>
            <button
              type="button"
              className="w-full bg-red-600 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2"
            >
              Sign up with Google
            </button>
            <p className="text-sm font-light text-gray-500 text-center">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:underline dark:text-primary-500"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
