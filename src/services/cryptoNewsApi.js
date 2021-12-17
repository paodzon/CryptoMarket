import axios from 'axios';

export default axios.create({
    baseURL: 'https://bing-news-search1.p.rapidapi.com/news',
    headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': 'd35d7880f8mshaa749fac4ca935ap119f3ajsn360f65482632'
      },
      params: {
        freshness: 'Day',
        textFormat: 'Raw',
        safeSearch: 'Off'
      },
    
})