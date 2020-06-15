var connection = require('./../config');
var express=require('express');
var router=express.Router();

module.exports.register=function(req,res){
	var email=req.body.email;
	var phone=req.body.phone;
	var type=req.body.type;
	var username=req.body.username;
	var user_id;
	connection.query("select user_id from login where email=? and phone=?",[email,phone],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:errormain});}
		if(resultmain.length == 0){
    connection.query('INSERT into login (username,phone,password,email,user_type,age,gender) values (?,?,?,?,?,-1,"NA")',[req.body.username,phone,req.body.password,email,type] ,function (error, results, fields) {
      if (error) {
        res.json({
           status:false,
            message:error,
			
        });
      }
	  else{
		  connection.query('Select user_id from login where email=? and phone=?',[email,phone],function(errorm,resultsm,fieldsm){if (error) {
        res.json({
           status:false,
            message:error,
			
        });
      }
			  else{user_id=resultsm[0].user_id;
			  //console.log(user_id);
			  //console.log(type);
			  if (type==1){
				  connection.query('Insert into doctor (user_id_ref,doctor_name,speciality,qualification) values (?,?,NULL,NULL)',[user_id,username],function(errord,resultsd,fieldsd){if (error) {
        res.json({
           status:false,
            message:errord
			
			  });}
			  });
			  } 
			  }
			  });
          res.json({
            status:true,
            message:'User registered sucessfully'
        })
      }
    });
		}
		else{
			res.json({
			status:false,
			message:"Email or phone number aldready exists."});
		}
	});
}