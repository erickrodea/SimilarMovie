const userInput = document.getElementById('userInput');
const submit = document.getElementById('submit');
const message1 = document.querySelector('#message1');
const list = document.getElementById('grid');

const fetchSimilarMovies = async (movieTitle) => {
    try {
        const response = await fetch(`http://localhost:3000/similar?movie=${movieTitle}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching similar movies:', error);
        throw error;
    }
};

const createMovieContainer = (title, imageUrl) => {
    const container = document.createElement('section');
    container.className = 'similar-container';

    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.alt = title;
    container.appendChild(imageElement);

    const titleElement = document.createElement('p');
    titleElement.textContent = title;
    container.appendChild(titleElement);

    return container;
};

const displaySimilarMovies = async () => {
    list.innerHTML = "";

    try {
        const movieTitle = userInput.value;
        const data = await fetchSimilarMovies(movieTitle);

        if (data.error) {
            message1.textContent = data.error;
        } else {
            data.similar.forEach((title, i) => {
                const container = createMovieContainer(title, data.images[i]);
                list.appendChild(container);
            });
        }
    } catch (error) {
        // Handle errors as needed
    }
};

submit.addEventListener('click', (e) => {
    e.preventDefault();
    displaySimilarMovies();
});

//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUxN2VlZDlkNzBiOWE0Njk1MzU4NThjZTE4NjA5NCIsInN1YiI6IjY1NzliNGQ2ZWM4YTQzMDExYTNhZjc0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w9onnPn6ncV4Vfg9jaQkWS5R6s8_zwculWSCS2i8z_k'
//         }
//     };

//     fetch(url,options)
//         .then(res => res.json())
//         .then(json => { const movieID = (json.results[0].id) })
//         .catch(err => console.error('error:' + err));


//     const url2 = 'https://api.themoviedb.org/3/movie/' + movieID + '/similar?language=en-US&page=1';
//     const options2 = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUxN2VlZDlkNzBiOWE0Njk1MzU4NThjZTE4NjA5NCIsInN1YiI6IjY1NzliNGQ2ZWM4YTQzMDExYTNhZjc0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w9onnPn6ncV4Vfg9jaQkWS5R6s8_zwculWSCS2i8z_k'
//         }
//     };

//     fetch(url2, options2)
//         .then(res => res.json())
//         .then(json => console.log(json))
//         .catch(err => console.error('error:' + err));
// })
  
  
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