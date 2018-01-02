
var Twit = require('twit'); //import statement
var jsonfile = require('jsonfile')

//optional: var config = require('./config');
// Var T = new Twit(config);
// way to store keys and tokens in a seperate config file for privacy
var T = new Twit({
  consumer_key:         '97u1KkUciqd6cl2V6gQZP9U3z',
  consumer_secret:      'zUUFdpa27lr51Kc8qrieU2aH7t2mVfqgIQF4Fw9e2IxqtEjikh',
  access_token:         '2480891532-9bn2YMeXFSPgNSdFF1jJGOxbaObWmpew9dhYfSc',
  access_token_secret:  'WTmxQOq6WiLkmF6dKy43BvXRMjCn4ZqOf46kes4tEhp2m',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  // remember to take out the keys and tokens, place your own
});


var parameters = {
  q: `banana since:2016-07-11`,
  count: 10
};

T.get('search/tweets', parameters, callBack);

var texts = `hey hey`;
function callBack(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++){
    texts += `${tweets[i].text}`;
  };
  var file = '/Users/Aztreas/Eric_side_projects/comsight/data.json';
  var obj = texts;

  jsonfile.writeFile(file, obj, function (err) {
    console.error(err)
  });

};
