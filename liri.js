require('dotenv').config()
var Twitter = require('twitter');

var spotifyKey = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
}
// * `my-tweets`

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
 
var params = {screen_name: 'dadtellsjokes'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (error) {
    console.log(error);
  }
  console.log(tweets[1].text)
});
// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`
