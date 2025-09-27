import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500); // Small delay before hiding
          return 100;
        }
        return prev + Math.random() * 15; // Random increment for realistic feel
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        {/* Animated logo/name */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text animate-fade-in">
            Muhammad Shoaib
          </h1>
          <p className="text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            AI & ML Research Student
          </p>
        </div>

        {/* Loading bar */}
        <div className="w-64 mx-auto space-y-4" style={{ animationDelay: '0.4s' }}>
          <div className="h-1 bg-muted rounded-full overflow-hidden animate-fade-in">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-sm text-muted-foreground animate-fade-in">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center space-x-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;