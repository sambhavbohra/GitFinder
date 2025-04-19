import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ProfileCard from './components/ProfileCard';

function App() {
  const [userData, setUserData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSearch = async (username) => {
    try {
      setErrorMsg('');
      const response = await fetch(`https://api.github.com/users/${username}`);
      if(!response.ok) {
        throw new Error('User not found');
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setUserData(null);
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <nav className="bg-white shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <h1 className="text-3xl font-bold text-orange-600 flex items-center gap-2 mb-4">
            GitFinder <span className="text-2xl">🔍</span>
          </h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {errorMsg && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-6 animate-fade-in">
            <p className="text-red-600 text-center">{errorMsg}</p>
          </div>
        )}

        {userData && (
          <div className="animate-fade-in">
            <ProfileCard user={userData} />
          </div>
        )}
      </main>

      <footer className="bg-white mt-auto py-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
          GitFinder © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}

export default App
