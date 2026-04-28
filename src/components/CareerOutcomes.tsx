import { CheckCircle2 } from 'lucide-react';

const CareerOutcomes = () => {
  const outcomes = [
    {
      title: 'Build Strong Portfolios',
      description: 'Graduate with professional work samples that showcase your skills to potential employers.',
    },
    {
      title: 'Work-Ready Skills',
      description: 'Gain practical expertise that makes you immediately valuable in the film industry.',
    },
    {
      title: 'Project Confidence',
      description: 'Handle real-world film projects with the confidence of a trained professional.',
    },
    {
      title: 'Industry Workflows',
      description: 'Master the same workflows used by top production houses and studios.',
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <span className="text-sm font-medium text-primary">Career Outcomes</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Launch Your <span className="text-gradient-amber">Film Career</span> With Confidence
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our graduates don't just learn — they become industry-ready professionals 
              equipped to handle real film production challenges from day one.
            </p>
            
            <a href="#contact" className="btn-primary-hero">
              Start Your Journey
            </a>
          </div>
          
          {/* Right - Outcomes List */}
          <div className="space-y-4">
            {outcomes.map((outcome, index) => (
              <div
                key={outcome.title}
                className="group p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:glow-amber transition-all duration-300">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {outcome.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOutcomes;
