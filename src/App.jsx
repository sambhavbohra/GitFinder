import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-2xl font-bold text-gray-800">GitFinder</h1>
            </div>
          </div>
        </nav>
        
        <main className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Welcome to GitFinder
            </h2>
            <p className="text-gray-600">
              Search for GitHub users and explore their repositories
            </p>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
