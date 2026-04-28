import { Video, Palette, Film, Clapperboard } from 'lucide-react';
import CourseCard from './CourseCard';

const Courses = () => {
  const courses = [
    {
      icon: <Video className="w-7 h-7 text-primary" />,
      title: 'Cinematography',
      subtitle: 'Advanced Course',
      duration: '40 Days',
      fee: '35,000',
      originalFee: '40,000',
      discount: '₹5,000',
      accentColor: 'amber' as const,
      highlights: [
        'Advanced camera handling & operations',
        'Professional lighting techniques',
        'Cinematic composition & framing',
        'Camera movement & visual storytelling',
        'Real-set shooting experience',
      ],
    },
    {
      icon: <Clapperboard className="w-7 h-7 text-primary" />,
      title: 'Direction',
      subtitle: 'Film Direction',
      duration: '30 Days',
      fee: '25,000',
      originalFee: '30,000',
      discount: '₹5,000',
      accentColor: 'amber' as const,
      highlights: [
        'Dialogue writing & discussion',
        'Professional shot division',
        'Three-act story structure',
        'Analyzing scenes & screenplay',
        'Hands-on short film projects',
        'Portfolio building & experience',
        'Real-set shooting experience',
      ],
    },
    {
      icon: <Palette className="w-7 h-7 text-secondary" />,
      title: 'DI Color Grading',
      subtitle: 'Cinematic Course',
      duration: '30 Days',
      fee: '30,000',
      originalFee: '35,000',
      discount: '₹5,000',
      accentColor: 'amber' as const,
      includesPanel: true,
      highlights: [
        'Professional DI workflow mastery',
        'Cinematic color grading techniques',
        'Industry-standard panel training',
        'Film look creation & matching',
        'Advanced color correction methods',
      ],
    },
    {
      icon: <Film className="w-7 h-7 text-primary" />,
      title: 'Film Editing',
      subtitle: 'Advanced Course',
      duration: '30 Days',
      fee: '25,000',
      originalFee: '30,000',
      discount: '₹5,000',
      accentColor: 'amber' as const,
      software: 'Adobe Premiere Pro',
      highlights: [
        'Advanced film editing techniques',
        'Story-driven editing approach',
        'Workflow for films, reels & ads',
        'Industry-level editing practices',
        'Sound design & audio sync basics',
      ],
    },
  ];

  return (
    <section id="courses" className="section-padding relative overflow-hidden bg-muted/20">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[130px]" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm font-medium text-primary">Our Courses</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="text-gradient-amber">Film Training</span> Programs
          </h2>

          <p className="text-lg text-muted-foreground">
            Choose your specialization and master the skills that top film studios demand.
            Each course is designed for real-world application.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-muted-foreground mt-12 text-sm">
          All courses include certificate of completion • Flexible batch timings available
        </p>
      </div>
    </section>
  );
};

export default Courses;
