console.log("loading");
var https = require('https');
var moment = require('moment');
var newoauthTimeStamp = moment().unix();
console.log(newoauthTimeStamp+10000);
var OAuth = require('OAuth');


var Key = 'bb7a1630-d267-4729-a18a-646670e175f2';//'your Twitter application consumer key',
var Secret = 'iV7bGo3cMN1XwqsCkKtlUxOYa7ldLUDylO5';//'your Twitter application secret',
var token = '076df8b1-8371-4b58-861b-c1650bf0bcfd'; //'your user token for this app',
var secret = 'djzEFVE9bxK4aBdGF76V44O9QgfMPFZkXVI'; //  'your user secret for this app' 

var oauth = new OAuth.OAuth(
  'https://connectapi.garmin.com/oauth-service/oauth/request_token',
  'https://connectapi.garmin.com/oauth-service/oauth/access_token',
  Key,
  Secret,
  '1.0',
  null,
  'HMAC-SHA1'
);

oauth.get(
  //'https://healthapi.garmin.com/wellness-api/rest/epochs?uploadStartTimeInSeconds=1542978000&uploadEndTimeInSeconds=1543064000',
 'https://healthapi.garmin.com/wellness-api/rest/activities?uploadStartTimeInSeconds=1542870000&uploadEndTimeInSeconds=1542891600',
 // 'https://connect.garmin.com/proxy/activitylist-service/activities/thillslug?start=1&limit=10',
 // https://api.twitter.com/1.1/trends/place.json?id=23424977,
  token,
  secret,
  function (error, data, response){
    if (error) console.error(error);
    console.log(data);
    data = JSON.parse(data);
    console.log(data);
    console.log(JSON.stringify(data, 0, 2));
});