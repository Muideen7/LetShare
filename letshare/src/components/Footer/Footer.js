import React from 'react';

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center border-t pt-6">
          {/* nav - start */}
          <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About Us</a>
            <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">How It Works</a>
            <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Restaurants</a>
            <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Charity Homes</a>
            <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
          </nav>
          {/* nav - end */}

          {/* social - start */}
          <div className="flex gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                {/* Add the appropriate SVG path for Facebook here */}
              </svg>
            </a>

            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                {/* Add the appropriate SVG path for Twitter here */}
              </svg>
            </a>

            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                {/* Add the appropriate SVG path for Instagram here */}
              </svg>
            </a>

            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                {/* Add the appropriate SVG path for LinkedIn here */}
              </svg>
            </a>
          </div>
          {/* social - end */}
        </div>

        {/* Display the current year */}
        <div className="py-8 text-center text-sm text-gray-400">© {currentYear} - Present LetShare. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Footer;
