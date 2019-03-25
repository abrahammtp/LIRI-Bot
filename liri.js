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
            console.log("Band/Artist: " + response.tracks.items[0].artists[0].name);
            console.log("Song's name: " + response.tracks.items[0].name);
            console.log("Preview link: " + response.tracks.items[0].external_urls.spotify);
            console.log("Album's name: " + response.tracks.items[0].album.name); 
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
        if (err) {
            return console.log(err);
        }
        var dataArr = data;
        var dataArr = data.split(",");
        console.log(dataArr);
        var textCommand = dataArr[0]
        var toSearch = dataArr[1];
        console.log(textCommand);
        console.log(toSearch);
        song = toSearch;
        movie = toSearch;
        artist = toSearch;
        switches(textCommand);
    })
}

