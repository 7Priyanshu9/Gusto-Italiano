import React from 'react'
import { Gallery, Header , AboutUs, Footer, SpecialMenu, Chef, Intro, Laurels, FindUs } from './container';
import { Navbar } from './components';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <AboutUs/>
      <SpecialMenu/>
      <Chef/>
      <Intro/>
      <Laurels/>
      <Gallery />
      <FindUs/>
      <Footer />     
    </div>
  )
}

export default App
