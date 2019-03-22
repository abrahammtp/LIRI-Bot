// Required packages, files and keys

require("dotenv").config();

// var fs = require("fs");

var axios = require("axios");

var keys = require("./keys.js");

// Global variables

// var bandsUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

var action = process.argv[2];
var toSearch = process.argv;

// We are now going to create switch-case statements for each thing to search (movies, bands, songs, concerts)

switch (action) {
// case "<artist/band name here>":
//     concert();
//     break;

case "spotify-this-song":
    song();
    break;

case "movie-this":
    movie();
    break;

// case "do-what-it-says":
//     doWhat();
//     break;
}

// If the "concert" function is called...

// If the "song" function is called...

function song() {
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify(keys.spotify);
    var song = "";
    for (let i = 3; i < toSearch.length; i++) {
        if (i > 3 && i <toSearch.length) {
            song = song + "+" + toSearch[i];
    } else {
            song += toSearch[i];
        }
    }
    spotify
        .search({ type: 'track', query: song })
        .then(function(response) {
            console.log(response.tracks.items.album.artists[0].name);
            console.log(response.tracks.items.album.album_type.name);
            console.log(response.tracks.items.album.album_type.external_urls.spotify);  
    })
        .catch(function(err) {
            console.log(err);
        });
}

// If the "movie" function is called...

function movie() {
    var movie = "";

    for (let i = 3; i < toSearch.length; i++) {
        if (i > 3 && i < toSearch.length) {
            movie = movie + "+" + toSearch[i];
        }
        else {
            movie += toSearch[i];
        }
    }

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



