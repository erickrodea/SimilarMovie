// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/movie/561?api_key=ade17eed9d70b9a469535858ce186094&language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUxN2VlZDlkNzBiOWE0Njk1MzU4NThjZTE4NjA5NCIsInN1YiI6IjY1NzliNGQ2ZWM4YTQzMDExYTNhZjc0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w9onnPn6ncV4Vfg9jaQkWS5R6s8_zwculWSCS2i8z_k'
//   }
// };

// fetch(url)
//   .then(res => res.json())
//   .then(json => console.log(json))
//     .catch(err => console.error('error:' + err));

   
    
const fetch = require('node-fetch');
const Movies = (movietitle, callback) => {
    const url = 'https://api.themoviedb.org/3/search/movie?query='+movietitle+'&include_adult=false&api_key=ade17eed9d70b9a469535858ce186094&language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUxN2VlZDlkNzBiOWE0Njk1MzU4NThjZTE4NjA5NCIsInN1YiI6IjY1NzliNGQ2ZWM4YTQzMDExYTNhZjc0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w9onnPn6ncV4Vfg9jaQkWS5R6s8_zwculWSCS2i8z_k'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
    
}

module.exports = Movies;