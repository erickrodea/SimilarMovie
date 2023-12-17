const path = require('path');
const express = require('express');
const hbs = require('hbs');
const movie = require('./utils/movie.js')

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


//setup static directory
app.set('view engine', 'hbs');
app.set('views',viewsPath)
app.use(express.static(publicDirectoryPath));
hbs.registerPartials(partialsPath)


app.get('', (req, res) => {
    res.render('index', {
        title: 'Movies',
        name:'Erick Rodea'
    })
   
    
})
app.get('/similar', async(req, res) => {

   if (!req.query.movie) {
        return res.send({
            error: 'You must provide an movie!'
        })
    }
    movie(req.query.movie, (err, data) => {
        if (err) {
            return res.send(err)
        } else {
            res.send(data);
        }
    })
})




app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})