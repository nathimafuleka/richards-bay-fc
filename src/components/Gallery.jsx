import React, { useState } from 'react'
import { Play } from 'lucide-react'

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos')

  const photos = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop',
      title: 'Match Day Action',
      category: 'Match'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
      title: 'Team Celebration',
      category: 'Celebration'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop',
      title: 'Training Session',
      category: 'Training'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800&h=600&fit=crop',
      title: 'Goal Celebration',
      category: 'Match'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&h=600&fit=crop',
      title: 'Stadium Atmosphere',
      category: 'Stadium'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1594552072238-b8c6b4c5c5f7?w=800&h=600&fit=crop',
      title: 'Fan Support',
      category: 'Fans'
    },
  ]

  const videos = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop',
      title: 'Match Highlights vs Kaizer Chiefs',
      duration: '5:32',
      views: '12K'
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
      title: 'Behind The Scenes: Training',
      duration: '8:15',
      views: '8.5K'
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop',
      title: 'Best Goals of the Season',
      duration: '10:45',
      views: '25K'
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800&h=600&fit=crop',
      title: 'Player Interviews',
      duration: '6:20',
      views: '5.2K'
    },
  ]

  return (
    <section id="gallery" className="py-12 lg:py-16 bg-rbfc-light">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-rbfc-dark uppercase tracking-tight">
              IMAGES & VIDEOS
            </h2>
            <div className="hidden sm:block w-12 sm:w-16 lg:w-24 h-1 bg-rbfc-blue"></div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8">
          <button
            onClick={() => setActiveTab('photos')}
            className={`flex-1 sm:flex-none px-4 sm:px-6 py-3 font-bold text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 ${
              activeTab === 'photos'
                ? 'bg-rbfc-blue text-white'
                : 'bg-white text-rbfc-dark hover:bg-gray-100'
            }`}
          >
            Photos
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex-1 sm:flex-none px-4 sm:px-6 py-3 font-bold text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 ${
              activeTab === 'videos'
                ? 'bg-rbfc-blue text-white'
                : 'bg-white text-rbfc-dark hover:bg-gray-100'
            }`}
          >
            Videos
          </button>
        </div>

        {/* Content */}
        {activeTab === 'photos' ? (
          /* Photos Grid */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rbfc-dark via-rbfc-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block bg-rbfc-blue text-white px-3 py-1 text-xs font-bold uppercase mb-2">
                      {photo.category}
                    </span>
                    <h3 className="text-white font-bold text-lg">{photo.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Videos Grid */
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-rbfc-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play size={32} className="text-white fill-white ml-1" />
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 text-sm font-bold">
                    {video.duration}
                  </div>
                  
                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <h3 className="text-white font-black text-xl mb-2">{video.title}</h3>
                    <p className="text-gray-300 text-sm">{video.views} views</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="w-full sm:w-auto bg-rbfc-dark text-white px-8 sm:px-12 py-3 sm:py-4 font-bold text-xs sm:text-sm uppercase tracking-wide hover:bg-rbfc-blue transition-all duration-300">
            VIEW ALL {activeTab === 'photos' ? 'PHOTOS' : 'VIDEOS'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Gallery
