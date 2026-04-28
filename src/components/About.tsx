import { Target, Award, Users, Clapperboard } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Clapperboard,
      title: 'Industry-Standard Training',
      description: 'Learn techniques used in professional film productions',
    },
    {
      icon: Target,
      title: 'Practical Approach',
      description: 'Hands-on learning with real equipment and projects',
    },
    {
      icon: Award,
      title: 'Professional Workflows',
      description: 'Master the workflows used by top studios worldwide',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Learn directly from industry-experienced professionals',
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30">
              <span className="text-sm font-medium text-secondary">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Where <span className="text-gradient-amber">Passion</span> Meets{' '}
              <span className="text-gradient-amber">Professional</span> Training
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              KVR Film School is a premier professional training institute dedicated to shaping
              skilled cinematographers, editors, and colorists through practical, industry-standard
              education. We bridge the gap between academic knowledge and real-world film production.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our curriculum is designed by industry veterans who bring decades of experience
              in feature films, commercials, and digital content. Every course emphasizes
              hands-on learning with professional-grade equipment, preparing you for the
              demands of today's competitive film industry.
            </p>

            <a href="#courses" className="btn-primary-hero inline-flex mt-4">
              Explore Our Courses
            </a>
          </div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="cinema-card p-6 hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-amber transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
