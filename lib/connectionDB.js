var mysql = require('mysql');

var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'cookie',
  database : 'MyFort'
});

con.connect(function(err) {
  if (err) throw err;
  con.query('SELECT * FROM user', function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
