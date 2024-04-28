import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <nav style={{/*background: 'linear-gradient(to bottom, #000000ba, #ffffff36)'*/ background: '#1067e985'}} className="text-white">
        <div className="mx-0 px-4 py-2 w-full">
            <div className="flex items-center justify-between">
                <Link className="text-xl font-bold" to="/">Navbar</Link>
                <button className="block lg:hidden focus:outline-none">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path fill="none" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <div className="flex w-auto flex-wrap lg:flex lg:flex-grow lg:items-center lg:w-auto">
                    <div className="text-lg lg:flex-grow">
                        <Link className="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 ml-4" to="/">Home</Link>
                        <Link className="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 ml-4" to="/user">User</Link>
                        <Link className="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 ml-4" to="/project">Project</Link>
                        <Link className="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 ml-4" to="/contact">Contact Us</Link>
                        <Link className="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 ml-4" to="/about">About Us</Link>
                    </div>
                    <form className="lg:ml-4 my-4 lg:my-0">
                        <input className="border border-white bg-white text-black py-1 px-2 rounded-md focus:outline-none" type="text" placeholder="Search" />
                        <button className="bg-white text-black py-1 px-4 ml-2 rounded-md">Search</button>
                    </form>
                </div>
            </div>
        </div>
        </nav>
        </div>
    );
};

export default Header;