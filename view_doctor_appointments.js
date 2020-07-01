var connection = require('./../config');
var express=require('express');
var router=express.Router();
//doctor_id from session
module.exports.doctor_appointments=function(req,res){
	if(req.session.user_id){
	connection.query("select time,phone,age,gender,firstname,lastname from appointments inner join login on appointments.patient_id=login.user_id where doctor_id=? and date=? and active=1",[req.session.user_id,req.body.date],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message: "Something went wrong!!"});}
		else{
			res.json({
			status:true,
			message:resultmain});
		}
	});
	}
	else{
		res.json({message: "Please login."});
	}
}