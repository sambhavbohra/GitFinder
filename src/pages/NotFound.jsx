import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Page Not Found - GitFinder';
  }, []);
  
  return (
    <div className="max-w-md mx-auto text-center py-8 page-transition">
      <div className="flex justify-center mb-4">
        <div className="p-4 bg-red-100 rounded-full">
          <AlertCircle className="h-12 w-12 text-red-500" />
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
      
      <p className="text-gray-600 mb-6">
        The page you are looking for doesn't exist or has been moved.
      </p>
      
      <button
        onClick={() => navigate('/')}
        className="btn btn-primary"
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;