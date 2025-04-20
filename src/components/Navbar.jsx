import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Github, Menu, X } from 'lucide-react';
import { useGitHub } from '../context/GitHubContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, clearUser } = useGitHub();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    clearUser();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={handleLogoClick}
              className="flex items-center text-gray-800 hover:text-orange-500 transition-colors"
            >
              <Github className="h-6 w-6 mr-2" />
              <span className="font-bold text-xl">GitFinder</span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className="px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => clearUser()}
            >
              Home
            </Link>
            {user && (
              <>
                <Link 
                  to={`/profile/${user.login}`} 
                  className="px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
                >
                  Profile
                </Link>
                <Link 
                  to={`/profile/${user.login}/repos`}
                  className="px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
                >
                  Repositories
                </Link>
                <Link 
                  to={`/profile/${user.login}/followers`}
                  className="px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
                >
                  Followers
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 hover:text-orange-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 page-transition">
          <div className="container mx-auto px-4 py-2">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md"
              onClick={() => {
                clearUser();
                setIsMenuOpen(false);
              }}
            >
              Home
            </Link>
            {user && (
              <>
                <Link 
                  to={`/profile/${user.login}`} 
                  className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link 
                  to={`/profile/${user.login}/repos`}
                  className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Repositories
                </Link>
                <Link 
                  to={`/profile/${user.login}/followers`}
                  className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Followers
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;