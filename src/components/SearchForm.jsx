import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useGitHub } from '../context/GitHubContext';

const SearchForm = () => {
  const [username, setUsername] = useState('');
  const [inputError, setInputError] = useState('');
  const { searchUser, loading, error } = useGitHub();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setInputError('Please enter a GitHub username');
      return;
    }
    
    setInputError('');
    const user = await searchUser(username.trim());
    
    if (user) {
      navigate(`/profile/${user.login}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="input pl-10 w-full"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
          />
        </div>
        
        {inputError && (
          <p className="text-red-500 text-sm">{inputError}</p>
        )}
        
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
        
        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
};

export default SearchForm;