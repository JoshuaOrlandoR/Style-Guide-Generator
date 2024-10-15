import React from 'react';
import PageWrap from './components/PageWrap'; 
import MainWrapper from './components/MainWrapper'; 
import TypographySection from './components/TypographySection';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <PageWrap>
      <MainWrapper>
        <HeroSection />
        <TypographySection />
      </MainWrapper>
    </PageWrap>
  );
}

export default App;
