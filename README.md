# Node js - Express API for Basic Hospital Website

The API is designed using Node js-Express and also includes the work of sessions. Use this with frontend and your entire website will be ready to go.
I created it for my project and am sharing it to help the ones who are thinking of similiar work pieces.

The database structure is also there in the pdf file.
Setup your own config.js file like : 

# config.js

var mysql      = require('mysql');

var connection = mysql.createConnection({

  host     : 'IP address here',
  
  user     : 'user details of database here',
  
  password : 'password for user',
  
  database : 'database name'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection;


The node modules installe for the same are there in the file named node_modules.zip


The entire code is also available in with_session.zip file.
