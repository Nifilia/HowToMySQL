var mysql = require('mysql2');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "qwerty",
	database: "mydb"
});

con.connect(function(err){
	if(err) throw err;
	console.log("Connected!");
	con.query("SELECT * FROM customers ORDER BY name", function(err, result){
		if(err) throw err;
		console.log(result);
	})
})