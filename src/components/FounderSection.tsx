import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
// Using the actual mentor image from the public folder
const founderImage = '/sagar.PNG';

const FounderSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Founder Image - Left Side */}
          <div className="w-full md:w-2/5 max-w-md mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={founderImage}
                alt="Founder"
                className="w-full h-auto object-cover aspect-[3/4]"
                onError={(e) => {
                  // Fallback in case the image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMC4xNCAxMi45NGExMCAxMCAwIDEgMCAtMTcgNy4wNmwxLjcgMS42OSIvPjxwYXRoIGQ9Ik0xMiA4djNtMCAwdjMiLz48cGF0aCBkPSJNMTIgMTVoLjAxIi8+PC9zdmc+';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            </div>
          </div>

          {/* Founder Content - Right Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <Badge variant="outline" className="text-primary border-primary">
              Meet Our Mentor
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Sagar
            </h2>
            <div className="space-y-1">
              <p className="text-lg font-semibold text-gradient-amber">Founder & Lead Mentor – KVR Film School</p>
              <p className="text-muted-foreground">Cinematographer & Editor | 6 Years Cinematography & DI | 10 Years Editing</p>
            </div>
            <p className="text-muted-foreground text-lg">
              Sagar is a professional cinematographer and editor with 6 years of experience in cinematography and DI colour grading and 10 years of experience in film editing. He has extensive hands-on experience across film and digital productions, with a strong understanding of end-to-end filmmaking workflows.
            </p>
            <p className="text-muted-foreground">
              He is the founder of KVR Film School, a professional training institute dedicated to providing industry-focused education in cinematography, editing, and DI colour grading. The institute emphasizes practical skill development, structured learning, and real-world production standards to prepare students for careers in the film and media industry.
            </p>
            <p className="text-muted-foreground">
              Sagar's professional approach combines technical expertise, workflow discipline, and mentorship, ensuring students gain both creative and industry-relevant skills.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                <span className="text-sm font-medium text-primary">6+ Years Cinematography</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                <span className="text-sm font-medium text-primary">10+ Years Editing</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                <span className="text-sm font-medium text-primary">DI Color Grading Expert</span>
              </div>
            </div>
            <a
              href="https://wa.me/918555952544"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-hero inline-flex mt-4"
            >
              Connect with Sagar
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
