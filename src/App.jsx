import React from 'react'
import {HeroScrollDemo} from './components/test/hero-animation'
import Navbar from './components/test/navbar'
import StickyScrollRevealDemo from './components/test/scroll'
import TypewriterEffectDemo from './components/test/typer'
import CardHoverEffectDemo from './components/test/card'
import Footer from './components/test/footer'


function App() {
 

  return (
    <>
      <Navbar />
      <HeroScrollDemo/>
      <TypewriterEffectDemo/>
      <StickyScrollRevealDemo/>
      <CardHoverEffectDemo/>
      <Footer/>
    </>
  )
}

export default App
