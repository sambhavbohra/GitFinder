import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Github, Menu, X } from 'lucide-react';
import { useGitHub } from '../context/GitHubContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, clearUser } = useGitHub();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    clearUser();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={handleLogoClick}
              className="group flex items-center space-x-2 text-gray-800 hover:text-orange-500 transition-all duration-300"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-bold text-xl bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                GitFinder
              </span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" onClick={() => clearUser()}>Home</NavLink>
            {user && (
              <>
                <NavLink to={`/profile/${user.login}`}>Profile</NavLink>
                <NavLink to={`/profile/${user.login}/repos`}>Repositories</NavLink>
                <NavLink to={`/profile/${user.login}/followers`}>Followers</NavLink>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
          <MobileNavLink to="/" onClick={() => {
            clearUser();
            setIsMenuOpen(false);
          }}>
            Home
          </MobileNavLink>
          {user && (
            <>
              <MobileNavLink to={`/profile/${user.login}`} onClick={() => setIsMenuOpen(false)}>
                Profile
              </MobileNavLink>
              <MobileNavLink to={`/profile/${user.login}/repos`} onClick={() => setIsMenuOpen(false)}>
                Repositories
              </MobileNavLink>
              <MobileNavLink to={`/profile/${user.login}/followers`} onClick={() => setIsMenuOpen(false)}>
                Followers
              </MobileNavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ children, ...props }) => (
  <Link
    {...props}
    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ children, ...props }) => (
  <Link
    {...props}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300"
  >
    {children}
  </Link>
);

export default Navbar;