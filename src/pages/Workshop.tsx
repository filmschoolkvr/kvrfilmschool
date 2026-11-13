import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WorkshopPopup from '@/components/WorkshopPopup';
import { WORKSHOP } from '@/lib/workshop';
import heroBg from '@/assets/hero-bg.jpg';

const WHATSAPP_NUMBER = '918555952544';

const topics = [
  { title: 'How to Shoot', desc: 'Camera basics & real shoot tips' },
  { title: 'Composition', desc: 'Create stunning frames' },
  { title: 'Lighting', desc: 'Light it right' },
  { title: 'Framing & Rules', desc: 'Tell a better story' },
  { title: 'Editing', desc: 'Turn footage into magic' },
  { title: 'DI & Colour Grading', desc: 'Grade like a pro' },
  { title: 'AI Tools', desc: 'Work smarter, create bigger' },
  { title: 'Hands-on Practice', desc: 'Get practical experience' },
];

const callSheet = [
  { label: 'Dates', value: WORKSHOP.dates },
  { label: 'Duration', value: 'Two full days' },
  { label: 'Format', value: 'Hands-on, practical' },
  { label: 'Venue & Timings', value: 'Shared on WhatsApp' },
  { label: 'Seats', value: 'Limited' },
];

/* Shared button styles — square, letter-spaced, cinematic */
const btnSolid =
  'inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-secondary';
const btnGhost =
  'inline-flex items-center justify-center gap-3 border border-white/30 text-foreground px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] transition-colors duration-300 hover:border-primary hover:text-primary';

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-primary mb-6">
    <span className="h-px w-10 bg-primary" />
    {children}
  </p>
);

