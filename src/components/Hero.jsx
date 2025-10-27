import React, { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const slides = [
    {
      id: 1,
      bgImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=1080&fit=crop',
      title: 'RICHARDS BAY FC',
      subtitle: 'THE NATAL RICH BOYZ',
      description: 'Competing at the highest level of South African football',
      buttonText: 'GET TICKETS',
      buttonLink: '#tickets',
      cardTitle: 'THE CLUB',
      cardIcon: '⚽'
    },
    {
      id: 2,
      bgImage: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1920&h=1080&fit=crop',
      title: 'MATCH DAY',
      subtitle: 'EXPERIENCE THE PASSION',
      description: 'Join thousands of fans at King Goodwill Zwelithini Stadium',
      buttonText: 'VIEW FIXTURES',
      buttonLink: '#fixtures',
      cardTitle: 'FIXTURES',
      cardIcon: '🏆'
    },
    {
      id: 3,
      bgImage: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1920&h=1080&fit=crop',
      title: 'JOIN THE JOURNEY',
      subtitle: 'BECOME A MEMBER',
      description: 'Exclusive benefits and behind-the-scenes access',
      buttonText: 'SIGN UP NOW',
      buttonLink: '#membership',
      cardTitle: 'MEMBERSHIP',
      cardIcon: '👥'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [currentSlide])

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setTimeout(() => setIsAnimating(false), 800)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setTimeout(() => setIsAnimating(false), 800)
    }
  }

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true)
      setCurrentSlide(index)
      setTimeout(() => setIsAnimating(false), 800)
    }
  }

  return (
    <div 
      className="relative bg-rbfc-dark"
      style={{ height: 'calc(100vh - 78px)' }}
    >
      {/* Navigation Cards - Bottom (like in image) - Always visible */}
      <div className="absolute bottom-0 left-0 right-0 z-30 flex shadow-2xl">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`group relative flex-1 overflow-hidden transition-all duration-500 ${
              index === currentSlide
                ? 'bg-white'
                : 'bg-rbfc-dark/90 backdrop-blur-md hover:bg-rbfc-dark'
            }`}
          >
            {/* Active indicator bar at top */}
            <div className={`absolute top-0 left-0 right-0 h-1 transition-all duration-500 ${
              index === currentSlide ? 'bg-rbfc-blue opacity-100' : 'bg-rbfc-blue/30 opacity-0'
            }`}></div>
            
            {/* Content */}
            <div className="relative px-6 lg:px-10 py-6 lg:py-8 text-left">
              {/* Category Label */}
              <div className={`text-xs lg:text-sm font-bold mb-2 tracking-widest uppercase transition-colors duration-300 ${
                index === currentSlide ? 'text-rbfc-blue' : 'text-sky-400'
              }`}>
                {slide.cardTitle}
              </div>
              
              {/* Title */}
              <div className={`font-black text-sm lg:text-xl leading-tight transition-colors duration-300 ${
                index === currentSlide ? 'text-rbfc-dark' : 'text-white'
              }`}>
                {slide.subtitle}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide
        
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image with Ken Burns Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              ></div>
              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-rbfc-dark/95 via-rbfc-dark/70 to-rbfc-dark/40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-rbfc-dark via-transparent to-transparent"></div>
            </div>

            {/* Animated Geometric Shapes */}
            <div className={`absolute top-20 left-10 w-32 h-32 border-4 border-rbfc-gold/20 rotate-45 transition-all duration-[2000ms] ${
              isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
            }`}></div>
            <div className={`absolute bottom-40 right-20 w-24 h-24 bg-rbfc-blue/10 rounded-full transition-all duration-[2500ms] delay-300 ${
              isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}></div>

            {/* Content Container */}
            <div className="relative h-full max-w-[1400px] mx-auto px-6 lg:px-12">
              <div className="h-full flex flex-col justify-center pb-24 lg:pb-32">
                <div className="max-w-4xl">
                  {/* Title - Slide from left */}
                  <div className={`transition-all duration-1000 delay-200 ${
                    isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                  }`}>
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-4"
                      style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}
                    >
                      {slide.title}
                    </h1>
                  </div>

                  {/* Description - Fade in */}
                  <div className={`transition-all duration-1000 delay-600 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}>
                    <p className="text-xl lg:text-2xl text-white/90 font-medium max-w-2xl mb-8">
                      {slide.description}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default Hero
