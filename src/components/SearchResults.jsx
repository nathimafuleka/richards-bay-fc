import React from 'react'
import { X, Search } from 'lucide-react'

const SearchResults = ({ query, results, onClose }) => {
  if (!query) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Search Header */}
          <div className="bg-white rounded-t-lg shadow-lg p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Search className="text-rbfc-blue" size={24} />
                <h2 className="text-xl font-black text-rbfc-dark">
                  Search Results for "{query}"
                </h2>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-rbfc-dark transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Found {results.length} result{results.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Results List */}
          <div className="bg-white rounded-b-lg shadow-lg">
            {results.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {results.map((result, index) => (
                  <a
                    key={index}
                    href={result.url}
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(result.url)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                        onClose()
                      }
                    }}
                    className="block p-6 hover:bg-gray-50 transition-colors group"
                  >
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block bg-rbfc-blue/10 text-rbfc-blue px-3 py-1 text-xs font-bold uppercase rounded">
                        {result.category}
                      </span>
                      {result.date && (
                        <span className="text-xs text-gray-500">{result.date}</span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-rbfc-blue group-hover:text-rbfc-dark mb-2">
                      {result.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {result.description}
                    </p>

                    {/* URL Preview */}
                    <p className="text-xs text-green-700 mt-2">
                      https://richardsbayfc.co.za{result.url}
                    </p>
                  </a>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center">
                <Search className="mx-auto text-gray-300 mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-600 mb-2">
                  No results found
                </h3>
                <p className="text-gray-500">
                  Try searching with different keywords
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResults
