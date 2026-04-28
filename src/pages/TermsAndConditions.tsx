import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 py-32">
        <div className="max-w-4xl mx-auto cinema-card p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-8 text-gradient-amber">Terms & Conditions</h1>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using the KVR Film School website and services, you agree to comply with and be bound by these Terms and Conditions.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Course Enrollment</h2>
              <p>Enrollment in courses is subject to availability and the payment of specified fees. All fees are non-refundable unless otherwise stated in writing.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Intellectual Property</h2>
              <p>All content provided during the courses, including course materials, videos, and documentation, is the property of KVR Film School and is protected by copyright laws. Unauthorized distribution or use of these materials is prohibited.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Conduct</h2>
              <p>Students are expected to maintain professional conduct during courses. KVR Film School reserves the right to terminate enrollment for disruptive behavior without refund.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Limitation of Liability</h2>
              <p>KVR Film School shall not be liable for any indirect, incidental, or consequential damages arising out of the use of our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Governing Law</h2>
              <p>These terms are governed by the laws of India and any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
