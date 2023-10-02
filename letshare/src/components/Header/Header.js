import React from 'react';

function Header() {
  return (
    <div className="bg-white py-6 sm:py-2 lg:py-3">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          Bridging The Gap Between Restaurants and Charity Organizations
        </h2>
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          Welcome to LetShare, where we connect restaurants and charity homes to reduce food waste and help those in need.
        </p>
      </div>
    </div>
  );
}

export default Header;