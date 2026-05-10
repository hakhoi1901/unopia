import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { AboutUsSection } from '@/components/AboutUsSection';
import { ShowcaseSection } from '@/components/ShowcaseSection';
import { TeamSection } from '@/components/TeamSection';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ShowcaseSection />
      <TeamSection />
      <Footer />
    </>
  );
}

export default App;
