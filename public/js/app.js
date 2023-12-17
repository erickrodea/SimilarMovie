const fetch = require('node-fetch');
const movieForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

movieForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const movieTitle = search.value


    const url = 'https://api.themoviedb.org/3/search/movie?query=' + movieTitle + '&include_adult=false&api_key=ade17eed9d70b9a469535858ce186094&language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUxN2VlZDlkNzBiOWE0Njk1MzU4NThjZTE4NjA5NCIsInN1YiI6IjY1NzliNGQ2ZWM4YTQzMDExYTNhZjc0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w9onnPn6ncV4Vfg9jaQkWS5R6s8_zwculWSCS2i8z_k'
        }
    };

    fetch(url,options)
        .then(res => res.json())
        .then(json => { const movieID = (json.results[0].id) })
        .catch(err => console.error('error:' + err));


    const url2 = 'https://api.themoviedb.org/3/movie/' + movieID + '/similar?language=en-US&page=1';
    const options2 = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUxN2VlZDlkNzBiOWE0Njk1MzU4NThjZTE4NjA5NCIsInN1YiI6IjY1NzliNGQ2ZWM4YTQzMDExYTNhZjc0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w9onnPn6ncV4Vfg9jaQkWS5R6s8_zwculWSCS2i8z_k'
        }
    };

    fetch(url2, options2)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
})
  
  
/*
 const url = 'https://api.themoviedb.org/3/search/movie?query=' + movieTitle + '&include_adult=false&api_key=ade17eed9d70b9a469535858ce186094&language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUxN2VlZDlkNzBiOWE0Njk1MzU4NThjZTE4NjA5NCIsInN1YiI6IjY1NzliNGQ2ZWM4YTQzMDExYTNhZjc0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w9onnPn6ncV4Vfg9jaQkWS5R6s8_zwculWSCS2i8z_k'
        }
    };

    fetch(url,options)
        .then(res => res.json())
        .then(json => console.log(json.results) )
        .catch(err => console.error('error:' + err));


})

*/