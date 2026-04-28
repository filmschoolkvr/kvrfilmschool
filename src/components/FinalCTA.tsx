import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-glow-pulse" />
      <div className="absolute top-1/2 right-1/4 w-56 h-56 bg-secondary/20 rounded-full blur-[80px] animate-glow-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-sm font-medium text-primary">Join 500+ Successful Students</span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Ready to Enter the{' '}
            <span className="text-gradient-amber">Film Industry</span>?
          </h2>
          
          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Choose your specialization and start your professional journey today. 
            Transform your passion into a rewarding career in film and media.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/918555952544" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary-hero group"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-secondary-hero">
              Contact Academy
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">4</div>
              <div className="text-xs text-muted-foreground">Pro Courses</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-xs text-muted-foreground">Practical</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">Expert</div>
              <div className="text-xs text-muted-foreground">Trainers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
