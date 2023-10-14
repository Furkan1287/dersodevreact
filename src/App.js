import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import ProjectSection from './ProjectSection';
import ProjectCard from './ProjectCard';
import AboutSection from './AboutSection';
import TeamMember from './TeamMember';
import ContactSection from './ContactSection';
import LocationImage from './LocationImage';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="w3-content w3-padding" style={{ maxWidth: '1564px' }}>
        <ProjectSection />
        <div className="w3-row-padding">
          <ProjectCard title="Summer House" imageSrc="house5.jpg" />
          <ProjectCard title="Brick House" imageSrc="house2.jpg" />
          <ProjectCard title="Renovated" imageSrc="house3.jpg" />
          <ProjectCard title="Barn House" imageSrc="house4.jpg" />
        </div>
        <div className="w3-row-padding">
          <ProjectCard title="Summer House" imageSrc="house2.jpg" />
          <ProjectCard title="Brick House" imageSrc="house5.jpg" />
          <ProjectCard title="Renovated" imageSrc="house4.jpg" />
          <ProjectCard title="Barn House" imageSrc="house3.jpg" />
        </div>
        <AboutSection />
        <div className="w3-row-padding w3-grayscale">
          <TeamMember name="John Doe" role="CEO & Founder" imageSrc="team2.jpg" />
          <TeamMember name="Jane Doe" role="Architect" imageSrc="team1.jpg" />
          <TeamMember name="Mike Ross" role="Architect" imageSrc="team3.jpg" />
          <TeamMember name="Dan Star" role="Architect" imageSrc="team4.jpg" />
        </div>
        <ContactSection />
        <LocationImage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
