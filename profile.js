var connection = require('./../config');
var express=require('express');
var router=express.Router();
//user_id will come from session value
module.exports.register=function(req,res){
	var user_id=req.body.user_id;
	connection.query("select user_type,email,phone,age,gender,username from login where user_id=?",[user_id],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:errormain});}
		else{
			if(resultmain[0].user_type==1){
				connection.query("select experience,qualification,specialization from doctor where user_id_ref=?",[user_id],function(error,result,field){
					if(error){
						res.json({message:error});
					}
					else{
						message:result
					}
				})
			}
			res.json({
			status:true,
			message:resultmain});
		}
	});
}