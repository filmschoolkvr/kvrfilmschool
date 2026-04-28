import { useState } from 'react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: gallery1,
      title: 'Cinematography Training',
      description: 'Hands-on camera operation sessions',
    },
    {
      src: gallery2,
      title: 'Color Grading Suite',
      description: 'Professional DI workstations',
    },
    {
      src: gallery3,
      title: 'Editing Bay',
      description: 'Industry-standard editing setup',
    },
    {
      src: gallery4,
      title: 'Studio Sessions',
      description: 'Real-world production training',
    },
  ];

  return (
    <section id="gallery" className="section-padding relative overflow-hidden bg-muted/20">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm font-medium text-primary">Training Highlights</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Inside <span className="text-gradient-amber">KVR Film School</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Experience our professional training environment with state-of-the-art
            equipment and industry-standard facilities.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ${index === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className={`relative ${index === 0 ? 'aspect-square' : 'aspect-video'}`}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold text-foreground">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">{image.description}</p>
                </div>

                {/* Border glow */}
                <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/50 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
