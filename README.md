# LIRI-Bot
LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node application that takes in parameters and gives the user back data. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies. In this application we are going to use different technologies, such as:

  * Node.js
  * npm
  * axios
  * Spotify API
  * Bands in Town API
  * OMDB API
  
Now, we are going to describe how this application works. For that, we are going to describe what we are going to be looking for use arguments in the command line, and we are also going to attach gifs to show how the application works.

# Spotify

We are going to use the Spotify API to request some information, and this is going to be done in the terminal/command line. We are going to use the command spotify-this-song followed by the name of the song. Once we decide what song we want to search, we type that in the command line and we the following information will be displayed: 

    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from
    
Here we have a gif of how this works:

![spotify](https://user-images.githubusercontent.com/46465000/55038757-4afba400-4ff8-11e9-9b74-4d0a98e222e5.gif)
    
# OMDB

We are going to use the OMDB API to request information regarding a movie of our choice, using the terminal/command line. We are going to use the command movie-this followed by the name of the movie. The information to be displayed will be:

     * Title of the movie
     * Year the movie came out     
     * IMDB Rating of the movie     
     * Rotten Tomatoes Rating of the movie
     * Country where the movie was produced
     * Language of the movie
     * Plot of the movie
     * Actors in the movie
     
Here we have a gif of how this works:

![movie](https://user-images.githubusercontent.com/46465000/55038664-02dc8180-4ff8-11e9-8feb-4fcf2fc36ecd.gif)
     
# Bands in Town

We are going to use the Bands in Town API to request information regarding a band or artist of our choice, and we are going to be able to access information regarding that band/artist concerts. We are going to use the command concert-this followed by the name of the band/artist and this is going to be done in the terminal/command line. The information to be displayed will be:

     * Name of the venue
     * Venue location
     * Date of the Event ("MM/DD/YYYY")
     
 Here we have a gif of how this works:
 
 ![bands](https://user-images.githubusercontent.com/46465000/55038702-1b4c9c00-4ff8-11e9-9c9a-972585c78bce.gif)
     
 # do-what-it-says
 
 With do-what-it-says we are going to make use of all of the other API's. This function is going to run by reading the text on the random.txt file, allowing us a different way to access the same information.
 
 Here we have a gif of how this works:
 
 
![do-what-it-says](https://user-images.githubusercontent.com/46465000/55038772-56e76600-4ff8-11e9-974c-5ed51965b240.gif)
 
 # log.txt
 
 We are going to use log.txt to store all of our searches, that way we can keep track of them. Each time we run movie-this, spotify-this-song, concer-this or do-what-it-says the information is going to be printed on log.txt
 
 Here we have a gif of how this works:
 
 
![log](https://user-images.githubusercontent.com/46465000/55039076-2e13a080-4ff9-11e9-806a-cdad279d8896.gif)
 
 
 This is a link to my personal portfolio, I will be honored if you would take a look at it!
 https://abrahammtp.github.io/Updated-Portfolio/
