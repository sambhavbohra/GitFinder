import { Routes, Route } from 'react-router-dom'
import SearchBar from './components/SearchForm'
import Navbar from './components/Navbar'
import Footer from './components/Loader'
import ProfilePage from './pages/Profile'
import ReposPage from './pages/Repositories'
import FollowersPage from './pages/Followers'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 to-white">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto space-y-8">

          <div className="animate-fade-in">
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
      </main>

      <Footer />
    </div>
  )
}

export default App
