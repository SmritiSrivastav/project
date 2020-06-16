var connection = require('./../config');
var express=require('express');
var router=express.Router();
//user_id will come from session value
module.exports.register=function(req,res){
	var user_id=req.body.user_id;
	//var user_id=req.session.user_id;
	connection.query("insert into login (email,phone,age,gender,username) values(?,?,?,?) where user_id=?",[req.body.email,req.body.phone,req.body.age,req.body.gender,req.body.username,user_id],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:errormain});}
		else{
			if(resultmain[0].user_type==1){
				connection.query("insert into doctor (experience,qualification,specialization) values (?,?,?) where user_id_ref=?",[req.body.experience,req.body.qualification,req.body.specialization,user_id],function(error,result,field){
					if(error){
						res.json({message:error});
					}
				})
			}
			res.json({
			status:true,
			message:"Profile Editied"});
		}
	});
}