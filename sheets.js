var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');
 
// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1avezQT-LYwiHfbN65AuTWqndaJOVStYToE10AHD9cx4');
 
// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function (err) {
 
  // Get all of the rows from the spreadsheet.
  doc.getRows(1, function (err, rows) {
    //console.log(rows);
    console.log(rows.length);
    console.log(rows[0].lotarea);
  });
});