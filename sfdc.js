
var jsforce = require('jsforce'); //connect to SFDC via REST
var conn = new jsforce.Connection();

conn.login(<salesforceusername@yourmail.com>, <yoursalesforceauthtokenthenaddyourpassword>, function(err, res) {
  if (err) { return console.error(err); }
});

module.exports.conn = conn;
