var express = require('express');
var bodyParser = require('body-parser');
var app = express().use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var conn = require('./sfdc.js').conn;  //logs into salesforce

app.post('/logcall', function (req, res) {

    conn.sobject("Task").create(
        { Subject: 'Call to ' + req.body.To,
          RecordingURL__c:  req.body.RecordingUrl
        }
    ); //no error checking!
  res.sendStatus(200);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