const Workshop = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowStickyCta(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `*Workshop Registration - Film Making From Scratch*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Dates:* ${encodeURIComponent(WORKSHOP.dates)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    setFormData({ name: '', phone: '', email: '' });
  };

  const inputClass =
    'w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-base text-foreground placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors';

  return (
    <div className="min-h-screen bg-black text-foreground font-body pb-20">
      <Navbar />

      <main>
        {/* ───────── HERO — letterboxed title card ───────── */}
        <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden film-grain">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,black_85%)]" />

          {/* Letterbox bars */}
          <div className="absolute top-0 inset-x-0 h-[9vh] bg-black z-[2]" />
          <div className="absolute bottom-0 inset-x-0 h-[9vh] bg-black z-[2]" />

          {/* Viewfinder corners */}
          <div className="absolute inset-x-6 md:inset-x-12 top-[13vh] bottom-[13vh] z-[2] pointer-events-none">
            <span className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/40" />
            <span className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/40" />
            <span className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/40" />
            <span className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/40" />
            <span className="absolute top-3 left-12 hidden md:flex items-center gap-2 text-[10px] tracking-[0.3em] text-white/50">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-glow-pulse" /> REC
            </span>
            <span className="absolute top-3 right-12 hidden md:block text-[10px] tracking-[0.3em] text-white/50">
              2 DAYS · 4K
            </span>
          </div>

          <div className="relative z-[3] text-center px-6 animate-fade-in">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-white/60 mb-8">
              KVR Film School <span className="text-primary">×</span> Dotmov_studio
              <span className="block mt-2 text-white/40">presents</span>
            </p>

            <h1 className="font-display text-[22vw] md:text-[12rem] lg:text-[14rem] leading-[0.8] tracking-wide text-white">
              Film Making
            </h1>
            <p className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-primary -mt-1 md:-mt-3 mb-8">
              from scratch
            </p>

            <p className="text-[11px] md:text-sm uppercase tracking-[0.45em] text-white/70 mb-10">
              {WORKSHOP.dates} <span className="text-primary mx-2">/</span> Limited seats
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WORKSHOP.paymentUrl} target="_blank" rel="noopener noreferrer" className={btnSolid}>
                Pay &amp; Book Seat
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#register" className={btnGhost}>
                Register via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ───────── TAGLINE STRIP ───────── */}
        <div className="border-y border-white/10 py-6 overflow-hidden">
          <p className="font-display text-2xl md:text-3xl tracking-[0.3em] text-center text-white/80">
            Learn <span className="text-primary">·</span> Practice <span className="text-primary">·</span> Create
          </p>
        </div>

        {/* ───────── THE PROGRAMME ───────── */}
        <section id="learn" className="py-24 md:py-32 px-6">
          <div className="container mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
              <Eyebrow>The Programme</Eyebrow>
              <h2 className="font-display text-6xl md:text-7xl leading-[0.9] mb-6">
                What you <br />
                <span className="font-serif italic normal-case text-primary text-5xl md:text-6xl">will learn</span>
              </h2>
              <p className="text-white/60 leading-relaxed max-w-sm">
                Two days that take you through the whole filmmaking process, from your first frame to the final
                colour grade.
              </p>
            </div>

            <ol className="lg:col-span-8 border-t border-white/10">
              {topics.map((topic, i) => (
                <li
                  key={topic.title}
                  className="group grid grid-cols-[3.5rem_1fr] md:grid-cols-[5rem_1fr_auto] items-baseline gap-4 py-7 border-b border-white/10 transition-colors hover:bg-white/[0.02]"
                >
                  <span className="font-display text-2xl md:text-3xl text-white/25 group-hover:text-primary transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl tracking-wide">{topic.title}</h3>
                  <p className="col-start-2 md:col-start-auto font-serif italic text-lg md:text-xl text-white/50">
                    {topic.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="container mx-auto mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border border-primary/30 bg-primary/[0.04] px-8 py-8">
            <p className="font-display text-3xl md:text-4xl tracking-wide text-center md:text-left">
              All of this in two days.{' '}
              <span className="font-serif italic normal-case text-primary">Seats are limited.</span>
            </p>
            <a href={WORKSHOP.paymentUrl} target="_blank" rel="noopener noreferrer" className={`${btnSolid} shrink-0`}>
              Pay &amp; Book Seat
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ───────── CALL SHEET ───────── */}
        <section className="py-24 md:py-32 px-6 bg-[hsl(0_0%_5%)] border-y border-white/10">
          <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative max-w-md mx-auto lg:mx-0 w-full">
              <div className="absolute -inset-3 border border-white/10" />
              <img
                src="/workshop-poster.png"
                alt={`Film Making From Scratch — 2 Days Workshop poster, ${WORKSHOP.dates}`}
                className="relative w-full grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div>
              <Eyebrow>Call Sheet</Eyebrow>
              <h2 className="font-display text-6xl md:text-7xl leading-[0.9] mb-10">The Details</h2>
              <dl className="border-t border-white/10">
                {callSheet.map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-6 py-5 border-b border-white/10">
                    <dt className="text-[11px] uppercase tracking-[0.35em] text-white/40">{row.label}</dt>
                    <dd className="font-display text-2xl md:text-3xl tracking-wide text-right">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm text-white/50">
                The venue and timings will be sent to you on WhatsApp after you register.
              </p>
              <a
                href={WORKSHOP.paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnSolid} mt-8`}
              >
                Pay Now &amp; Confirm Seat
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ───────── REGISTER ───────── */}
        <section id="register" className="py-24 md:py-32 px-6">
          <div className="container mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <Eyebrow>Book Your Seat</Eyebrow>
              <h2 className="font-display text-6xl md:text-8xl leading-[0.85] mb-8">
                Turn your passion
                <span className="block font-serif italic normal-case text-primary text-5xl md:text-7xl mt-2">
                  into a profession
                </span>
              </h2>

              <div className="border-l-2 border-primary pl-6 mb-10">
                <p className="text-white/60 mb-5">Already decided? Pay online and lock your seat now.</p>
                <a href={WORKSHOP.paymentUrl} target="_blank" rel="noopener noreferrer" className={btnSolid}>
                  Pay Now
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <p className="text-xs text-white/40 mt-4">
                  Secure payment via Razorpay · {WORKSHOP.paymentLabel}
                </p>
              </div>

              <p className="text-sm text-white/50">
                Questions? Call or WhatsApp{' '}
                <a href="tel:+918555952544" className="text-primary hover:underline">
                  +91 85559 52544
                </a>
              </p>
            </div>

            <div className="border border-white/10 p-8 md:p-12">
              <p className="text-[11px] uppercase tracking-[0.4em] text-white/40 mb-2">Or register first</p>
              <h3 className="font-display text-4xl tracking-wide mb-10">Register on WhatsApp</h3>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.3em] text-white/50">Full Name</label>
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
                  <label className="block text-[11px] uppercase tracking-[0.3em] text-white/50">Phone Number</label>
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
                  <label className="block text-[11px] uppercase tracking-[0.3em] text-white/50">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <button type="submit" className={`${btnGhost} w-full`}>
                  Send on WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-center text-white/40">
                  We'll send the venue &amp; timings on WhatsApp · Limited seats only
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* ───────── END CARD ───────── */}
        <section className="py-20 px-6 border-t border-white/10 text-center">
          <p className="font-display text-[14vw] md:text-[9rem] leading-none text-white/[0.06] select-none">
            Fade In
          </p>
          <p className="text-[11px] uppercase tracking-[0.5em] text-white/40 -mt-4 md:-mt-10">
            {WORKSHOP.dates} · KVR Film School × Dotmov_studio
          </p>
          <a
            href={WORKSHOP.paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnSolid} mt-10`}
          >
            Book Your Seat
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </section>
      </main>

      {/* Sticky payment bar — appears after scrolling past the hero */}
      <div
        className={`fixed bottom-0 inset-x-0 z-40 border-t border-white/10 bg-black/90 backdrop-blur-md transition-transform duration-500 ${
          showStickyCta ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="font-display text-xl md:text-2xl tracking-wide leading-none truncate">
              Film Making <span className="font-serif italic normal-case text-primary">from scratch</span>
            </p>
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-white/50 mt-1">
              {WORKSHOP.dates} · Limited seats
            </p>
          </div>
          <a
            href={WORKSHOP.paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnSolid} shrink-0 px-5 md:px-8 py-3`}
          >
            Pay Now
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <Footer />
      <WorkshopPopup variant="workshop" />
    </div>
  );
};

export default Workshop;
