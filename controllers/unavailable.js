var connection = require('./../config');
var express=require('express');
var router=express.Router();
//doctor_id will come from session value
module.exports.unavailable=function(req,res){
	if(req.session.user_id){
	var doctor_id=req.session.user_id;
	
	connection.query("insert into unavailable (doctor_id,date,details) values (?,?,?)",[doctor_id,req.body.date,req.body.details],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:errormain});}
		else{
			res.json({
			status:true,
			message: 'Value Saved !!'});
		}
	});
}
else{
	res.json({message : "Please login"});
}
}