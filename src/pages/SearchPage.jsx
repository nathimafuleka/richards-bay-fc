import React, { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const resultsPerPage = 8

  // Searchable content database
  const searchableContent = [
    // News
    { category: 'News', title: 'Richards Bay FC Secures Victory', description: 'The Natal Rich Boyz secured a crucial 2-1 victory against AmaZulu FC in the Betway Premiership...', url: '/#news', date: 'Oct 8, 2025' },
    { category: 'News', title: 'New Signing Announcement', description: 'Richards Bay FC is excited to announce the signing of midfielder Siyethemba Sithebe...', url: '/#news', date: 'Oct 5, 2025' },
    { category: 'News', title: 'Match Preview: vs Kaizer Chiefs', description: 'Preview of the upcoming Betway Premiership clash between Richards Bay FC and Kaizer Chiefs...', url: '/#news', date: 'Oct 14, 2025' },
    
    // Teams
    { category: 'Teams', title: 'First Team Squad', description: 'Meet the Richards Bay FC first team squad competing in the Betway Premiership...', url: '/#teams' },
    { category: 'Teams', title: 'Reserve Team', description: 'Our reserve team developing future stars for Richards Bay FC...', url: '/#teams' },
    { category: 'Teams', title: 'Youth Development', description: 'Youth academy nurturing young talent in KwaZulu-Natal...', url: '/#teams' },
    { category: 'Teams', title: 'Salim Magoola - Goalkeeper', description: 'First team goalkeeper, number 1, key player for Richards Bay FC...', url: '/#teams' },
    { category: 'Teams', title: 'Ian Otieno - Goalkeeper', description: 'Experienced goalkeeper, number 16, reliable shot-stopper...', url: '/#teams' },
    { category: 'Teams', title: 'Thabani Zuke - Defender', description: 'Solid defender, number 5, strong at the back...', url: '/#teams' },
    { category: 'Teams', title: 'Simphiwe Mcineka - Defender', description: 'Experienced defender, number 4, commanding presence...', url: '/#teams' },
    { category: 'Teams', title: 'Lwandile Mabuya - Midfielder', description: 'Dynamic midfielder, number 8, controls the tempo...', url: '/#teams' },
    { category: 'Teams', title: 'Tshepo Mabua - Midfielder', description: 'Creative midfielder, number 10, playmaker...', url: '/#teams' },
    { category: 'Teams', title: 'Gabadinho Mhango - Forward', description: 'Star striker, number 7, prolific goalscorer...', url: '/#teams' },
    { category: 'Teams', title: 'Langelihle Mhlongo - Forward', description: 'Attacking forward, number 9, clinical finisher...', url: '/#teams' },
    { category: 'Teams', title: 'Moses Mthembu - Forward', description: 'Pacy forward, number 11, dangerous attacker...', url: '/#teams' },
    
    // Fixtures & Results
    { category: 'Fixtures', title: 'Upcoming Match: Richards Bay vs Kaizer Chiefs', description: 'Betway Premiership fixture on SAT 15 OCT at 15:00...', url: '/#fixtures', date: 'Oct 15, 2025' },
    { category: 'Fixtures', title: 'Upcoming Match: Orlando Pirates vs Richards Bay', description: 'Betway Premiership fixture on WED 19 OCT at 19:30...', url: '/#fixtures', date: 'Oct 19, 2025' },
    { category: 'Results', title: 'Match Result: Richards Bay 2-1 AmaZulu', description: 'Richards Bay FC secured victory with goals in the Betway Premiership...', url: '/#fixtures', date: 'Oct 8, 2025' },
    { category: 'Results', title: 'Match Result: Supersport 1-1 Richards Bay', description: 'Draw away from home in the Betway Premiership encounter...', url: '/#fixtures', date: 'Oct 5, 2025' },
    
    // League Table
    { category: 'Table', title: 'Betway Premiership Standings', description: 'Richards Bay FC currently sits in 4th place with 18 points from 10 games...', url: '/#fixtures' },
    
    // Gallery
    { category: 'Gallery', title: 'Match Day Photos', description: 'Photo gallery from recent Richards Bay FC matches and celebrations...', url: '/#gallery' },
    { category: 'Gallery', title: 'Training Session Videos', description: 'Behind the scenes training videos of the Richards Bay FC squad...', url: '/#gallery' },
    { category: 'Gallery', title: 'Best Goals of the Season', description: 'Video highlights of the best goals scored by Richards Bay FC this season...', url: '/#gallery' },
    
    // Club Info
    { category: 'Club', title: 'About Richards Bay FC', description: 'The Natal Rich Boyz - Representing Richards Bay with pride in the Betway Premiership...', url: '/' },
    { category: 'Club', title: 'Club History', description: 'Learn about the rich history of Richards Bay Football Club...', url: '/' },
    { category: 'Club', title: 'Contact Us', description: 'Get in touch with Richards Bay FC - phone, email, and office location...', url: '/' },
    
    // Sponsors
    { category: 'Partners', title: 'Our Sponsors', description: 'Meet the proud partners supporting Richards Bay FC...', url: '/#sponsors' },
  ]

  useEffect(() => {
    // Get search query from URL
    const urlParams = new URLSearchParams(window.location.search)
    const query = urlParams.get('q')
    if (query) {
      setSearchQuery(query)
      performSearch(query)
    }
  }, [])

  const performSearch = (query) => {
    setIsLoading(true)
    setTimeout(() => {
      if (query.trim()) {
        const searchTerm = query.toLowerCase()
        
        const results = searchableContent.filter(item => 
          item.title.toLowerCase().includes(searchTerm) ||
          item.description.toLowerCase().includes(searchTerm) ||
          item.category.toLowerCase().includes(searchTerm)
        )
        
        setSearchResults(results)
      } else {
        setSearchResults([])
      }
      setIsLoading(false)
    }, 300)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const newUrl = `/search.html?q=${encodeURIComponent(searchQuery)}`
      window.history.pushState({ path: newUrl }, '', newUrl)
      performSearch(searchQuery)
      setCurrentPage(1) // Reset to first page on new search
    }
  }

  // Pagination calculations
  const indexOfLastResult = currentPage * resultsPerPage
  const indexOfFirstResult = indexOfLastResult - resultsPerPage
  const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult)
  const totalPages = Math.ceil(searchResults.length / resultsPerPage)

  // Group current page results by category
  const groupedResults = currentResults.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = []
    }
    acc[result.category].push(result)
    return acc
  }, {})

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-rbfc-blue flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header with Search */}
        <div className="bg-rbfc-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase mb-8 tracking-tight">
              SEARCH
            </h1>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full px-6 py-5 bg-rbfc-blue border-2 border-white/30 focus:border-white focus:outline-none text-white placeholder-white/60 text-lg rounded-full"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-3"
              >
                <Search size={28} />
              </button>
            </form>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-rbfc-blue min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
                <p className="mt-4 text-white">Searching...</p>
              </div>
            ) : searchResults.length > 0 ? (
              <>
                {/* Grouped Results by Category */}
                {Object.entries(groupedResults).map(([category, results]) => (
                  <div key={category} className="mb-12">
                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                        {category}
                      </h2>
                      <span className="text-yellow-400 font-bold text-sm uppercase">
                        {results.length} RESULT{results.length !== 1 ? 'S' : ''}
                      </span>
                    </div>

                    {/* Results Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {results.map((result, index) => (
                        <a
                          key={index}
                          href={result.url}
                          className="group"
                        >
                          <div className="bg-rbfc-dark/30 hover:bg-rbfc-dark/50 transition-all duration-300 p-6 rounded-lg border-b-4 border-yellow-400">
                            {/* Title */}
                            <h3 className="text-white font-black text-lg mb-2 uppercase group-hover:text-yellow-400 transition-colors">
                              {result.title.length > 50 ? result.title.substring(0, 50) + '...' : result.title}
                            </h3>

                            {/* Date */}
                            {result.date && (
                              <p className="text-white/60 text-xs mb-2">{result.date}</p>
                            )}

                            {/* Description */}
                            <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
                              {result.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>

                    {/* See All Link */}
                    {results.length > 4 && (
                      <div className="mt-6">
                        <a href={results[0].url} className="text-white font-bold uppercase text-sm hover:text-yellow-400 transition-colors inline-flex items-center gap-2">
                          SEE ALL
                          <span className="text-yellow-400">→</span>
                        </a>
                      </div>
                    )}
                  </div>
                ))}

                {/* Pagination - Only show if more than 8 results */}
                {searchResults.length > resultsPerPage && (
                  <>
                    <div className="mt-12 flex items-center justify-center gap-2">
                      {/* Previous Button */}
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 font-bold uppercase text-sm transition-colors ${
                          currentPage === 1
                            ? 'text-white/30 cursor-not-allowed'
                            : 'text-white hover:text-yellow-400'
                        }`}
                      >
                        ← Previous
                      </button>

                      {/* Page Numbers */}
                      <div className="flex gap-2">
                        {[...Array(totalPages)].map((_, index) => {
                          const pageNumber = index + 1
                          return (
                            <button
                              key={pageNumber}
                              onClick={() => handlePageChange(pageNumber)}
                              className={`w-10 h-10 font-bold rounded transition-all ${
                                currentPage === pageNumber
                                  ? 'bg-yellow-400 text-rbfc-dark'
                                  : 'bg-white/10 text-white hover:bg-white/20'
                              }`}
                            >
                              {pageNumber}
                            </button>
                          )
                        })}
                      </div>

                      {/* Next Button */}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 font-bold uppercase text-sm transition-colors ${
                          currentPage === totalPages
                            ? 'text-white/30 cursor-not-allowed'
                            : 'text-white hover:text-yellow-400'
                        }`}
                      >
                        Next →
                      </button>
                    </div>

                    {/* Results Info - Only show with pagination */}
                    <div className="mt-6 text-center">
                      <p className="text-white/60 text-sm">
                        Showing {indexOfFirstResult + 1}-{Math.min(indexOfLastResult, searchResults.length)} of {searchResults.length} results
                      </p>
                    </div>
                  </>
                )}
              </>
            ) : searchQuery ? (
              <div className="text-center py-12">
                <Search className="mx-auto text-white/30 mb-4" size={64} />
                <h3 className="text-2xl font-bold text-white mb-2">
                  No results found for "{searchQuery}"
                </h3>
                <p className="text-white/60">
                  Try different keywords or check your spelling
                </p>
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="mx-auto text-white/30 mb-4" size={64} />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Enter a search term
                </h3>
                <p className="text-white/60">
                  Search for news, teams, matches, and more
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default SearchPage
