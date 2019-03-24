// Required packages, files and keys

require("dotenv").config();

var fs = require("fs");

var axios = require("axios");

var keys = require("./keys.js");

// Global variables

var action = process.argv[2];
// var toSearch = process.argv;

// We are now going to create switch-case statements for each thing to search (movies, bands, songs, concerts)
function switches(action) {
    switch (action) {
        case "concert-this":
            concert();
            break;
        
        case "spotify-this-song":
        song();
        break;
        
        case "movie-this":
        movie();
        break;
        
        case "do-what-it-says":
            doWhat();
            break;
    }
}

switches(action);

// If the "concert" function is called...

function concert() {
    var artist = process.argv.slice(3).join(" ");
    var bandsUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    // console.log(bandsUrl);

    axios.get(bandsUrl).then(
        function(response) {
            console.log("Venue Name: " + response.data[1].venue.name);
            console.log("Venue Location: " + response.data[1].venue.city + ", " + response.data[1].venue.region);
            console.log("Date of Event: " + response.data[1].datetime);
        }
    )
}

// If the "song" function is called...

function song() {
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify(keys.spotify);
    var song = process.argv.slice(3).join(" ");
    spotify
        .search({ type: 'track', query: song, limit: 1 })
        .then(function(response) {
            console.log(response);
            // console.log(response.tracks.items.album);
            // console.log(response.tracks.items.album.artists[0].name);
            // console.log(response.tracks.items.album.album_type.name);
            // console.log(response.tracks.items.album.album_type.external_urls.spotify);  
    })
        .catch(function(err) {
            console.log(err);
        });
}

// If the "movie" function is called...

function movie() {
    var movie = process.argv.slice(3).join(" ");

    var moviesUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    console.log(moviesUrl);


    axios.get(moviesUrl).then(
        function(response) {
            console.log("Title: " + response.data.Title);
            console.log("Came out in: " + response.data.Year);
            console.log("IMDB's rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes' rating: " + response.data.Ratings[1].Value);
            console.log("The movie was produced in: " + response.data.Country);
            console.log("The languages are: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        }
    )
}

// If the "doWhat" function is called...
// read command from txt file
// parse command from string
// pass command into switches()
function doWhat() {
    fs.readFile('random.txt', 'UTF-8', function(err, data) {
        console.log(data);
        var dataArr = data.split(', ');
        var txtCommand = dataArr[0];
        // dataArr.unshift("node", 'liri.js');
        toSearch = dataArr;
        switches(txtCommand);
    })
}

