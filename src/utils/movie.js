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
    const url = 'https://api.themoviedb.org/3/search/movie?query=' + movietitle + '&include_adult=false&api_key=ade17eed9d70b9a469535858ce186094&language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUxN2VlZDlkNzBiOWE0Njk1MzU4NThjZTE4NjA5NCIsInN1YiI6IjY1NzliNGQ2ZWM4YTQzMDExYTNhZjc0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w9onnPn6ncV4Vfg9jaQkWS5R6s8_zwculWSCS2i8z_k'
        }
    }

    return fetch(url, options)
        .then(res => res.json())
        .then(json => {
      const movieID = json.results[0].id
            const url2 = `https://api.themoviedb.org/3/movie/${movieID}/similar?language=en-US&page=1`;
            const options2 = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUxN2VlZDlkNzBiOWE0Njk1MzU4NThjZTE4NjA5NCIsInN1YiI6IjY1NzliNGQ2ZWM4YTQzMDExYTNhZjc0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w9onnPn6ncV4Vfg9jaQkWS5R6s8_zwculWSCS2i8z_k'
                }
            };
            fetch(url2, options2)
                .then(res => res.json())
                .then(json => {
                    const similar = [];
                    const images = [];
                    json.results.forEach(element => {
                        similar.push(element.title);
                        images.push("https://image.tmdb.org/t/p/original/" + element.poster_path);
                    });
                    const result = {
                        similar: similar,
                        images: images
                    };
                    callback(undefined, result);
                })
                .catch(err => console.error('error' + err));
        }
        )
        .catch(err => console.error('error:' + err));
}

// Movies("matrix").then(res=>console.log(res));
module.exports = Movies;