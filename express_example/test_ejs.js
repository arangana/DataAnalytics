var http = require('http');
var ejs = require('ejs');
var fs = require('fs');
var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');
 
// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1avezQT-LYwiHfbN65AuTWqndaJOVStYToE10AHD9cx4');


var data = [];
 
// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function (err) {
 
  // Get all of the rows from the spreadsheet.
  doc.getRows(1, function (err, rows) {
    //console.log(rows);
    console.log(rows.length);

    for(var i = 0; i < rows.length; i++) {
      var jso = {};
      jso['name'] = rows[i].name;
      jso['email'] = rows[i].email;
      jso['phone'] = rows[i].phone;
      jso['lotarea'] = rows[i].lotarea;
      jso['street'] = rows[i].street;
      jso['lotshape'] = rows[i].lotshape;
      jso['landcontour'] = rows[i].landcontour;
      jso['lotconfig'] = rows[i].lotconfig;
      jso['landslope'] = rows[i].landslope;
      jso['neighborhood'] = rows[i].neighborhood;
      jso['condition1'] = rows[i].condition1;
      jso['condition2'] = rows[i].condition2;
      jso['bldgtype'] = rows[i].bldgtype;
      jso['housestyle'] = rows[i].housestyle;
      jso['overallqual'] = rows[i].overallqual;
      jso['overallcond'] = rows[i].overallcond;
      jso['yearbuilt'] = rows[i].yearbuilt;
      jso['yearremod'] = rows[i].yearremod;
      jso['roofmaterial'] = rows[i].roofmaterial;
      jso['masonarytype'] = rows[i].masonarytype;
      jso['masonaryarea'] = rows[i].masonaryarea;
      jso['exterqual'] = rows[i].exterqual;
      jso['totalbsmtarea'] = rows[i].totalbsmtarea;
      jso['x1stflrarea'] = rows[i].x1stflrarea;
      jso['grlivarea'] = rows[i].grlivarea;
      jso['totrmsabvgrd'] = rows[i].totrmsabvgrd;
      jso['kitchenqual'] = rows[i].kitchenqual;
      jso['fireplaces'] = rows[i].fireplaces;
      jso['garagefinish'] = rows[i].garagefinish;
      jso['garagecars'] = rows[i].garagecars;
      jso['garagearea'] = rows[i].garagearea;
      jso['garagequal'] = rows[i].garagequal;
      jso['garagecond'] = rows[i].garagecond;
      jso['poolarea'] = rows[i].poolarea;
      jso['saletype'] = rows[i].saletype;
      jso['saleprice'] = rows[i].saleprice;
      


      data.push(jso);
}


    //console.log(rows[0].email);
    //console.log(data);
  });
});

/*var jso = {};
jso['id'] = 'A';
jso['name'] = 'Something awesome';

var data = [
  jso,
  { id: 'B', name: 'Very interesting book'},
  { id: 'C', name: 'Yet another product'}
]*/

http.createServer(function(req,res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  //since we are in a request handler function
  //we're using readFile instead of readFileSync
  if (req.url == '/buy.html') {
    fs.readFile('buy.html', 'utf-8', function(err, content) {
      if (err) {
        res.end('error occurred');
        return;
      }

      var renderedHtml = ejs.render(content, {data: data});  //get redered HTML code
      res.end(renderedHtml);
    });
  }
  /*else if (req.url == '/sell') {
    fs.readFile('sell.html', 'utf-8', function(err, content) {
      if (err) {
        res.end('error occurred');
        return;
      }

      var renderedHtml = ejs.render(content);  //get redered HTML code
      res.end(renderedHtml);
    });
  }*/
  else {
    fs.readFile('dashboard.html', 'utf-8', function(err, content) {
      if (err) {
        res.end('error occurred');
        return;
      }

      var renderedHtml = ejs.render(content);  //get redered HTML code
      res.end(renderedHtml);
    });
  }
}).listen(4000);



