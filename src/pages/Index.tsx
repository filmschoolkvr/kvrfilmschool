import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FounderSection from '@/components/FounderSection';
import VideosSection from '@/components/VideosSection';
import ClientLogos from '@/components/ClientLogos';
import Courses from '@/components/Courses';
import WhyChooseUs from '@/components/WhyChooseUs';
import Gallery from '@/components/Gallery';
import CareerOutcomes from '@/components/CareerOutcomes';
import FinalCTA from '@/components/FinalCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FounderSection />
        <VideosSection />
        <ClientLogos />
        <Courses />
        <WhyChooseUs />
        <Gallery />
        <CareerOutcomes />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
