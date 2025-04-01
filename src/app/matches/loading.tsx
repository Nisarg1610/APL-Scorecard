import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-white flex flex-col items-center space-y-4">
        {/* APL Logo */}
        <div className="text-6xl font-bold text-blue-500 animate-pulse">APL</div>
        <div className="text-xl text-gray-400">Loading...</div>

        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
