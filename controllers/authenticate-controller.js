var connection = require('./../config');
var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();

async function doctor(user_id,callback){
		await connection.query('select doctor_id from doctor where user_id_ref=?',[user_id],function(errord,resultsd,fieldsd){
					if(errord){
						return;
					}
			else{
				return callback(resultsd[0].doctor_id);
			}
				});
				
}

module.exports.authenticate=async function(req,res){
	var choice=req.body.choice;
    var username=req.body.username;
    var password=req.body.password;
	var user_id;
	var sql='SELECT user_id,lastname,firstname,user_type,phone,email FROM login WHERE '+ choice +' = "'+ username+'" and password = "'+password+'";';
    connection.query(sql,function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
			title: error,
            message:"There is something wrong with the query"
            })
      }else{
        if(results.length >0){
			user_id=results[0].user_id;
			req.session.user_id=user_id;
			console.log(user_id);
			if(results[0].user_type==1){
				doctor(user_id, async function(result){
							user_id = await result;
							req.session.user_id=user_id;
							console.log(req.session.user_id);
    //rest of your code goes in here
					});
			//user_id=doctor(user_id);
				
			}	
			//req.session.user_id=user_id;
			//console.log(user_id);
			//console.log(req.session.user_id);
			//req.session.username=results[0].username;
			//req.session.email=results[0].email;
			//req.session.phone=results[0].phone;
				
                res.json({
                    status:true,
                    message:'User authenticated',

                });
            /*}else{
                res.json({
                  status:false,
                  message:"Username and password does not match"
                 });
            }*/
         
        }
       /* else{
          res.json({
              status:false, 			  
            message:"username does not exits "
          });
        }*/
      }
    });
}