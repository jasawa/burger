
// Set up MySQL connection.
var mysql = require("mysql");
var connection;

// added to connect database to heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });
};

// Make connection.
/*connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});*/

connection.connect();

// Export connection for the ORM to use.
module.exports = connection;
