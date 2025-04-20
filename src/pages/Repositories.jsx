import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ChevronLeft, Search } from 'lucide-react'
import RepoItem from '../components/RepoItem'
import Loader from '../components/Loader'
import { useGitHub } from '../context/githubContext'

const Repositories = () => {
  const { username } = useParams()
  const { user, repositories, loading, error, searchUser, getUserRepos } = useGitHub()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      if (!username) return
      if (!user || user.login !== username) {
        const userData = await searchUser(username)
        if (!userData) {
          navigate('/')
          return
        }
      }
      if (repositories.length === 0 || user?.login !== username) {
        await getUserRepos(username)
      }
    }

    fetchData()
    document.title = username ? `${username}'s Repositories - GitFinder` : 'GitFinder'
  }, [username, user?.login, repositories.length, searchUser, getUserRepos, navigate])

  const filteredRepos = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  if (loading) return <Loader />

  if (error) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 mt-8 animate-fade-in">
        <h2 className="text-2xl font-bold text-red-500 mb-4 text-center">Error</h2>
        <p className="text-gray-700 mb-6 text-center">{error}</p>
        <button
          onClick={() => navigate('/')}
          className="w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium shadow-md hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        >
          Back to Home
        </button>
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <button
          onClick={() => navigate(`/profile/${username}`)}
          className="group inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-200 mb-4"
        >
          <ChevronLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Profile
        </button>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {user.name || username}'s Repositories
            </h1>
            <p className="text-gray-600">
              {repositories.length} {repositories.length === 1 ? 'repository' : 'repositories'} found
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search repositories..."
              className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {filteredRepos.length > 0 ? (
        <div className="space-y-4">
          {filteredRepos.map((repo) => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <p className="text-gray-600">
            {searchTerm
              ? 'No repositories match your search criteria'
              : 'No repositories found for this user'}
          </p>
        </div>
      )}
    </div>
  )
}

export default Repositories
