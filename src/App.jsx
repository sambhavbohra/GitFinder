import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Repositories from './pages/Repositories';
import Followers from './pages/Followers';
import NotFound from './pages/NotFound';
// import { GitHubProvider } from './context/GitHubContext';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/profile/:username/repos" element={<Repositories />} />
            <Route path="/profile/:username/followers" element={<Followers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} GitFinder 
            <span className="mx-2">•</span>
            <span className="text-orange-600">Made with React & Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;