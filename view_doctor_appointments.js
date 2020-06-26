var connection = require('./../config');
var express=require('express');
var router=express.Router();
//doctor_id from session
module.exports.doctor_appointments=function(req,res){
	connection.query("select time,concat(concat(firstname," "),lastname) as username,phone,age,gender from appointments inner join login on appointments.patient_id=login.user_id where doctor_id=? and date=?",[req.body.doctor_id,req.body.date],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message: "Something went wrong!!"});}
		else{
			res.json({
			status:true,
			message:resultmain});
		}
	});
}