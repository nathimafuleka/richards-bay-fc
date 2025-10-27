// Local PSL API Service
const BASE_URL = 'http://localhost:5000/api';

export const soccerApi = {
  // Get upcoming fixtures
  getFixtures: async () => {
    try {
      const response = await fetch(`${BASE_URL}/fixtures`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch fixtures');
      }
      
      const jsonData = await response.json();
      const allData = jsonData.data || jsonData;
      
      // Filter to show only Richards Bay FC matches
      const richardsBayMatches = allData.filter(match => {
        const homeTeam = (match.home_team || match.homeTeam || '').toLowerCase();
        const awayTeam = (match.away_team || match.awayTeam || '').toLowerCase();
        return homeTeam.includes('richards bay') || awayTeam.includes('richards bay');
      });
      
      return richardsBayMatches;
    } catch (error) {
      console.error('Error fetching fixtures:', error);
      return [];
    }
  },

  // Get finished matches (results)
  getResults: async () => {
    try {
      const response = await fetch(`${BASE_URL}/results`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch results');
      }
      
      const jsonData = await response.json();
      const allData = jsonData.data || jsonData;
      
      // Filter to show only Richards Bay FC matches
      const richardsBayMatches = allData.filter(match => {
        const homeTeam = (match.home_team || match.homeTeam || '').toLowerCase();
        const awayTeam = (match.away_team || match.awayTeam || '').toLowerCase();
        return homeTeam.includes('richards bay') || awayTeam.includes('richards bay');
      });
      
      return richardsBayMatches;
    } catch (error) {
      console.error('Error fetching results:', error);
      return [];
    }
  },

  // Get league standings
  getStandings: async () => {
    try {
      const response = await fetch(`${BASE_URL}/log`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch standings');
      }
      
      const jsonData = await response.json();
      // Handle the response structure: { count: X, data: [...] }
      return jsonData.data || jsonData;
    } catch (error) {
      console.error('Error fetching standings:', error);
      return [];
    }
  },

  // Format match data for display (fixtures and results)
  formatMatch: (match) => {
    // Handle date formatting
    let dateStr = match.date || 'VS';
    let timeStr = match.time || 'VS';
    
    // Format date if it's in "18 Oct 2025" format
    if (match.date && match.date.includes(' ')) {
      try {
        const matchDate = new Date(match.date);
        dateStr = matchDate.toLocaleDateString('en-US', { 
          weekday: 'short', 
          day: 'numeric', 
          month: 'short' 
        }).toUpperCase();
      } catch (e) {
        dateStr = match.date;
      }
    }

    return {
      id: match.id || Math.random(),
      date: dateStr,
      time: timeStr,
      homeTeam: match.home_team || match.homeTeam || 'Team',
      homeLogo: match.home_team_image || match.homeLogo || match.home_logo || 'https://www.psl.co.za/img/teams/richardsbay.png',
      homeScore: match.home_score || match.homeScore,
      awayTeam: match.away_team || match.awayTeam || 'Team',
      awayLogo: match.away_team_image || match.awayLogo || match.away_logo || 'https://www.psl.co.za/img/teams/richardsbay.png',
      awayScore: match.away_score || match.awayScore,
      competition: match.competition || 'Betway Premiership',
      status: match.status || 'completed',
      venue: match.venue || 'Venue TBC',
    };
  },

  // Format standings data
  formatStandings: (standings) => {
    if (!Array.isArray(standings)) return [];
    
    return standings.map((team, index) => ({
      pos: team.position || team.pos || index + 1,
      team: team.team || team.name,
      played: team.played || team.playedGames || 0,
      won: team.won || 0,
      drawn: team.drawn || team.draw || 0,
      lost: team.lost || 0,
      gf: team.gf || team.goalsFor || 0,
      ga: team.ga || team.goalsAgainst || 0,
      gd: team.goal_difference || team.gd || team.goalDifference || 0,
      points: team.points || 0,
      highlight: (team.team || team.name || '').toLowerCase().includes('richards bay'),
    }));
  },

  // Get top 4 teams (3 above Richards Bay + Richards Bay)
  getTop4WithRichardsBay: (standings) => {
    if (!Array.isArray(standings) || standings.length === 0) return [];
    
    // Find Richards Bay position
    const richardsBayIndex = standings.findIndex(team => 
      (team.team || team.name || '').toLowerCase().includes('richards bay')
    );
    
    if (richardsBayIndex === -1) {
      // If Richards Bay not found, return top 4
      return standings.slice(0, 4);
    }
    
    // Get 3 teams above Richards Bay + Richards Bay itself
    const startIndex = Math.max(0, richardsBayIndex - 3);
    const endIndex = richardsBayIndex + 1;
    
    return standings.slice(startIndex, endIndex);
  },
};

export default soccerApi;
