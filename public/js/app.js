const userInput = document.getElementById('userInput');
const submit = document.getElementById('submit');
const message1 = document.querySelector('#message1');
const display = document.getElementById('display');

// Add an event listener to the submit button
submit.addEventListener('click', async (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Clear the existing content in the 'display' element
    display.innerHTML = "";

    try {
        // Get the user-inputted movie title
        const movieTitle = userInput.value;

        // Make an asynchronous request to the server's API for similar movies
        const response = await fetch(`http://localhost:3000/similar?movie=${movieTitle}`);
        // Parse the response as JSON
        const data = await response.json();

        // Check for errors in the fetched data
        if (data.error) {
            // Display an error message if there's an issue
            message1.textContent = data.error;
        } else {
            // Create a container for the searched movie title
            const titleContainer = document.createElement('div');
            

            // Create an h2 element for the title
            const titleElement = document.createElement('h2');
            // Set the text content to include the searched movie title
            titleElement.textContent = `Results for: ${movieTitle}`;
            // Append the title element to the title container
            titleContainer.appendChild(titleElement);

            // Append the title container to the 'display' element
            display.appendChild(titleContainer);

            // Display each similar movie
            data.similar.forEach((title, i) => {
                // Create a new HTML section element
                const container = document.createElement('section');
                // Add a CSS class to the container
                container.className = 'similar-container';

                // Create an image element
                const imageElement = document.createElement('img');
                // Set the image source and alt text
                imageElement.src = data.images[i];
                imageElement.alt = title;
                // Append the image to the container
                container.appendChild(imageElement);

                // Create a paragraph element for the title
                const titleElement = document.createElement('p');
                // Set the text content of the title
                titleElement.textContent = title;
                // Append the title to the container
                container.appendChild(titleElement);

                // Append the container to the 'display' element
                display.appendChild(container);
            });
        }
    } catch (error) {
        // Log and handle errors as needed
        console.error('Error:', error);
    }
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