const fetch = require('node-fetch');

const getSimilar = (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUxN2VlZDlkNzBiOWE0Njk1MzU4NThjZTE4NjA5NCIsInN1YiI6IjY1NzliNGQ2ZWM4YTQzMDExYTNhZjc0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w9onnPn6ncV4Vfg9jaQkWS5R6s8_zwculWSCS2i8z_k'
        }
    };

    return fetch(url, options)
        .then(res => res.json())
        .then(json => json.results)
        .catch(err => console.error('error:', err));
};

module.exports = getSimilar;
