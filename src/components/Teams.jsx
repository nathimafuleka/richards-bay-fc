import React, { useState, useRef } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

const Teams = () => {
  const [activeTab, setActiveTab] = useState('first-team')
  const sliderRef = useRef(null)

  const scroll = (direction) => {
    if (sliderRef.current) {
      // Scroll by 4 cards at once: (288px card + 24px gap) * 4 = 1248px
      const cardWidth = 288
      const gap = 24
      const cardsToScroll = 4
      const scrollAmount = (cardWidth + gap) * cardsToScroll
      
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const players = {
    'first-team': [
      {
        id: 1,
        name: 'SALIM MAGOOLA',
        position: 'Goalkeeper',
        number: 1,
        image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=600&fit=crop',
      },
      {
        id: 2,
        name: 'IAN OTIENO',
        position: 'Goalkeeper',
        number: 16,
        image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=600&fit=crop',
      },
      {
        id: 3,
        name: 'THABANI ZUKE',
        position: 'Defender',
        number: 5,
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=600&fit=crop',
      },
      {
        id: 4,
        name: 'SIMPHIWE MCINEKA',
        position: 'Defender',
        number: 4,
        image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=600&fit=crop',
      },
      {
        id: 5,
        name: 'LWANDILE MABUYA',
        position: 'Midfielder',
        number: 8,
        image: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400&h=600&fit=crop',
      },
      {
        id: 6,
        name: 'TSHEPO MABUA',
        position: 'Midfielder',
        number: 10,
        image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400&h=600&fit=crop',
      },
      {
        id: 7,
        name: 'LANGELIHLE MHLONGO',
        position: 'Forward',
        number: 9,
        image: 'https://images.unsplash.com/photo-1594552072238-b8c6b4c5c5f7?w=400&h=600&fit=crop',
      },
      {
        id: 8,
        name: 'MOSES MTHEMBU',
        position: 'Forward',
        number: 11,
        image: 'https://images.unsplash.com/photo-1592656094267-764a45160876?w=400&h=600&fit=crop',
      },
      {
        id: 9,
        name: 'GABADINHO MHANGO',
        position: 'Forward',
        number: 7,
        image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&h=600&fit=crop',
      },
      {
        id: 10,
        name: 'SIYABONGA DUBE',
        position: 'Defender',
        number: 3,
        image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=600&fit=crop',
      },
    ],
    'reserve-team': [
      {
        id: 11,
        name: 'TLAKUSANI MTHETHWA',
        position: 'Midfielder',
        number: 15,
        image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&h=600&fit=crop',
      },
      {
        id: 12,
        name: 'LINDOKUHLE ZIKHALI',
        position: 'Forward',
        number: 18,
        image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=600&fit=crop',
      },
      {
        id: 13,
        name: 'KITSO MANGOLO',
        position: 'Midfielder',
        number: 21,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
      },
      {
        id: 14,
        name: 'SIPHESIHLE MTSHALI',
        position: 'Goalkeeper',
        number: 30,
        image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=600&fit=crop',
      },
      {
        id: 15,
        name: 'SBANGANI ZULU',
        position: 'Defender',
        number: 23,
        image: 'https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?w=400&h=600&fit=crop',
      },
      {
        id: 16,
        name: 'SANELE ZULU',
        position: 'Defender',
        number: 24,
        image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&h=600&fit=crop',
      },
    ],
    'youth-development': [
      {
        id: 17,
        name: 'NTOKOZO NZAMA',
        position: 'Defender',
        number: 19,
        image: 'https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?w=400&h=600&fit=crop',
      },
      {
        id: 18,
        name: 'HALALISANI VILAKAZI',
        position: 'Midfielder',
        number: 22,
        image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&h=600&fit=crop',
      },
      {
        id: 19,
        name: 'OLWETHU NZIMANDE',
        position: 'Midfielder',
        number: 28,
        image: 'https://images.unsplash.com/photo-1600077106724-946750eeaf3c?w=400&h=600&fit=crop',
      },
      {
        id: 20,
        name: 'NKOSIYETHU MKHABELA',
        position: 'Midfielder',
        number: 25,
        image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&h=600&fit=crop',
      },
      {
        id: 21,
        name: 'BANELE NOMVETE',
        position: 'Forward',
        number: 27,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
      },
      {
        id: 22,
        name: 'THABISA NDELU',
        position: 'Forward',
        number: 29,
        image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=600&fit=crop',
      },
    ]
  }

  return (
    <section id="teams" className="py-12 lg:py-16 bg-rbfc-blue">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tabs - Chelsea Style */}
        <div className="flex justify-center mb-8 lg:mb-12 px-4">
          <div className="inline-flex flex-col sm:flex-row bg-white/10 backdrop-blur-sm rounded-full p-2 shadow-lg w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('first-team')}
              className={`px-4 sm:px-8 py-3 font-bold text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 rounded-full ${
                activeTab === 'first-team'
                  ? 'bg-white text-rbfc-blue'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              First Team
            </button>
            <button
              onClick={() => setActiveTab('reserve-team')}
              className={`px-4 sm:px-8 py-3 font-bold text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 rounded-full ${
                activeTab === 'reserve-team'
                  ? 'bg-white text-rbfc-blue'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              Reserve Team
            </button>
            <button
              onClick={() => setActiveTab('youth-development')}
              className={`px-4 sm:px-8 py-3 font-bold text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 rounded-full ${
                activeTab === 'youth-development'
                  ? 'bg-white text-rbfc-blue'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              Youth Development
            </button>
          </div>
        </div>

        {/* Player Cards Slider */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="hidden sm:block absolute left-0 top-[40%] -translate-y-1/2 z-10 text-white p-2 sm:p-3 hover:text-cyan-300 transition-all duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={3} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="hidden sm:block absolute right-0 top-[40%] -translate-y-1/2 z-10 text-white p-2 sm:p-3 hover:text-cyan-300 transition-all duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={3} />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden px-4 sm:px-12">
            <div 
              ref={sliderRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {players[activeTab].map((player) => (
                <div key={player.id} className="group cursor-pointer flex-shrink-0 w-64 sm:w-72 snap-center">
                  {/* Player Image with Overlay */}
                  <div className="relative h-80 sm:h-96 overflow-hidden mb-4 sm:mb-6">
                    <img
                      src={player.image}
                      alt={player.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  </div>

                  {/* Player Info - Below Image */}
                  <div className="text-center">
                    <h3 className="text-white font-black text-lg sm:text-xl mb-2 uppercase tracking-tight">
                      {player.name}
                    </h3>
                    
                    {/* View Bio Button */}
                    <button className="border-2 border-white text-white py-2 sm:py-3 px-8 sm:px-16 font-bold text-xs sm:text-sm uppercase tracking-wide hover:bg-white hover:text-rbfc-blue transition-all duration-300">
                      VIEW BIO
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  )
}

export default Teams
