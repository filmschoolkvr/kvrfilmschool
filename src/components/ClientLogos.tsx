import React from 'react';

// Client Logo component that supports both images and text
const ClientLogo = ({ name, logo }: { name: string; logo?: string }) => (
  <div className="flex items-center justify-center p-4 md:p-6 bg-card rounded-lg shadow-sm border border-border/50 h-24 w-48 flex-shrink-0">
    {logo ? (
      <img src={logo} alt={name} className="max-h-16 max-w-full object-contain" />
    ) : (
      <span className="text-2xl font-bold text-muted-foreground">{name}</span>
    )}
  </div>
);

// Client data - replace with actual client data
const clients = [
  { id: 1, name: 'Titan', logo: '/titan.png' },
  { id: 2, name: 'MC', logo: '/mc.png' },
  { id: 3, name: 'CBS', logo: '/cbs.png' },
  { id: 4, name: 'AD', logo: '/ad.png' },
  { id: 5, name: 'Nike', logo: '/nike.png' },
  { id: 6, name: 'Vaseline', logo: '/vasiline.png' },
  { id: 7, name: 'Client 7', logo: '/client7.png' },
  { id: 8, name: 'Client 8', logo: '/client8.jpeg' },
  { id: 9, name: 'Client 9', logo: '/client9.png' },
  { id: 10, name: 'Client 10', logo: '/client10.png' },
  { id: 11, name: 'Client 11', logo: '/client11.jpeg' },
];

// Duplicate the array to create a seamless loop
const duplicatedClients = [...clients, ...clients, ...clients];

const ClientLogos = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-12 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground">Our graduates and partners include some of the most respected names in the film industry</p>
        </div>
      </div>

      {/* Infinite Scrolling Logos */}
      <div className="relative w-full overflow-hidden">
        {/* First row - scroll left */}
        <div className="flex w-max animate-scroll">
          {duplicatedClients.map((client, index) => (
            <div key={`${client.id}-${index}`} className="px-4">
              <ClientLogo name={client.name} logo={client.logo} />
            </div>
          ))}
        </div>

        {/* Second row - scroll right */}
        <div className="flex w-max mt-6 animate-scroll-reverse">
          {[...duplicatedClients].reverse().map((client, index) => (
            <div key={`${client.id}-rev-${index}`} className="px-4">
              <ClientLogo name={client.name} logo={client.logo} />
            </div>
          ))}
        </div>
      </div>

      {/* Add custom animation keyframes */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-250px * ${clients.length}));
          }
        }
        @keyframes scrollReverse {
          0% {
            transform: translateX(calc(-250px * ${clients.length}));
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scrollReverse 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
