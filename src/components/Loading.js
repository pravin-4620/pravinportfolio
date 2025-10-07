import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <span className="loading-text">Pravin</span>
        </div>
        <div className="loading-bar">
          <div 
            className="loading-progress" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="loading-percentage">{progress}%</div>
      </div>
    </div>
  );
};

export default Loading;
