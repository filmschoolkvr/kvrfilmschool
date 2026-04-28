import {
  GraduationCap,
  Wrench,
  Video,
  Users,
  Briefcase,
  FolderOpen
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Industry-Experienced Trainers',
      description: 'Learn from professionals with real film production experience',
    },
    {
      icon: Wrench,
      title: 'Practical & Hands-On Learning',
      description: 'Get extensive practice time with professional equipment',
    },
    {
      icon: Video,
      title: 'Professional Equipment Exposure',
      description: 'Work with industry-standard cameras, panels & software',
    },
    {
      icon: Users,
      title: 'Real Cinematic Workflows',
      description: 'Experience actual film production processes end-to-end',
    },
    {
      icon: Briefcase,
      title: 'Career-Focused Training',
      description: 'Build skills that employers in the film industry demand',
    },
    {
      icon: FolderOpen,
      title: 'Portfolio-Oriented Approach',
      description: 'Graduate with professional work samples to showcase',
    },
  ];

  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6">
            <span className="text-sm font-medium text-secondary">Why Choose Us</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Makes <span className="text-gradient-amber">KVR Film School</span> Different
          </h2>

          <p className="text-lg text-muted-foreground">
            We don't just teach theory — we prepare you for the real film industry
            with practical skills and professional workflows.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-xl border border-border bg-card/50 hover:border-secondary/50 transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:glow-amber transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
