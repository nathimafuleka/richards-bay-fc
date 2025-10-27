import React, { useState } from 'react'
import { Clock, Share2, Play, Check } from 'lucide-react'

const News = () => {
  const [copiedId, setCopiedId] = useState(null)

  const handleShare = async (article) => {
    const url = `https://rbfc.com/news/${article.id}`
    const shareData = {
      title: article.title,
      text: article.excerpt,
      url: url
    }

    // Try native share first (mobile)
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        // User cancelled or error, fallback to copy
        copyToClipboard(url, article.id)
      }
    } else {
      // Desktop: copy to clipboard
      copyToClipboard(url, article.id)
    }
  }

  const copyToClipboard = async (url, articleId) => {
    try {
      await navigator.clipboard.writeText(url)
      setCopiedId(articleId)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  const newsArticles = [
    {
      id: 1,
      category: 'MATCH REPORT',
      title: 'Richards Bay FC Secures Crucial 2-1 Victory Over AmaZulu',
      excerpt: 'The Natal Rich Boyz delivered an outstanding performance at home, securing three vital points in the DStv Premiership clash.',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=800&fit=crop',
      time: '6h',
      tag: 'match coverage',
      type: 'image'
    },
    {
      id: 2,
      category: 'INTERVIEW',
      title: 'Coach Speaks: Tactical Analysis After Big Win',
      excerpt: 'Head coach discusses the team\'s performance and strategy that led to victory at King Goodwill Zwelithini Stadium.',
      image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1200&h=800&fit=crop',
      time: '5h',
      tag: 'match coverage',
      type: 'video'
    },
    {
      id: 3,
      category: 'HIGHLIGHTS',
      title: 'Extended Highlights: Richards Bay FC vs AmaZulu',
      excerpt: 'Watch all the key moments from our thrilling 2-1 victory including both goals and best chances.',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop',
      time: '8h',
      tag: 'video',
      type: 'video'
    },
    {
      id: 4,
      category: 'TRANSFER NEWS',
      title: 'New Signing: Midfielder Joins Richards Bay FC',
      excerpt: 'The club announces the signing of talented midfielder on a three-year deal.',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop',
      time: '1d',
      tag: 'transfers',
      type: 'image'
    },
    {
      id: 5,
      category: 'TRAINING',
      title: 'Behind The Scenes: Training Session Highlights',
      excerpt: 'Go inside the training ground as the team prepares for this weekend\'s crucial fixture.',
      image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&h=600&fit=crop',
      time: '1d',
      tag: 'video',
      type: 'video'
    },
    {
      id: 6,
      category: 'MATCH PREVIEW',
      title: 'Preview: Richards Bay FC vs Kaizer Chiefs',
      excerpt: 'Everything you need to know ahead of this weekend\'s blockbuster clash.',
      image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&h=600&fit=crop',
      time: '2d',
      tag: 'match preview',
      type: 'image'
    },
  ]

  return (
    <section id="news" className="py-12 lg:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl lg:text-3xl font-black text-rbfc-dark uppercase tracking-tight">
              LATEST NEWS
            </h2>
            <div className="hidden sm:block w-16 lg:w-24 h-1 bg-rbfc-blue"></div>
          </div>
          <button className="text-sm font-bold text-rbfc-dark hover:text-rbfc-blue transition-colors uppercase tracking-wide">
            MORE NEWS
          </button>
        </div>

        {/* Top Two Featured Articles - Horizontal Layout */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {newsArticles.slice(0, 2).map((article) => (
            <div
              key={article.id}
              className="group bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image with Video Indicator */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {article.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/60 backdrop-blur-sm rounded-full p-4 group-hover:bg-rbfc-blue group-hover:scale-110 transition-all duration-300">
                      <Play size={32} className="text-white fill-white" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl lg:text-2xl font-black text-rbfc-dark mb-3 leading-tight uppercase">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="font-semibold">{article.time} | {article.tag}</span>
                  <button 
                    onClick={() => handleShare(article)}
                    className="hover:text-rbfc-blue transition-colors relative"
                    title="Share article"
                  >
                    {copiedId === article.id ? (
                      <Check size={16} className="text-green-600" />
                    ) : (
                      <Share2 size={16} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Grid - 4 Articles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsArticles.slice(2, 6).map((article) => (
            <div
              key={article.id}
              className="group bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer relative"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {article.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/40 backdrop-blur-sm rounded-full p-3 group-hover:bg-rbfc-blue group-hover:scale-110 transition-all duration-300">
                      <Play size={24} className="text-white fill-white" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-black text-rbfc-dark mb-2 leading-tight uppercase line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="font-semibold">{article.time} | {article.tag}</span>
                  <button 
                    onClick={() => handleShare(article)}
                    className="hover:text-rbfc-blue transition-colors relative"
                    title="Share article"
                  >
                    {copiedId === article.id ? (
                      <Check size={14} className="text-green-600" />
                    ) : (
                      <Share2 size={14} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
