import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const VideosSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: '5gFVYoGgBGM',
      title: 'Cinematography Masterclass',
      category: 'Works',
      thumbnail: 'https://img.youtube.com/vi/5gFVYoGgBGM/maxresdefault.jpg',
    },
    {
      id: 'aSmu0eJMJoc',
      title: 'The Art of Visual Storytelling',
      category: 'Works',
      thumbnail: 'https://img.youtube.com/vi/aSmu0eJMJoc/maxresdefault.jpg',
    },
    {
      id: 'SCgNUJwbFys',
      title: 'Directing for the Big Screen',
      category: 'Works',
      thumbnail: 'https://img.youtube.com/vi/SCgNUJwbFys/maxresdefault.jpg',
    },
    {
      id: 'Y_4pl4PFu9I',
      title: 'Advanced Lighting Techniques',
      category: 'Works',
      thumbnail: 'https://img.youtube.com/vi/Y_4pl4PFu9I/maxresdefault.jpg',
    },
    {
      id: 'cS0UBYfMJFM',
      title: 'Sound Design Secrets',
      category: 'Works',
      thumbnail: 'https://img.youtube.com/vi/cS0UBYfMJFM/maxresdefault.jpg',
    },
    {
      id: 'ZA9w2JbXe_4',
      title: 'Post-Production Workflow',
      category: 'Works',
      thumbnail: 'https://img.youtube.com/vi/ZA9w2JbXe_4/maxresdefault.jpg',
    },
  ];

  return (
    <section id="videos" className="relative py-24 overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-amber-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-amber-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium mb-4">
            Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Featured <span className="text-amber-500">Videos</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Immerse yourself in our collection of professional cinematography, student projects, and expert masterclasses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className="group relative cursor-pointer rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 transition-all duration-500 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                  onClick={() => setSelectedVideo(video.id)}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-500" />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                        <Play className="w-8 h-8 text-slate-950 ml-1 fill-current" />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-semibold uppercase tracking-wider">
                        {video.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white group-hover:text-amber-500 transition-colors duration-300">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[900px] p-0 bg-black border-slate-800 overflow-hidden">
                <div className="aspect-video w-full">
                  {selectedVideo === video.id && (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            Watch More on YouTube
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-5 w-5"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;

