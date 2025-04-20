import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGitHub } from '../context/githubContext';

const FollowerItem = ({ follower }) => {
  const navigate = useNavigate();
  const { searchUser } = useGitHub();
  
  const handleClick = async () => {
    await searchUser(follower.login);
    navigate(`/profile/${follower.login}`);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 flex items-center gap-4 transform hover:-translate-y-1 animate-fade-in">
      <img 
        src={follower.avatar_url} 
        alt={`${follower.login}'s avatar`}
        className="w-12 h-12 rounded-full ring-2 ring-orange-100 hover:ring-orange-300 transition-all duration-300"
      />
      
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 hover:text-orange-600 transition-colors duration-200">
          {follower.login}
        </h3>
        <a 
          href={follower.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-orange-500 transition-colors duration-200 inline-flex items-center gap-1"
        >
          View on GitHub
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
      
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
      >
        View Profile
      </button>
    </div>
  );
};

export default FollowerItem;