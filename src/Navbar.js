import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative">
      <nav className="p-5 shadow flex items-center justify-between bg-gray-100 container mx-auto px-4">
        <div className="flex items-center">
          <div className="mr-10">
            <img src="/img/logo1.png" alt="Description of the image" />
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-expanded={open}
          >
            <img src="/img/menu-icon.png" alt="" />
          </button>
        </div>
        <div
          className={`absolute bg-gray-100 top-full left-0 right-0 z-50 ${
            open ? 'block' : 'hidden'
          } md:relative md:flex items-center md:justify-center w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:items-center">
            <li className="mx-4 my-6 md:my-0">
              <a
                href="#"
                className="hover:text-green-400 px-3 py-2 duration-500"
              >
                Home
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a
                href="#"
                className="hover:text-green-400 px-3 py-2 duration-500"
              >
                About Wenigro
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a
                href="#"
                className="hover:text-green-400 px-3 py-2 duration-500"
              >
                Products
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a
                href="#"
                className="hover:text-green-400 px-3 py-2 duration-500"
              >
                Contact Us
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <a
                href="#"
                className="hover:text-green-400 px-3 py-2 duration-500"
              >
                FAQ
              </a>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <button className="px-3 py-2 me-2 hover:text-green-400 rounded-full border-2 border-black duration-500">
                Wenigro FARMS
              </button>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <button className="px-3 py-2 me-3 hover:text-green-400 rounded-full border-2 border-black duration-500">
                Wenigro POWERS
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
     );
    };


export default Navbar;
