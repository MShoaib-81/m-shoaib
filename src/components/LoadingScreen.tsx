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
          setTimeout(onLoadingComplete, 300);
          return 100;
        }
        return prev + 3;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
      {/* Logo */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold font-display">
          <span className="gradient-text">MS</span>
        </h1>
      </div>

      {/* Loading bar */}
      <div className="w-48 space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="h-1 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-100 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;