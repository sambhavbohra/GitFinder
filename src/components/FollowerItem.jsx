import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGitHub } from '../context/GitHubContext';

const FollowerItem = ({ follower }) => {
  const navigate = useNavigate();
  const { searchUser } = useGitHub();
  
  const handleClick = async () => {
    await searchUser(follower.login);
    navigate(`/profile/${follower.login}`);
  };
  
  return (
    <div className="card p-4 flex items-center hover:translate-y-[-2px]">
      <img 
        src={follower.avatar_url} 
        alt={`${follower.login}'s avatar`}
        className="w-12 h-12 rounded-full mr-4"
      />
      
      <div className="flex-1">
        <h3 className="font-medium text-gray-800">{follower.login}</h3>
        <a 
          href={follower.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-orange-500 transition-colors"
        >
          View on GitHub
        </a>
      </div>
      
      <button
        onClick={handleClick}
        className="btn btn-secondary text-xs px-3 py-1"
      >
        Profile
      </button>
    </div>
  );
};

export default FollowerItem;