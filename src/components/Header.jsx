import React, { useState, useEffect } from 'react'
import { Menu, X, Search, Facebook, Twitter, Instagram, Youtube, ChevronDown } from 'lucide-react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to search page
      window.location.href = `/search.html?q=${encodeURIComponent(searchQuery)}`
    }
  }

  const navItems = [
    { name: 'NEWS', href: '#news' },
    { name: 'MATCH CENTER', href: '#fixtures' },
    { 
      name: 'TEAM', 
      href: '#teams',
      dropdown: [
        { name: 'Men Team', href: '#men-team' },
        { name: 'Women Team', href: '#women-team' },
        { name: 'Academy', href: '#academy' },
      ]
    },
    { 
      name: 'THE CLUB', 
      href: '#club',
      dropdown: [
        { name: 'History', href: '#history' },
        { name: 'Trophy History', href: '#trophies' },
        { name: 'Contact Us', href: '#contact' },
      ]
    },
    { name: 'SHOP', href: '#shop' },
    { name: 'FANS', href: '#fans' },
  ]

  return (
    <>
      {/* Top Border - Fixed */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-rbfc-blue z-50"></div>
      
      {/* Main Header - Chelsea Style */}
      <header className={`sticky top-1 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center group">
              <img 
                src="/logo.png" 
                alt="Richards Bay FC"
                className="w-16 h-16 object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </a>

            {/* Desktop Navigation - Chelsea Style */}
            <nav className="hidden lg:flex items-center flex-1 justify-center space-x-8">
              {navItems.map((item) => (
                <div 
                  key={item.name}
                  className="relative group/nav"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                  onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="relative text-sm font-bold text-rbfc-blue hover:text-rbfc-dark transition-colors duration-200 tracking-wide uppercase py-2 group flex items-center gap-1"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={16} />}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rbfc-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                  </a>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && openDropdown === item.name && (
                    <div className="absolute top-full left-0 pt-2 z-50">
                      <div className="w-48 bg-white shadow-xl border border-gray-100 rounded-sm overflow-hidden">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-6 py-3 text-sm font-semibold text-rbfc-dark hover:bg-rbfc-blue hover:text-white transition-colors duration-200"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions - Social Icons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-rbfc-blue hover:text-rbfc-dark transition-colors"
              >
                <Search size={20} />
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <a href="#" className="text-rbfc-blue hover:text-rbfc-dark transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-rbfc-blue hover:text-rbfc-dark transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-rbfc-blue hover:text-rbfc-dark transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-rbfc-blue hover:text-rbfc-dark transition-colors">
                <Youtube size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-rbfc-blue hover:text-rbfc-dark transition-colors p-2"
            >
              {mobileMenuOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="bg-white border-t border-gray-200 shadow-lg">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <form onSubmit={handleSearch} className="flex items-center gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for news, teams, matches..."
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-rbfc-blue focus:outline-none text-rbfc-dark placeholder-gray-400 rounded"
                    autoFocus
                  />
                </div>
                <button
                  type="submit"
                  className="bg-rbfc-blue text-white px-6 py-3 font-bold text-sm uppercase tracking-wide hover:bg-rbfc-dark transition-colors rounded"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(false)
                    setSearchQuery('')
                  }}
                  className="text-gray-500 hover:text-rbfc-dark transition-colors"
                >
                  <X size={24} />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block text-base font-bold text-rbfc-blue hover:text-rbfc-dark px-4 py-3 transition-colors uppercase"
                    onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="pl-8 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-sm font-semibold text-rbfc-dark hover:text-rbfc-blue px-4 py-2 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Search */}
              <div className="pt-4 px-4 border-t border-gray-200 mt-4">
                <form onSubmit={(e) => { handleSearch(e); setMobileMenuOpen(false); }} className="mb-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="flex-1 px-4 py-2 border-2 border-gray-200 focus:border-rbfc-blue focus:outline-none text-rbfc-dark placeholder-gray-400 rounded"
                    />
                    <button
                      type="submit"
                      className="bg-rbfc-blue text-white p-2 rounded hover:bg-rbfc-dark transition-colors"
                    >
                      <Search size={20} />
                    </button>
                  </div>
                </form>
                
                <div className="flex items-center justify-center space-x-6 py-4">
                  <a href="#" className="text-rbfc-blue hover:text-rbfc-dark transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="text-rbfc-blue hover:text-rbfc-dark transition-colors">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="text-rbfc-blue hover:text-rbfc-dark transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="text-rbfc-blue hover:text-rbfc-dark transition-colors">
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
