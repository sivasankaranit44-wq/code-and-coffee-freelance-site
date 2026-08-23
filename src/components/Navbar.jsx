import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo.png'

const navLinks = [
    {name:'Home', path:'/'},
    {name:'About', path:'/about'},
    {name:'Contact', path:'/contact'},
    {name:'Bookacall', path:'/bookacall'},
    {name:'Portfolio', path:'/portfolio'},
    {name:'Services', path: '/services'}
];

export default function Navbar() {
    const [menuOpen, setMenuOpen]=useState(false)
    const location = useLocation();

return (
    <nav className="bg-white border-b border-amber-100 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Code and Coffee Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-lg font-bold text-amber-900">
            Code <span className="text-amber-600">and</span> Coffee
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition ${
                location.pathname === link.path
                  ? "text-amber-700 border-b-2 border-amber-600 pb-0.5"
                  : "text-gray-600 hover:text-amber-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Book a Call Button */}
        <div className="hidden md:block">
          <Link
            to="/bookacall"
            className="bg-amber-700 hover:bg-amber-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-amber-900 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-amber-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium transition ${
                location.pathname === link.path
                  ? "text-amber-700"
                  : "text-gray-600 hover:text-amber-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book-a-call"
            onClick={() => setMenuOpen(false)}
            className="bg-amber-700 hover:bg-amber-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition text-center"
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
}
