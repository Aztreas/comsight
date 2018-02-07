
var jsonfile = require('jsonfile')
var Twit = require('twit'); //import statement

//optional: var config = require('./config');
// Var T = new Twit(config);
// way to store keys and tokens in a seperate config file for privacy
var T = new Twit({
  consumer_key:         'your key',
  consumer_secret:      'your key',
  access_token:         'your key',
  access_token_secret:  'your key',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  // remember to take out the keys and tokens, place your own
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What company would you like to analyze? ', (answer) => {
  // TODO: Log the answer in a database

  var companyName = answer
  console.log(companyName)

  var texts = ``
  var parameters = {
    q: `${answer} since:2016-07-11`,
    count: 100
  };

  T.get('search/tweets', parameters, callBack);

  function callBack(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++){
      texts = texts + `    ` + `${tweets[i].text}`;
    };

    var file = '/Users/Aztreas/Eric_side_projects/comsight/data.json';
    var obj = texts;

    jsonfile.writeFile(file, obj, function (err) {
      console.error(err)
    });
};

  console.log(
    `Thank you for using comsight. To interpret your data, please enter the following into your terminal with your IBM Cloud credentials:

    curl -X POST --user "{username}":"{password}" \
--header "Content-Type: application/json" \
--data-binary @{path_to_file}tone.json \
"https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21"`);
  rl.close();
});
