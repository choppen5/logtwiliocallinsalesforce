# logtwiliocallinsalesforce

1.  SFDC: create a token in Setup > My Personal > Tokens
2.  Add your sfdc email login,  and token + password to sfdc.js
3.  Add a field in Salesforce on the Task object: RecordingURL
4.  Create some Twiml that does a callback to this code at /logcall when a call is complete. For example

<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Dial action="https://yourlocalngrokhost.ngrok.io/logcall" record="record-from-answer">+1-415-333-44444</Dial>
</Response>
