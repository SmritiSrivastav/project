var connection = require('./../config');
var express=require('express');
var router=express.Router();

module.exports.forgotpass=function(req,res){

	var sql= "update login set password = " +req.body.new_pass+"where"+ req.body.choice+" = " + req.body.username;
	connection.query(sql,function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:"Some error occured!!"});}
		else{
			res.json({
			status:true,
			message: "Password Reset"});
		}
	});
}