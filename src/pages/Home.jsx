import React, { useEffect } from 'react'
import { Github, User, BookOpen, Users } from 'lucide-react'
import SearchForm from '../components/SearchForm'
import { useGitHub } from '../context/GitHubContext'

const Home = () => {
  const { clearUser } = useGitHub()
  
  useEffect(() => {
    clearUser()
    document.title = 'GitFinder - GitHub User Explorer'
  }, [clearUser])

  const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 transform hover:-translate-y-1">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-orange-100 rounded-full">
          <Icon className="h-8 w-8 text-orange-500" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
  
  return (
    <div className="max-w-3xl mx-auto animate-fade-in px-4 sm:px-6 py-8">
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-orange-100 rounded-full mb-6 animate-bounce-slow">
          <Github className="h-16 w-16 text-orange-500" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-3 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          GitFinder
        </h1>
        <p className="text-xl text-gray-600">
          Explore GitHub profiles with ease
        </p>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Search for a GitHub User</h2>
        <SearchForm />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <FeatureCard
          icon={User}
          title="User Profiles"
          description="View detailed information about any GitHub user"
        />
        <FeatureCard
          icon={BookOpen}
          title="Repositories"
          description="Explore public repositories with details and stats"
        />
        <FeatureCard
          icon={Users}
          title="Followers"
          description="Discover and browse through user's followers"
        />
      </div>
      
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-lg p-8 text-white">
        <h2 className="text-2xl font-semibold mb-6">How to Use GitFinder</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Enter a GitHub username in the search box
          </li>
          <li className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            View the user's profile information
          </li>
          <li className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            Explore repositories, followers, and more
          </li>
          <li className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            Click on any user to view their profile
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home