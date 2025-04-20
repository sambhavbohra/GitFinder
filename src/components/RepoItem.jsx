import React from 'react';
import { Star, GitFork } from 'lucide-react';

const RepoItem = ({ repo }) => {
  const formattedDate = new Date(repo.updated_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  
  const getLanguageColor = (language) => {
    if (!language) return 'bg-gray-400';
    
    const colors = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-500',
      Python: 'bg-green-500',
      Java: 'bg-red-500',
      'C#': 'bg-purple-500',
      PHP: 'bg-indigo-400',
      Ruby: 'bg-red-600',
      Go: 'bg-blue-400',
      Rust: 'bg-orange-600',
      Swift: 'bg-orange-500',
      Kotlin: 'bg-purple-400',
      CSS: 'bg-pink-500',
      HTML: 'bg-orange-600',
    };
    
    return colors[language] || 'bg-gray-400';
  };
  
  return (
    <div className="card p-4 hover:translate-y-[-2px]">
      <div className="flex justify-between items-start">
        <div>
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-semibold text-orange-600 hover:underline"
          >
            {repo.name}
          </a>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {repo.description || 'No description provided'}
          </p>
        </div>
        
        <a 
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary text-xs px-3 py-1"
        >
          View
        </a>
      </div>
      
      <div className="flex flex-wrap items-center mt-3 text-sm text-gray-600 gap-3">
        {repo.language && (
          <div className="flex items-center">
            <span className={`w-3 h-3 rounded-full mr-1 ${getLanguageColor(repo.language)}`}></span>
            <span>{repo.language}</span>
          </div>
        )}
        
        <div className="flex items-center">
          <Star className="h-4 w-4 mr-1 text-yellow-500" />
          <span>{repo.stargazers_count}</span>
        </div>
        
        <div className="flex items-center">
          <GitFork className="h-4 w-4 mr-1 text-gray-500" />
          <span>{repo.forks_count}</span>
        </div>
        
        <div className="text-gray-500 ml-auto">
          Updated on {formattedDate}
        </div>
      </div>
    </div>
  );
};

export default RepoItem;