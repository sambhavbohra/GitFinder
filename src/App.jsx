import SearchBar from './components/SearchBar'
import ProfilePage from './pages/ProfilePage'
import ReposPage from './pages/ReposPage'
import FollowersPage from './pages/FollowersPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white px-4 sm:px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-orange-600 mb-8 text-center">
          GitFinder
        </h1>

        <div className="mb-8 animate-fade-in">
          <SearchBar />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in">
          <Routes>
            <Route path="/" element={<ProfilePage />} />
            <Route path="/repos" element={<ReposPage />} />
            <Route path="/followers" element={<FollowersPage />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
