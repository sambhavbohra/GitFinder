import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard'
import Loader from '../components/Loader'
import { useGitHub } from '../context/GitHubContext'

const Profile = () => {
  const { username } = useParams()
  const { user, loading, error, searchUser } = useGitHub()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      if (!username) return
      if (!user || user.login.toLowerCase() !== username.toLowerCase()) {
        const result = await searchUser(username)
        if (!result) {
          navigate('/')
        }
      }
    }

    fetchUser()
    document.title = username ? `${username} - GitFinder Profile` : 'GitFinder'
  }, [username, user?.login, searchUser, navigate])

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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <ProfileCard />
    </div>
  )
}

export default Profile
