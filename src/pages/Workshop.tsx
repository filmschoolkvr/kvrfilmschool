import { useState } from 'react';
import {
  Camera,
  Grid3x3,
  Lightbulb,
  Scan,
  Clapperboard,
  Palette,
  Cpu,
  HandHelping,
  CalendarDays,
  CreditCard,
  MessageCircle,
  Users,
  ArrowRight,
  Send,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WorkshopPopup from '@/components/WorkshopPopup';
import { WORKSHOP } from '@/lib/workshop';

const WHATSAPP_NUMBER = '918555952544';

const topics = [
  { icon: Camera, title: 'How to Shoot', desc: 'Camera Basics & Real Shoot Tips' },
  { icon: Grid3x3, title: 'Composition', desc: 'Create Stunning Frames' },
  { icon: Lightbulb, title: 'Lighting', desc: 'Light it Right' },
  { icon: Scan, title: 'Framing & Rules', desc: 'Tell a Better Story' },
  { icon: Clapperboard, title: 'Editing', desc: 'Turn Footage into Magic' },
  { icon: Palette, title: 'DI & Colour Grading', desc: 'Grade Like a Pro' },
  { icon: Cpu, title: 'AI Tools', desc: 'Work Smarter, Create Bigger' },
  { icon: HandHelping, title: 'Hands-on Practice', desc: 'Get Practical Experience' },
];

const Workshop = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `*Workshop Registration - Film Making From Scratch*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Dates:* November 14 %26 15`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    setFormData({ name: '', phone: '', email: '' });
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4 md:px-6">
          <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[120px]" />

          <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4">
                KVR FILM SCHOOL <span className="text-primary">×</span> DOTMOV_STUDIO PRESENTS
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                <span className="text-sm font-semibold text-primary">2 Days Workshop</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic leading-none mb-2">
                Film Making
              </h1>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic text-gradient-amber mb-6">
                From Scratch
              </h1>

              <p className="text-sm md:text-base tracking-[0.4em] text-muted-foreground mb-8">
                LEARN • PRACTICE • CREATE
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-3 px-5 py-3 rounded-lg cinema-card">
                  <CalendarDays className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Dates</p>
                    <p className="font-bold">November 14th &amp; 15th</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 rounded-lg cinema-card">
                  <Users className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Seats</p>
                    <p className="font-bold">Limited Seats Only</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 rounded-lg cinema-card">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Venue &amp; Timings</p>
                    <p className="font-bold">Shared via WhatsApp</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WORKSHOP.paymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-hero group"
                >
                  <CreditCard className="w-5 h-5" />
                  Pay &amp; Book Seat
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#register" className="btn-secondary-hero">
                  Register via WhatsApp
                </a>
              </div>
            </div>

            <div className="animate-scale-in">
              <img
                src="/workshop-poster.png"
                alt="Film Making From Scratch - 2 Days Workshop poster, November 14 & 15"
                className="w-full max-w-md mx-auto rounded-xl border border-border shadow-2xl glow-amber"
              />
            </div>
          </div>
        </section>

        {/* What You Will Learn */}
        <section id="learn" className="py-20 px-4 md:px-6 bg-muted/20">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                What You Will <span className="text-gradient-amber">Learn</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Two packed days covering the complete film making process — from camera basics to the final grade.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topics.map((topic) => (
                <div
                  key={topic.title}
                  className="cinema-card p-6 text-center border-primary/30 hover:border-primary transition-colors duration-300 group"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:glow-amber transition-all duration-300">
                    <topic.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{topic.title}</h3>
                  <p className="text-sm text-muted-foreground">{topic.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration */}
        <section id="register" className="py-20 px-4 md:px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-glow-pulse" />

          <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Turn Your Passion <br />
                <span className="text-gradient-amber">Into a Profession</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Seats are limited. Fill in your details and we'll confirm your spot for the
                November 14th &amp; 15th workshop over WhatsApp. Venue and timing details will be
                sent to you on WhatsApp after you register.
              </p>
              <div className="cinema-card p-6 mb-6 border-primary/40">
                <p className="text-sm text-muted-foreground mb-1">Already decided?</p>
                <p className="font-bold text-lg mb-4">Pay online and lock your seat instantly</p>
                <a
                  href={WORKSHOP.paymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-hero w-full sm:w-auto"
                >
                  <CreditCard className="w-5 h-5" />
                  Pay Now
                </a>
                <p className="text-xs text-muted-foreground mt-3">
                  Secure payment via Razorpay · {WORKSHOP.paymentLabel}
                </p>
              </div>
              <p className="text-muted-foreground">
                Questions? Call or WhatsApp us at{' '}
                <a href="tel:+918555952544" className="text-primary font-semibold hover:underline">
                  +91 85559 52544
                </a>
              </p>
            </div>

            <div className="cinema-card p-8">
              <h3 className="text-2xl font-bold mb-6">Register for the Workshop</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={inputClass}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <button type="submit" className="w-full btn-primary-hero justify-center">
                  Register Now
                  <Send className="w-4 h-4" />
                </button>
                <p className="text-sm text-center text-muted-foreground">
                  Venue &amp; timings will be sent to you on WhatsApp.
                </p>
                <p className="text-xs text-center tracking-[0.3em] text-muted-foreground">
                  LIMITED SEATS ONLY
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WorkshopPopup variant="workshop" />
    </div>
  );
};

export default Workshop;
