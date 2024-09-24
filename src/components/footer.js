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
         1
          </div>
          <div>
         2
          </div>
          <div>
         3
          </div>
        </div>
    </div>
  );
}

export default Footer;