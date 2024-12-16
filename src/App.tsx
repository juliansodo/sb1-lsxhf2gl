import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import APISection from './components/APISection';
import ToolsSection from './components/ToolsSection';
import FAQSection from './components/FAQSection';
import Playground from './components/Playground';
import StatusSection from './components/StatusSection';

function App() {
  return (
    <div className="min-h-screen bg-primary-950">
      <Navbar />
      <main className="pt-16">
        <section id="hero">
          <Hero />
        </section>
        <div className="container mx-auto px-6">
          <section id="apis" className="py-24">
            <APISection />
          </section>
          <section id="tools" className="py-24">
            <ToolsSection />
          </section>
          <section id="faq" className="py-24">
            <FAQSection />
          </section>
          <section id="playground" className="py-24">
            <Playground />
          </section>
          <section id="status" className="py-24">
            <StatusSection />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;