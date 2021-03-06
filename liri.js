require('dotenv').config()
var Twitter = require('twitter');
var userInput = process.argv[2]

var twitterKey = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// * `my-tweets`
if (userInput === 'my-tweets') {
  
  var params = { screen_name: 'therock' };
  twitterKey.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (error) {
      console.log(error);
    }
    else {
      for (var i = 0; i < 5; i++)
        console.log('Rock Tweet: ' + tweets[i].text + '\n-----------------')
    }
  })
}

// * `spotify-this-song`

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

var userSongChoice = process.argv[3]

if (userInput === 'spotify-this-song'){
  spotify.search({ type: 'track', query: userSongChoice }, function (err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  else {
    console.log('Artist: ' + data.tracks.items[0].artists[0].name);
    console.log('Song Title: ' + data.tracks.items[0].name)
    console.log('Spotify URL: ' + data.tracks.items[0].external_urls.spotify)
  }
  })
}
// * `movie-this`
if (userInput === 'movie-this'){
var request = require('request');
var userMovieInput = process.argv[3]
request('https://www.omdbapi.com/?t=' + userMovieInput + '&y=&plot=short&apikey=trilogy', function (e, response, body) {
  if (e) {
    return console.log('Error occurred: ' + e);
  }
  console.log('Title: ' + JSON.parse(body).Title + '\n-----------------');
  console.log('Year the movie came out: ' + JSON.parse(body).Year + '\n-----------------');
  console.log('IMBD Rating of the movie: ' + JSON.parse(body).imdbRating + '\n-----------------');
  console.log('Rotten Tomatoes Rating of the movie: ' + JSON.parse(body).Ratings[1].Value + '\n-----------------');
  console.log('Country where the movie was produced: ' + JSON.parse(body).Country + '\n-----------------');
  console.log('Language of the movie: ' + JSON.parse(body).Language + '\n-----------------');
  console.log('Plot of the movie: ' + JSON.parse(body).Plot + '\n-----------------');
  console.log('Actors in the movie: ' + JSON.parse(body).Actors + '\n-----------------');
})
}

// * `do-what-it-says`
