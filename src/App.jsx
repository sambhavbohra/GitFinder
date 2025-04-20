import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Repositories from './pages/Repositories';
import Followers from './pages/Followers';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/profile/:username/repos" element={<Repositories />} />
          <Route path="/profile/:username/followers" element={<Followers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="bg-white py-4 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} GitFinder - Made with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;