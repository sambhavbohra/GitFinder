import { useState } from 'react'
import SearchBar from './components/SearchBar'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (username) => {
    console.log(`Searching for ${username}`);
    setSearchTerm(username);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-orange-600 flex items-center gap-2">
            GitFinder <span className="text-2xl">🔍</span>
          </h1>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <SearchBar onSearch={handleSearch} />
        
        {searchTerm && (
          <div className="mt-6 p-4 bg-white rounded-lg shadow-md animate-fade-in-down">
            <p className="text-gray-700">
              Searching for: 
              <span className="ml-2 font-semibold text-orange-600">
                {searchTerm}
              </span>
            </p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
