import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AlertCircle } from 'lucide-react'

const NotFound = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    document.title = 'Page Not Found - GitFinder'
  }, [])
  
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-100 rounded-full animate-pulse">
            <AlertCircle className="h-12 w-12 text-red-500" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          404 - Page Not Found
        </h1>
        
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <button
          onClick={() => navigate('/')}
          className="w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium shadow-md hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default NotFound