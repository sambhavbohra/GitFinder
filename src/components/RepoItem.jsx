import React from 'react';
import { Star, GitFork, ExternalLink } from 'lucide-react';

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
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 transform hover:-translate-y-1">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-semibold text-orange-600 hover:text-orange-700 transition-colors duration-200 inline-flex items-center gap-2 group"
          >
            {repo.name}
            <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </a>
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            {repo.description || 'No description provided'}
          </p>
        </div>
        
        <a 
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm font-medium hover:bg-orange-100 transition-colors duration-200"
        >
          View Repo
        </a>
      </div>
      
      <div className="flex flex-wrap items-center mt-4 gap-4 text-sm">
        {repo.language && (
          <div className="flex items-center text-gray-600">
            <span className={`w-3 h-3 rounded-full mr-2 ${getLanguageColor(repo.language)}`}></span>
            <span>{repo.language}</span>
          </div>
        )}
        
        <div className="flex items-center text-gray-600">
          <Star className="h-4 w-4 mr-1.5 text-yellow-400" />
          <span>{repo.stargazers_count.toLocaleString()}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <GitFork className="h-4 w-4 mr-1.5 text-gray-400" />
          <span>{repo.forks_count.toLocaleString()}</span>
        </div>
        
        <div className="ml-auto text-sm text-gray-500">
          Updated {formattedDate}
        </div>
      </div>
    </div>
  );
};

export default RepoItem;