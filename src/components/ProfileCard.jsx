import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Link as LinkIcon, Building, Users, Bookmark } from 'lucide-react';
import { useGitHub } from '../GithubContext';

const ProfileCard = () => {
  const { user } = useGitHub();
  const navigate = useNavigate();
  
  if (!user) return null;
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto transform transition-all duration-300 hover:shadow-xl animate-fade-in">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
            <img 
              src={user.avatar_url} 
              alt={`${user.login}'s avatar`} 
              className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-orange-100 hover:border-orange-200 transition-all duration-300 object-cover"
            />
          </div>
        </div>
        
        <div className="flex-1 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                {user.name || user.login}
              </h1>
              <a 
                href={user.html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-orange-500 transition-colors inline-flex items-center gap-1"
              >
                @{user.login}
                <LinkIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {user.bio && (
            <p className="text-gray-600 leading-relaxed">{user.bio}</p>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {user.company && (
              <div className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                <Building className="h-5 w-5 mr-2 text-orange-500" />
                <span>{user.company}</span>
              </div>
            )}
            
            {user.location && (
              <div className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                <MapPin className="h-5 w-5 mr-2 text-orange-500" />
                <span>{user.location}</span>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <StatsButton
              icon={<Bookmark className="h-5 w-5 text-orange-500" />}
              count={user.public_repos}
              label="Repositories"
              onClick={() => navigate(`/profile/${user.login}/repos`)}
            />
            
            <StatsButton
              icon={<Users className="h-5 w-5 text-orange-500" />}
              count={user.followers}
              label="Followers"
              onClick={() => navigate(`/profile/${user.login}/followers`)}
            />
            
            <StatsButton
              icon={<Users className="h-5 w-5 text-orange-500" />}
              count={user.following}
              label="Following"
              isStatic
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsButton = ({ icon, count, label, onClick, isStatic = false }) => {
  const baseClasses = "flex flex-col items-center p-3 rounded-lg transition-all duration-300";
  const dynamicClasses = isStatic
    ? "bg-orange-50"
    : "bg-orange-50 hover:bg-orange-100 hover:scale-105 cursor-pointer";

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${dynamicClasses}`}
    >
      <div className="flex items-center gap-1.5 mb-1">
        {icon}
        <span className="font-bold text-gray-800">{count}</span>
      </div>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );
};

export default ProfileCard;