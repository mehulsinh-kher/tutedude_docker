var express = require('express');
var app = express();

app.set('view engine', 'ejs');

const URL = process.env.BACKEND_URL || 'http://localhost:8000/api';

const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));

app.get('/', async function(req, res) {
    const options = {
        method: 'GET'  
    };
    try {
        let response = await fetch(URL, options);
        let data = await response.json();
        
        res.render('index', {
            From: data.From || 'Unknown',
            via: data.via || 'Unknown',
            message: data.message || 'No message',
            status: data.status || 'Active'
        });

    } catch (error) {
        console.error('Error fetching data:', error);

        res.render('index', {
            From: 'Backend Offline',
            via: 'N/A',
            message: 'Could not connect to Flask backend.',
            status: 'Error'
        });
    }
});

app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});