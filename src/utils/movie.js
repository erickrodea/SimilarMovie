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

   
    
    
// We import the 'node-fetch' library, which helps us fetch data from a web API.
const fetch = require('node-fetch');

// We define a function called 'Movies' that searches for movies and finds similar ones.
// It takes the movie title and a callback function as parameters.
const Movies = (movietitle, callback) => {
    
    // We construct the URL for the first API call to search for movies using the provided title.
    const url = 'https://api.themoviedb.org/3/search/movie?query=' + movietitle + '&include_adult=false&api_key=ade17eed9d70b9a469535858ce186094&language=en-US&page=1';

    // We set up options for the first API call, specifying that it's a GET request with certain headers.
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUxN2VlZDlkNzBiOWE0Njk1MzU4NThjZTE4NjA5NCIsInN1YiI6IjY1NzliNGQ2ZWM4YTQzMDExYTNhZjc0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w9onnPn6ncV4Vfg9jaQkWS5R6s8_zwculWSCS2i8z_k'
        }
    }

    // We make the first API call using the 'fetch' function, passing in the URL and options.
    // We convert the response to JSON format.
    return fetch(url, options)
        .then(res => res.json())
        .then(json => {
            // Once we get the response, we extract the movie ID of the first result from the search.
            const movieID = json.results[0].id;

            // We construct the URL for the second API call to get similar movies based on the movie ID.
            const url2 = `https://api.themoviedb.org/3/movie/${movieID}/similar?language=en-US&page=1`;

            // We set up options for the second API call, similar to the first one.
            const options2 = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUxN2VlZDlkNzBiOWE0Njk1MzU4NThjZTE4NjA5NCIsInN1YiI6IjY1NzliNGQ2ZWM4YTQzMDExYTNhZjc0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w9onnPn6ncV4Vfg9jaQkWS5R6s8_zwculWSCS2i8z_k'
                }
            };

            // We make the second API call to get similar movies.
            // We convert the response to JSON format.
            fetch(url2, options2)
                .then(res => res.json())
                .then(json => {
                    // We create arrays to store the titles and image URLs of similar movies.
                    const similar = [];
                    const images = [];

                    // We loop through each result from the second API call.
                    json.results.forEach(element => {
                        // We add the title and image URL to the respective arrays.
                        similar.push(element.title);
                        images.push("https://image.tmdb.org/t/p/original/" + element.poster_path);
                    });

                    // We create an object containing the arrays of similar titles and image URLs.
                    const result = {
                        similar: similar,
                        images: images
                    };

                    // We pass the result to the callback function.
                    callback(undefined, result);
                })
                .catch(err => console.error('error' + err));
        })
        .catch(err => console.error('error:' + err));
}

// We export the 'Movies' function so that it can be used in other files.
module.exports = Movies;


// Movies("matrix").then(res=>console.log(res));
