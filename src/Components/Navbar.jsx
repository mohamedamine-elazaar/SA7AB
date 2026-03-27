
import { Link } from 'react-router'
import React, { useState } from 'react'


export default function Navbar() {
   const [open, setOpen] = useState(false);
  return (
    <div>
         <nav className="bg-black text-white px-6 py-4 fixed w-full top-0 z-50">
      
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wider">
          SA7AB
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/services" className="hover:text-cyan-400 transition">Services</Link>
          <Link to="/projects" className="hover:text-cyan-400 transition">Projects</Link>
          <Link to="/about" className="hover:text-cyan-400 transition">About</Link>
          <Link to="/blog" className="hover:text-cyan-400 transition">Blog</Link>
        </div>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="hidden md:block border px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          Contact
        </Link>

        {/* Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 w-full bg-black transition-all duration-500 ${
          open ? "top-16 opacity-100" : "top-[-300px] opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8 text-lg">
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="border px-6 py-2 rounded-full mt-4"
          >
            Contact
          </Link>
        </div>
      </div>

    </nav>
        </div>
  )
}