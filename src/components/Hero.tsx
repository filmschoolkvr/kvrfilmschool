import { ArrowRight, Play } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      
      {/* Cinematic Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-sm font-medium text-primary">Professional Film Training Institute</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Master{' '}
            <span className="text-gradient-amber">Cinematography</span>,{' '}
            <span className="text-gradient-white">Direction</span>,{' '}
            <span className="text-gradient-amber">Editing</span> &{' '}
            <span className="text-gradient-white">Color Grading</span>{' '}
            Like a Pro
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Industry-focused training designed for real film & media careers. 
            Learn from professionals, work on real projects.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href="https://wa.me/918555952544" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary-hero group"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#courses" className="btn-secondary-hero group">
              <Play className="w-5 h-5" />
              View Courses
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto mt-16 pt-8 border-t border-border animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-amber">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-amber">4</div>
              <div className="text-sm text-muted-foreground mt-1">Pro Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-amber">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Practical Training</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
