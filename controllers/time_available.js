var connection = require('./../config');
var express=require('express');
var router=express.Router();

module.exports.time_available=function(req,res){
	connection.query("select time from appintments where doctor_id=? and date=?",[req.body.doctor_id,req.body.date],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:errormain});}
		else{
			res.json({
			status:true,
			message:resultmain});
		}
	});
}