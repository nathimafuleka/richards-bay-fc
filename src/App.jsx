import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Fixtures from './components/Fixtures'
import News from './components/News'
import Teams from './components/Teams'
import Gallery from './components/Gallery'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <News />
        <Fixtures />
        <Teams />
        <Gallery />
        <Sponsors />
      </main>
      <Footer />
    </div>
  )
}

export default App
