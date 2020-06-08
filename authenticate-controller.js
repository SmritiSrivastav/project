var connection = require('./../config');
var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
module.exports.authenticate=function(req,res){
	var choice=req.body.choice;
    var username=req.body.username;
    var password=req.body.password;
	var sql='SELECT * FROM login WHERE '+ choice +' = "'+ username+'" and password = "'+password+'";';
	console.log(sql);
    connection.query(sql,function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:"There is something wrong with the query"
            })
      }else{
        if(results.length >0){
			app.use(cookieParser());
			app.use(session({results}));
            if(password==results[0].password){
				
                res.json({
                    status:true,
                    message:'User authenticated',
					/*Object.keys(result).forEach(function(key) {
      var row = result[key];
      console.log(row.name)
    }*/
                })
            }else{
                res.json({
                  status:false,
                  message:"Username and password does not match"
                 });
            }
         
        }
        else{
          res.json({
              status:false, 			  
            message:"username does not exits "
          });
        }
      }
    });
}