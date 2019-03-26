// Required packages, files and keys

require("dotenv").config();

var moment = require("moment");

var fs = require("fs");

var axios = require("axios");

var keys = require("./keys.js");

// Global variables

var action = process.argv[2];
var toSearch = process.argv.slice(3).join(" ");
var divider = "\n------------------------------------------------------------\n\n";

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
    var artist = toSearch;
    var bandsUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(bandsUrl).then(
        function (response) {
            var concerts = response.data;
            for (let i = 0; i < concerts.length; i++) {
                var concertData = [
                    "Venue Name: " + concerts[i].venue.name,
                    "Venue Location: " + concerts[i].venue.city,
                    "Date of Event: " + moment(concerts[i].datetime).format("L"),
                    "----------------------------------------------------",
                ].join("\n\n");

                console.log(concertData);
                fs.appendFile("log.txt", concertData + divider, function(err) {
                    if (err) throw err;
                  })
            }
        }
    )
}

// If the "song" function is called...

function song() {
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify(keys.spotify);
    var song = toSearch;
    spotify
        .search({ type: 'track', query: song, limit: 1 })
        .then(function (response) {
            var songData = [
                "Band/Artist: " + response.tracks.items[0].artists[0].name,
                "Song's name: " + response.tracks.items[0].name,
                "Preview link: " + response.tracks.items[0].external_urls.spotify,
                "Album's name: " + response.tracks.items[0].album.name,
            ].join("\n\n");
           
            console.log(songData)
            fs.appendFile("log.txt", songData + divider, function(err) {
                if (err) throw err;
              })
        })
        .catch(function (err) {
            console.log(err);
        });
}

// If the "movie" function is called...

function movie() {
    var movie = toSearch;

    var moviesUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    axios.get(moviesUrl).then(
        function (response) {
            var movieData = [
                "Title: " + response.data.Title,
                "Came out in: " + response.data.Year,
                "IMDB's rating: " + response.data.imdbRating,
                "Rotten Tomatoes' rating: " + response.data.Ratings[1].Value,
                "The movie was produced in: " + response.data.Country,
                "The languages are: " + response.data.Language,
                "Plot: " + response.data.Plot,
                "Actors: " + response.data.Actors,
            ].join("\n\n");

            console.log(movieData);
            fs.appendFile("log.txt", movieData + divider, function(err) {
                if (err) throw err;
              })
        }
    )
}

// If the "doWhat" function is called...

function doWhat() {
    fs.readFile('random.txt', 'UTF-8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        var dataArr = data;
        dataArr = data.split(",");
        var textCommand = dataArr[0];
        var textQuery = dataArr[1];
        textQuery = textQuery.replace(/"|'/gi, '');
        toSearch = textQuery;
        switches(textCommand);
    })
}
