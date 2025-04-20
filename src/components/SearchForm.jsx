import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { useGitHub } from '../context/GitHubContext'

const SearchForm = () => {
  const [username, setUsername] = useState('')
  const [inputError, setInputError] = useState('')
  const { searchUser, loading, error } = useGitHub()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!username.trim()) {
      setInputError('Please enter a GitHub username')
      return
    }
    setInputError('')
    const user = await searchUser(username.trim())
    if (user) {
      navigate(`/profile/${user.login}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto animate-fade-in">
      <div className="flex flex-col space-y-4">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-hover:text-orange-500 transition-colors duration-200" />
          </div>
          <input
            type="text"
            className="w-full px-10 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 placeholder-gray-400 text-gray-600"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
          />
        </div>
        
        {inputError && (
          <p className="text-red-500 text-sm animate-shake">{inputError}</p>
        )}
        
        {error && (
          <p className="text-red-500 text-sm animate-shake">{error}</p>
        )}
        
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium shadow-md hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Searching...
            </div>
          ) : (
            'Search'
          )}
        </button>
      </div>
    </form>
  )
}

export default SearchForm