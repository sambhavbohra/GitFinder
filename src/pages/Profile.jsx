import { Link } from "react-router-dom"
import ProfileCard from "../components/ProfileCard"

function ProfilePage() {
  return (
    <div className="space-y-6">
      {/* Navigation Links */}
      <div className="flex justify-center space-x-6 mb-8 bg-white rounded-lg shadow-sm p-4">
        <Link 
          to="/" 
          className="px-4 py-2 text-orange-600 font-semibold hover:bg-orange-50 rounded-md transition-colors duration-200 border-b-2 border-orange-500"
        >
          Profile
        </Link>
        <Link 
          to="/repos" 
          className="px-4 py-2 text-gray-600 font-semibold hover:bg-orange-50 rounded-md transition-colors duration-200 hover:text-orange-600"
        >
          Repositories
        </Link>
        <Link 
          to="/followers" 
          className="px-4 py-2 text-gray-600 font-semibold hover:bg-orange-50 rounded-md transition-colors duration-200 hover:text-orange-600"
        >
          Followers
        </Link> 
      </div>

      {/* Profile Card Section */}
      <div className="animate-fade-in">
        <ProfileCard user={{}} />
      </div>
    </div>
  )
}

export default ProfilePage