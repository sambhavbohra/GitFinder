import React, { useEffect } from 'react';
import { Github, Search, User, BookOpen, Users } from 'lucide-react';
import SearchForm from '../components/SearchForm';
import { useGitHub } from '../context/GitHubContext';

const Home = () => {
  const { clearUser } = useGitHub();
  
  useEffect(() => {
    clearUser();
    document.title = 'GitFinder - GitHub User Explorer';
  }, [clearUser]);
  
  return (
    <div className="max-w-3xl mx-auto page-transition">
      <div className="text-center mb-8">
        <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
          <Github className="h-16 w-16 text-orange-500" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">GitFinder</h1>
        <p className="text-xl text-gray-600">
          Explore GitHub profiles with ease
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Search for a GitHub User</h2>
        <SearchForm />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-orange-100 rounded-full">
              <User className="h-8 w-8 text-orange-500" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">User Profiles</h3>
          <p className="text-gray-600">
            View detailed information about any GitHub user
          </p>
        </div>
        
        <div className="card p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-orange-100 rounded-full">
              <BookOpen className="h-8 w-8 text-orange-500" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Repositories</h3>
          <p className="text-gray-600">
            Explore public repositories with details and stats
          </p>
        </div>
        
        <div className="card p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-orange-100 rounded-full">
              <Users className="h-8 w-8 text-orange-500" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Followers</h3>
          <p className="text-gray-600">
            Discover and browse through user's followers
          </p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg shadow-md p-6 text-white">
        <h2 className="text-2xl font-semibold mb-4">How to Use GitFinder</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Enter a GitHub username in the search box</li>
          <li>View the user's profile information</li>
          <li>Explore repositories, followers, and more</li>
          <li>Click on any user to view their profile</li>
        </ol>
      </div>
    </div>
  );
};

export default Home;