import React from 'react';
import { Link } from 'react-router-dom';
import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';
import www from '../assets/www.png';

export default function Navbar() {
  return (
    <nav className="mb-20 py-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo section */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img src={www} alt="logo" className="h-10 w-10" />
            <span className="text-3xl font-semibold text-neutral-300">WebWave</span>
          </Link>
        </div>
        
        {/* Links section */}
        <div className="m-8 flex flex-col items-center gap-4 text-2xl sm:flex-row sm:justify-center sm:gap-4">
          <Link to="/frontend" className="flex items-center gap-2">
            <RiReactjsLine className="text-4xl text-cyan-400" />
            Frontend
          </Link>
          <Link to="/backend" className="flex items-center gap-2">
            <FaNodeJs className="text-3xl text-green-500" />
            Backend
          </Link>
        </div>
      </div>
    </nav>
  );
}
