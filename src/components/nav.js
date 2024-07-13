///

import React from 'react';

function Nav() {
  return (
    <div className="App">
      <nav className="border-gray-200">
        <div className="max-w-screen-xl mx-auto flex justify-end">
          <ul className="flex space-x-4 p-1 md:p-0">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 dark:text-black"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-black"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-black"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;