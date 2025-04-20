import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-8">
      <div className="relative">
        <div className="absolute inset-0 animate-spin-slow rounded-full h-16 w-16 border-4 border-orange-100"></div>
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-orange-500 border-t-transparent shadow-md"></div>
      </div>
      <p className="mt-4 text-gray-600 animate-pulse">Loading...</p>
    </div>
  );
};

export default Loader;