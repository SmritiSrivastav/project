var connection = require('./../config');
var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
module.exports.authenticate=function(req,res){
	var choice=req.body.choice;
    var username=req.body.username;
    var password=req.body.password;
	var user_id;
	var sql='SELECT user_id,username,user_type,phone,email FROM login WHERE '+ choice +' = "'+ username+'" and password = "'+password+'";';
    connection.query(sql,function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
			title: error,
            message:"There is something wrong with the query"
            })
      }else{
        if(results.length >0){
			if(results[0].user_type==1){
				connection.query('select doctor_id from doctor where user_id_ref=?',[results[0].user_id],function(errord,resultsd,fieldsd){
					if(errord){
					res.json({
				status:false,
				title: errord,
				message:"There is something wrong with the query"
            });	
					}
			else{
				user_id=resultsd[0].doctor_id;
			}
				});
				
				
			}
			else{
				user_id=results[0].user_id;
			}
			//Creation of sessions using cookie-parser
			req.session.user_id=user_id;
			req.session.username=results[0].username;
				
                res.json({
                    status:true,
                    message:'User authenticated',

                });
         
        }
      }
    });
}
