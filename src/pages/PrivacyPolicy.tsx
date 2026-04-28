import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 py-32">
        <div className="max-w-4xl mx-auto cinema-card p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-8 text-gradient-amber">Privacy Policy</h1>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
              <p>We collect information you provide directly to us when you fill out a contact form, enroll in a course, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, to process your course enrollments, to send you technical notices and support messages, and to communicate with you about courses, offers, and news.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Sharing of Information</h2>
              <p>We do not share your personal information with third parties except as required by law or to provide the services you have requested. We may use third-party service providers to help us operate our business and the site.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Security</h2>
              <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at filmschoolkvrschool@gmail.com or +91 85559 52544.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
