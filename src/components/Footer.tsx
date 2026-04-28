import { Film, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#courses', label: 'Courses' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  const courses = [
    { href: '#courses', label: 'Cinematography' },
    { href: '#courses', label: 'Direction' },
    { href: '#courses', label: 'DI Color Grading' },
    { href: '#courses', label: 'Film Editing' },
  ];

  const socials = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img
                src="/Kvr.png"
                alt="KVR Film School Logo"
                className="h-16 w-auto object-contain"
              />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Professional training institute for cinematography, direction, editing, and color grading.
              Shaping the next generation of film professionals.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              Our Courses
            </h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.label}>
                  <a
                    href={course.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {course.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>+91 85559 52544</li>
              <li>filmschoolkvr@gmail.com</li>
              <li>ROYAL KUNJ APARTMENTS, Road No. 12, MLA Colony, Hyderabad</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} KVR Film School. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
