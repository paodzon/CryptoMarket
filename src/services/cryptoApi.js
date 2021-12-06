import axios from 'axios';

export default axios.create({
    baseURL:'https://coinranking1.p.rapidapi.com',
    headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': 'd35d7880f8mshaa749fac4ca935ap119f3ajsn360f65482632'
    }
})
