import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Book a Call", path: "/bookacall" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Services", path: "/services" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/70 bg-white/70 shadow-[0_4px_20px_rgba(91,55,35,0.04)] backdrop-blur-xl">

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Code and Coffee Logo"
            className="h-10 w-10 object-contain"
          />

          <span className="text-lg font-bold text-amber-950">
            Code{" "}
            <span className="text-[#a97852]">
              and
            </span>{" "}
            Coffee
          </span>
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">

          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[#8f6345]"
                    : "text-gray-600 hover:text-[#8f6345]"
                }`}
              >
                {link.name}

                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 mx-auto h-0.5 w-5 rounded-full bg-[#a97852]" />
                )}
              </Link>
            );
          })}

        </div>


        {/* Desktop CTA */}
        <div className="hidden md:block">

          <Link
            to="/bookacall"
            className="rounded-lg bg-[#a97852] px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-[#6f4a35]/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#946947] hover:shadow-md"
          >
            Book a Call
          </Link>

        </div>


        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="rounded-lg border border-white/70 bg-white/40 p-2 text-[#8f6345] backdrop-blur-md transition hover:bg-white/70 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}

        </button>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/70 bg-white/80 px-6 py-5 shadow-[0_12px_30px_rgba(91,55,35,0.06)] backdrop-blur-xl md:hidden">

          <div className="flex flex-col gap-1">

            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-[#f1e3d7]/60 text-[#8f6345]"
                      : "text-gray-600 hover:bg-white/70 hover:text-[#8f6345]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}


            {/* Mobile CTA */}
            <Link
              to="/bookacall"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-lg bg-[#a97852] px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm shadow-[#6f4a35]/10 transition-all duration-200 hover:bg-[#946947]"
            >
              Book a Call
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}
