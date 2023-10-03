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
               <path d="M22.5 12.0645C22.5 6.26602 17.7984 1.56445 12 1.56445C6.20156 1.56445 1.5 6.26602 1.5 12.0645C1.5 17.3051 5.33906 21.649 10.3594 22.4374V15.1005H7.69266V12.0645H10.3594V9.75117C10.3594 7.12008 11.9273 5.66555 14.3255 5.66555C15.4744 5.66555 16.6763 5.87086 16.6763 5.87086V8.45508H15.3516C14.048 8.45508 13.6402 9.26414 13.6402 10.0957V12.0645H16.552L16.087 15.1005H13.6406V22.4384C18.6609 21.6504 22.5 17.3065 22.5 12.0645Z" fill="currentColor" />
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
