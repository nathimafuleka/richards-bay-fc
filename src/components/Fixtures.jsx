import React, { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'
import soccerApi from '../services/soccerApi'

const Fixtures = () => {
  const [activeTab, setActiveTab] = useState('fixtures')
  const [fixtures, setFixtures] = useState([])
  const [results, setResults] = useState([])
  const [leagueTable, setLeagueTable] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(false)
      try {
        // Fetch fixtures
        const fixturesData = await soccerApi.getFixtures()
        if (fixturesData && fixturesData.length > 0) {
          // Always format the data from API
          const formattedFixtures = fixturesData
            .slice(0, 3)
            .map(match => soccerApi.formatMatch(match))
          setFixtures(formattedFixtures)
        } else {
          setError(true)
        }

        // Fetch results
        const resultsData = await soccerApi.getResults()
        if (resultsData && resultsData.length > 0) {
          // Always format the data from API
          const formattedResults = resultsData
            .slice(0, 3)
            .map(match => soccerApi.formatMatch(match))
          setResults(formattedResults)
        } else {
          setError(true)
        }

        // Fetch standings
        const standingsData = await soccerApi.getStandings()
        if (standingsData && standingsData.length > 0) {
          // Format the standings
          const formattedStandings = Array.isArray(standingsData) 
            ? soccerApi.formatStandings(standingsData)
            : standingsData
          
          // Get top 4 teams (3 above Richards Bay + Richards Bay)
          const top4Teams = soccerApi.getTop4WithRichardsBay(formattedStandings)
          setLeagueTable(top4Teams)
        } else {
          setError(true)
        }
      } catch (error) {
        console.error('Error fetching soccer data:', error)
        // Set error state on failure
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    // Initial fetch
    fetchData()

    // Auto-refresh every 2 minutes (120000ms)
    const refreshInterval = setInterval(() => {
      fetchData()
    }, 120000)

    // Cleanup interval on component unmount
    return () => clearInterval(refreshInterval)
  }, [])

  if (loading) {
    return (
      <section id="fixtures" className="py-12 lg:py-16 bg-rbfc-light">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-rbfc-blue border-t-transparent"></div>
          </div>
        </div>
      </section>
    )
  }

  // Error state
  if (error) {
    return (
      <section id="fixtures" className="py-12 lg:py-16 bg-rbfc-light">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-rbfc-dark uppercase tracking-tight">
                TABLE & MATCHES
              </h2>
              <div className="hidden sm:block w-12 sm:w-16 lg:w-24 h-1 bg-rbfc-blue"></div>
            </div>
          </div>
          
          {/* Error Message */}
          <div className="bg-white border-2 border-rbfc-blue/20 p-8 sm:p-12 lg:p-16 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="mb-4">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-rbfc-blue/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-rbfc-dark mb-4 uppercase">
                No Data Available
              </h3>
              <p className="text-base sm:text-lg text-gray-600 font-medium">
                Our tech team are working on it.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="fixtures" className="py-12 lg:py-16 bg-rbfc-light">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-rbfc-dark uppercase tracking-tight">
              TABLE & MATCHES
            </h2>
            <div className="hidden sm:block w-12 sm:w-16 lg:w-24 h-1 bg-rbfc-blue"></div>
          </div>
        </div>
        
        {/* Tabs - Outside Grid */}
        <div className="flex gap-2 sm:gap-4 mb-6">
          <button
            onClick={() => setActiveTab('fixtures')}
            className={`flex-1 sm:flex-none px-4 sm:px-6 py-3 font-bold text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 ${
              activeTab === 'fixtures'
                ? 'bg-rbfc-blue text-white'
                : 'bg-white text-rbfc-dark hover:bg-gray-100'
            }`}
          >
            Fixtures
          </button>
          <button
            onClick={() => setActiveTab('results')}
            className={`flex-1 sm:flex-none px-4 sm:px-6 py-3 font-bold text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 ${
              activeTab === 'results'
                ? 'bg-rbfc-blue text-white'
                : 'bg-white text-rbfc-dark hover:bg-gray-100'
            }`}
          >
            Results
          </button>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN - Fixtures & Results Cards */}
          <div className="lg:col-span-2 space-y-4">
            {activeTab === 'fixtures' ? (
                fixtures.slice(0, 1).map((fixture) => (
                  <div key={fixture.id} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="p-4 sm:p-8 lg:p-12">
                      {/* Header - Competition Logo & Venue/Date */}
                      <div className="flex items-start justify-between mb-4 sm:mb-8">
                        {/* Betway Premiership Logo */}
                        <div className="flex items-center gap-3">
                          <img 
                            src="https://images.supersport.com/media/xfajmm04/betway_premiership.png?width=128&quality=90&format=webp" 
                            alt="Betway Premiership" 
                            className="h-10 sm:h-12 lg:h-16 w-auto object-contain"
                          />
                        </div>
                        
                        {/* Venue & Date */}
                        <div className="text-right">
                          <div className="text-gray-500 text-xs sm:text-sm mb-1">{fixture.venue}</div>
                          <div className="text-rbfc-dark font-bold text-xs sm:text-sm">{fixture.date}</div>
                        </div>
                      </div>

                      {/* Match Details */}
                      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-8 gap-4">
                        {/* Home Team */}
                        <div className="flex items-center gap-2 sm:gap-4 flex-1 w-full sm:w-auto">
                          <img src={fixture.homeLogo} alt={fixture.homeTeam} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain" />
                          <span className={`font-black text-sm sm:text-lg lg:text-2xl ${fixture.homeTeam === 'Richards Bay FC' ? 'text-rbfc-blue' : 'text-rbfc-dark'}`}>
                            {fixture.homeTeam}
                          </span>
                        </div>

                        {/* VS or Time */}
                        <div className="mx-2 sm:mx-8 text-center">
                          <div className="bg-rbfc-blue text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm">
                            {fixture.time}
                          </div>
                        </div>

                        {/* Away Team */}
                        <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-end w-full sm:w-auto">
                          <span className={`font-black text-sm sm:text-lg lg:text-2xl ${fixture.awayTeam === 'Richards Bay FC' ? 'text-rbfc-blue' : 'text-rbfc-dark'}`}>
                            {fixture.awayTeam}
                          </span>
                          <img src={fixture.awayLogo} alt={fixture.awayTeam} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain" />
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="flex justify-center">
                        <button className="bg-rbfc-dark text-white py-2 sm:py-3 px-8 sm:px-12 font-bold text-xs sm:text-sm uppercase tracking-wide hover:bg-rbfc-blue transition-colors flex items-center justify-center gap-2">
                          Match Centre
                          <ChevronRight size={14} className="sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              results.slice(0, 1).map((result) => {
                  const isRBFCHome = result.homeTeam === 'Richards Bay FC'
                  const isRBFCAway = result.awayTeam === 'Richards Bay FC'
                  const rbfcWon = (isRBFCHome && result.homeScore > result.awayScore) || (isRBFCAway && result.awayScore > result.homeScore)
                  
                  return (
                    <div key={result.id} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                      <div className="p-4 sm:p-8 lg:p-12">
                        {/* Header - Competition Logo & Date */}
                        <div className="flex items-start justify-between mb-4 sm:mb-8">
                          {/* Betway Premiership Logo */}
                          <div className="flex items-center gap-3">
                            <img 
                              src="https://images.supersport.com/media/xfajmm04/betway_premiership.png?width=128&quality=90&format=webp" 
                              alt="Betway Premiership" 
                              className="h-10 sm:h-12 lg:h-16 w-auto object-contain"
                            />
                          </div>
                          
                          {/* Date & Status */}
                          <div className="text-right">
                            <div className="text-gray-500 text-xs sm:text-sm mb-1">{result.competition}</div>
                            <div className="text-rbfc-dark font-bold text-xs sm:text-sm">{result.date}</div>
                          </div>
                        </div>

                        {/* Match Score */}
                        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-8 gap-4">
                          {/* Home Team */}
                          <div className="flex items-center gap-2 sm:gap-4 flex-1 w-full sm:w-auto">
                            <img src={result.homeLogo} alt={result.homeTeam} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain" />
                            <span className={`font-black text-sm sm:text-lg lg:text-2xl ${result.homeTeam === 'Richards Bay FC' ? 'text-rbfc-blue' : 'text-rbfc-dark'}`}>
                              {result.homeTeam}
                            </span>
                          </div>

                          {/* Score */}
                          <div className="mx-2 sm:mx-8 text-center">
                            <div className="flex items-center gap-3 sm:gap-6">
                              <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-rbfc-dark">{result.homeScore}</span>
                              <span className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-300">-</span>
                              <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-rbfc-dark">{result.awayScore}</span>
                            </div>
                          </div>

                          {/* Away Team */}
                          <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-end w-full sm:w-auto">
                            <span className={`font-black text-sm sm:text-lg lg:text-2xl ${result.awayTeam === 'Richards Bay FC' ? 'text-rbfc-blue' : 'text-rbfc-dark'}`}>
                              {result.awayTeam}
                            </span>
                            <img src={result.awayLogo} alt={result.awayTeam} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain" />
                          </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex justify-center">
                          <button className="bg-rbfc-dark text-white py-2 sm:py-3 px-8 sm:px-12 font-bold text-xs sm:text-sm uppercase tracking-wide hover:bg-rbfc-blue transition-colors flex items-center justify-center gap-2">
                            Match Centre
                            <ChevronRight size={14} className="sm:w-4 sm:h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )
              })
            )}
          </div>

          {/* RIGHT COLUMN - League Table */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 flex flex-col h-full">
              {/* Header */}
              <div className="bg-rbfc-dark text-white p-3 sm:p-4">
                <h3 className="font-black text-sm sm:text-base lg:text-lg uppercase tracking-tight">Betway Premiership</h3>
              </div>
              
              {/* Table */}
              <div className="overflow-x-auto flex-1">
                <table className="w-full text-xs sm:text-sm">
                  <thead className="bg-gray-100 border-b border-gray-200">
                    <tr>
                      <th className="text-left p-2 sm:p-3 font-bold text-xs text-gray-600">#</th>
                      <th className="text-left p-2 sm:p-3 font-bold text-xs text-gray-600">TEAM</th>
                      <th className="text-center p-2 sm:p-3 font-bold text-xs text-gray-600">P</th>
                      <th className="text-center p-2 sm:p-3 font-bold text-xs text-gray-600">GD</th>
                      <th className="text-center p-2 sm:p-3 font-bold text-xs text-gray-600">PTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leagueTable.slice(0, 4).map((team) => (
                      <tr 
                        key={team.pos}
                        className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                          team.highlight ? 'bg-rbfc-blue/10 font-bold' : ''
                        }`}
                      >
                        <td className="py-3 sm:py-4 px-2 sm:px-3 text-gray-600">{team.pos}</td>
                        <td className={`py-3 sm:py-4 px-2 sm:px-3 ${team.highlight ? 'text-rbfc-blue font-black' : 'text-rbfc-dark'}`}>
                          {team.team}
                        </td>
                        <td className="py-3 sm:py-4 px-2 sm:px-3 text-center text-gray-600">{team.played}</td>
                        <td className={`py-3 sm:py-4 px-2 sm:px-3 text-center font-semibold ${team.gd > 0 ? 'text-green-600' : team.gd < 0 ? 'text-red-600' : 'text-gray-600'}`}>
                          {team.gd > 0 ? '+' : ''}{team.gd}
                        </td>
                        <td className="py-3 sm:py-4 px-2 sm:px-3 text-center font-black text-rbfc-dark">{team.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Fixtures
