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

// * `do-what-it-says`
