var connection = require('./../config');
var express=require('express');
var router=express.Router();

function save_doctor(user_id,specialization,experience,qualification,department_id){
				  connection.query('Insert into doctor (user_id_ref,specialization,qualification,department_id,experience) values (?,?,?,?,?)',[user_id,specialization,qualification,department_id,experience],function(errord,resultsd,fieldsd)
				 {if (errord) {
        console.log(errord);
			  return false;}
			  else{ return true;}
			  });
			 
}

module.exports.register=function(req,res){
	var email=req.body.email;
	var phone=req.body.phone;
	var type=req.body.type;
	var username=req.body.username;
	var user_id;
	var specialization=req.body.specialization;
	var qualification=req.body.qualification;
	var experience=req.body.experience;
	var department_id=req.body.department_id;
	connection.query("select user_id from login where email=? and phone=?",[email,phone],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:errormain});}
		if(resultmain.length == 0){
    connection.query('INSERT into login (firstname,lastname,phone,password,email,user_type,age,gender,address) values (?,?,?,?,?,?,?,?,?)',[req.body.firstname,req.body.lastname,phone,req.body.password,email,type,req.body.age,req.body.gender,req.body.address] ,function (error, results, fields) {
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
				  var r=save_doctor(user_id,specialization,experience,qualification,department_id);
				  console.log(r);
			  }
				  //console.log("HIIi"); 
			  }
			  });
          res.json({
            status:true,
            message:'User registered sucessfully'
        });
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