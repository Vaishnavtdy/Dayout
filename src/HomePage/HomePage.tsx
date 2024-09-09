// src/Home Page/HomePage.tsx
import React from 'react';
import VideoPlayer from './video player/VideoPlayer';
// import TourPackages from './Packages/tourPackages';
import ContactCard from './our places/places';
// import ServiceSection from './Services/ServiceSection';
// import NewsletterSection from './NewsLetter/newsLetter';
import FooterSection from './Footer/Footer';
// import Prefaces from './preface/preface';
import Reviews from './Reviews/Reviews';
const HomePage: React.FC = () => {
  return (
    <div className="App">
      <main>
        <VideoPlayer/>
        {/* <Prefaces/> */}
        <FooterSection/>
      </main>
    </div>
  );
};

export default HomePage;
