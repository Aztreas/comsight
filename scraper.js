console.log(`yeet`)

var Twit = require('twit'); //import statement

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

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database

  var companyName = answer
  console.log(companyName)

  var parameters = {
    q: 'banana since:2016-07-11',
    count: 10
  };

  T.get('search/tweets', parameters, callBack);

  function callBack(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++){
      console.log(tweets[i].text);
    }
};

  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
});
