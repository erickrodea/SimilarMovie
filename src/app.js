// Require necessary modules
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const movie = require('./utils/movie.js')

// Create an Express application
const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup static directory to serve
app.set('view engine', 'hbs'); // Set the view engine to handlebars
app.set('views', viewsPath) // Set the views directory path
app.use(express.static(publicDirectoryPath)); // Serve static files from the public directory
hbs.registerPartials(partialsPath) // Register partials for handlebars

// Define a route for the root page
app.get('', (req, res) => {
    // Render the 'index' view and pass data to it
    res.render('index', {
        title: 'Movies', // Set the title
        name: 'Erick Rodea' // Set the name
    })
})

// Define a route for the '/similar' endpoint
app.get('/similar', async (req, res) => {
    // Check if the 'movie' query parameter is provided
    if (!req.query.movie) {
        // Send an error response if 'movie' is not provided
        return res.send({
            error: 'You must provide a movie!'
        })
    }
    
    // Call the 'movie' function from the 'utils' module passing the movie title
    movie(req.query.movie, (err, data) => {
        if (err) {
            // Send an error response if there's an issue with fetching similar movies
            return res.send(err)
        } else {
            // Send the fetched similar movies data as the response
            res.send(data);
        }
    })
})

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is up on http://localhost:${port}/`);
})
