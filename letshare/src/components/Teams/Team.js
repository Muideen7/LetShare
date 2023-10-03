import React from 'react';

const TeamMember = ({ name, role, imageUrl }) => (
  <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
    <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
      <img src={imageUrl} loading="lazy" alt={`Photo of ${name}`} className="h-full w-full object-cover object-center" />
    </div>

    <div>
      <div className="text-center font-bold text-indigo-500 md:text-lg">{name}</div>
      <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">{role}</p>

      {/* Social links */}
      <div className="flex justify-center">
        <div className="flex gap-4">
          <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              {/* Add the appropriate SVG path here */}
            </svg>
          </a>

          <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              {/* Add the appropriate SVG path here */}
            </svg>
          </a>
        </div>
      </div>
      {/* End of social links */}
    </div>
  </div>
);

const Team = () => (
  <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Meet our Team</h2>
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          The Incredible Team behind LetShare and it's vibrant mission to prevent food waste.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
       
        <TeamMember
          name="Olayeye Muideen"
          role="Frontend Engineer"
          imageUrl="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256"
        />
        <TeamMember
          name="Oluwatosin Dorcas"
          role="Frontend Engineer"
          imageUrl="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=256"
        />
        <TeamMember
          name="Owoyemi Idris"
          role="Backend Engineer"
          imageUrl="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256"
        />
        <TeamMember
          name="Abraham Adesanya"
          role="Backend Engineer"
          imageUrl="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256"
        />
      </div>
    </div>
  </div>
);

export default Team;