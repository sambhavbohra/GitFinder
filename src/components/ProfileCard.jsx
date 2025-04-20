import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Link as LinkIcon, Building, Users, Bookmark } from 'lucide-react';
import { useGitHub } from '../context/GitHubContext';

const ProfileCard = () => {
  const { user } = useGitHub();
  const navigate = useNavigate();
  
  if (!user) return null;
  
  return (
    <div className="card p-6 max-w-2xl mx-auto page-transition">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <img 
            src={user.avatar_url} 
            alt={`${user.login}'s avatar`} 
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-orange-100"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{user.name || user.login}</h1>
              <a 
                href={user.html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-orange-500 transition-colors"
              >
                @{user.login}
              </a>
            </div>
            <div className="mt-2 md:mt-0">
              <a 
                href={user.html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary text-sm inline-flex items-center"
              >
                <LinkIcon className="h-4 w-4 mr-1" />
                View on GitHub
              </a>
            </div>
          </div>
          
          {user.bio && (
            <p className="text-gray-700 mb-4">{user.bio}</p>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
            {user.company && (
              <div className="flex items-center text-gray-600">
                <Building className="h-4 w-4 mr-2 text-gray-400" />
                <span>{user.company}</span>
              </div>
            )}
            
            {user.location && (
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                <span>{user.location}</span>
              </div>
            )}
            
            {user.blog && (
              <div className="flex items-center text-gray-600">
                <LinkIcon className="h-4 w-4 mr-2 text-gray-400" />
                <a 
                  href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="truncate hover:text-orange-500 transition-colors"
                >
                  {user.blog}
                </a>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <button 
              onClick={() => navigate(`/profile/${user.login}/repos`)}
              className="flex flex-col items-center p-2 bg-orange-50 rounded-md hover:bg-orange-100 transition-colors"
            >
              <div className="flex items-center">
                <Bookmark className="h-4 w-4 mr-1 text-orange-500" />
                <span className="font-bold text-gray-800">{user.public_repos}</span>
              </div>
              <span className="text-xs text-gray-600">Repositories</span>
            </button>
            
            <button 
              onClick={() => navigate(`/profile/${user.login}/followers`)}
              className="flex flex-col items-center p-2 bg-orange-50 rounded-md hover:bg-orange-100 transition-colors"
            >
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1 text-orange-500" />
                <span className="font-bold text-gray-800">{user.followers}</span>
              </div>
              <span className="text-xs text-gray-600">Followers</span>
            </button>
            
            <div className="flex flex-col items-center p-2 bg-orange-50 rounded-md">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1 text-orange-500" />
                <span className="font-bold text-gray-800">{user.following}</span>
              </div>
              <span className="text-xs text-gray-600">Following</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;