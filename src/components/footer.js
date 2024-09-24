///

import React from 'react';

function Footer() {
  return (
    <div className="w-full h-24 bg-red-500">
      <nav className="border-gray-200 p-2 font-mono bg-red-500 flex items-start justify-center">
        <span className="text-white">FOOTER</span>

      </nav>

      <div className='font-mono bg-red-500 text-orange-100 flex flex-col md:flex-row lg:flex-row items-start justify-around'>
          <div>
         Quick Links
          </div>
          <div>
         Contacts
          </div>
          <div>
         Social Media Links
          </div>
        </div>
    </div>
  );
}

export default Footer;