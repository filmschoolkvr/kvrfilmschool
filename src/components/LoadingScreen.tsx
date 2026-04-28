import { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
    const [progress, setProgress] = useState(0);
    const [showLogo, setShowLogo] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Show logo after a brief delay
        const logoTimer = setTimeout(() => setShowLogo(true), 200);

        // Animate progress bar
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        // Trigger fade out and complete loading
        const completeTimer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(onLoadingComplete, 800);
        }, 2500);

        return () => {
            clearTimeout(logoTimer);
            clearInterval(progressInterval);
            clearTimeout(completeTimer);
        };
    }, [onLoadingComplete]);

    return (
        <div
            className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-700 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Glowing orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />

                {/* Film grain overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }} />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Logo with animation */}
                <div
                    className={`mb-8 transition-all duration-1000 ${showLogo ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'
                        }`}
                >
                    <div className="relative">
                        {/* Glow behind logo */}
                        <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl scale-150 animate-pulse" />

                        {/* Logo */}
                        <img
                            src="/Kvr.png"
                            alt="KVR Film School"
                            className="relative h-32 md:h-40 w-auto object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>

                {/* Animated text */}
                <div
                    className={`text-center mb-12 transition-all duration-1000 delay-300 ${showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                >
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        KVR <span className="text-gradient-amber">Film School</span>
                    </h1>
                    <p className="text-muted-foreground text-sm md:text-base">
                        Master Cinematography, Editing & Color Grading
                    </p>
                </div>

                {/* Progress bar */}
                <div
                    className={`w-64 md:w-80 transition-all duration-1000 delay-500 ${showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                >
                    {/* Progress track */}
                    <div className="h-1 bg-muted/30 rounded-full overflow-hidden">
                        {/* Progress fill */}
                        <div
                            className="h-full bg-gradient-to-r from-primary via-primary to-amber-400 rounded-full transition-all duration-100 relative"
                            style={{ width: `${progress}%` }}
                        >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                        </div>
                    </div>

                    {/* Loading text */}
                    <div className="flex justify-between mt-3 text-xs text-muted-foreground">
                        <span>Loading experience...</span>
                        <span>{progress}%</span>
                    </div>
                </div>

                {/* Animated dots */}
                <div className="flex gap-2 mt-8">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="w-2 h-2 rounded-full bg-primary animate-bounce"
                            style={{ animationDelay: `${i * 0.15}s` }}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom decorative elements */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-muted-foreground/50" />
                <span>Professional Film Training Institute</span>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-muted-foreground/50" />
            </div>

            {/* Add shimmer animation */}
            <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
        </div>
    );
};

export default LoadingScreen;
