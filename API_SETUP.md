# Local PSL API Setup

This project uses a local API running on `localhost:5000` to fetch PSL (Betway Premiership) match data, fixtures, results, and league standings.

## API Endpoints

The local API provides three endpoints:

1. **GET** `/api/fixtures` - Get upcoming PSL fixtures with dates and venues
2. **GET** `/api/results` - Get recent match results with final scores
3. **GET** `/api/log` - Get league standings with full statistics

## Setup Instructions

### 1. Start Your Local API Server

Make sure your local API server is running on `http://localhost:5000`

```bash
# Navigate to your API directory
cd path/to/your/api

# Start the server (example commands)
python app.py
# or
node server.js
# or
npm start
```

### 2. Verify API is Running

Open your browser and visit:
- `http://localhost:5000/api/fixtures`
- `http://localhost:5000/api/results`
- `http://localhost:5000/api/log`

You should see JSON data for each endpoint.

### 3. Run the React App

```bash
npm run dev
```

The app will fetch data from your local API automatically.

## Expected Data Format

### API Response Structure
All endpoints return data in this format:
```json
{
  "count": 73,
  "data": [...]
}
```

### Fixtures (`/api/fixtures`)
```json
{
  "count": 10,
  "data": [
    {
      "date": "18 Oct 2025",
      "home_team": "Richards Bay FC",
      "home_team_image": "https://example.com/richardsbay.png",
      "away_team": "Kaizer Chiefs",
      "away_team_image": "https://example.com/chiefs.png",
      "venue": "King Zwelithini Stadium",
      "status": "scheduled"
    }
  ]
}
```

### Results (`/api/results`)
```json
{
  "count": 73,
  "data": [
    {
      "away_score": "1",
      "away_team": "TS Galaxy",
      "away_team_image": "https://awesslegacycontent.blob.core.windows.net/newpsl/images/clublogos/TS Galaxy.png",
      "date": "18 Oct 2025",
      "home_score": "2",
      "home_team": "Magesi FC",
      "home_team_image": "https://awesslegacycontent.blob.core.windows.net/newpsl/images/clublogos/Magesi FC.png",
      "status": "completed",
      "venue": "Seshego Stadium, Pietersburg"
    }
  ]
}
```

### League Table (`/api/log`)
```json
[
  {
    "pos": 1,
    "team": "Mamelodi Sundowns",
    "played": 10,
    "won": 8,
    "drawn": 1,
    "lost": 1,
    "gf": 24,
    "ga": 8,
    "gd": 16,
    "points": 25
  }
]
```

## Fallback Data

The app includes fallback data that displays when:
- Local API server is not running
- API requests fail
- Network errors occur

This ensures the site always displays content, even without API access.

## Testing the Integration

1. Start your local API server on `http://localhost:5000`
2. Run the React app: `npm run dev`
3. Navigate to the Fixtures section
4. You should see:
   - A loading spinner initially
   - Real match data from your local API
   - Or fallback data if the API is unavailable

## Changing the API URL

If your API runs on a different port or host, update `src/services/soccerApi.js`:

```javascript
const BASE_URL = 'http://localhost:3000/api'; // Change port
// or
const BASE_URL = 'http://192.168.1.100:5000/api'; // Different host
```

## Troubleshooting

**No data showing?**
- Check browser console for error messages
- Verify your local API server is running
- Test API endpoints directly in browser
- Check for CORS issues (API must allow requests from localhost:5173)

**CORS Errors?**
Your API server needs to allow CORS. Add these headers:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

**"Failed to fetch" errors?**
- Ensure API server is running on port 5000
- Check firewall settings
- Verify the API endpoints return valid JSON
- The fallback data will display automatically

## Richards Bay FC Filtering

The app automatically filters all fixtures and results to show **only Richards Bay FC matches**:
- Checks both home and away teams
- Case-insensitive matching
- Shows matches where Richards Bay is either home or away

This means even if your API returns all PSL matches, the website will only display Richards Bay FC games.

## Flexible Data Format

The API service is flexible and can handle different data formats:
- Snake_case (`home_team`) or camelCase (`homeTeam`)
- Already formatted data or raw data that needs formatting
- Missing fields will use defaults

## Support

For issues:
- Check browser console for detailed error messages
- Verify API responses in Network tab
- Ensure all three endpoints return valid JSON arrays
