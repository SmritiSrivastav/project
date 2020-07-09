var connection = require('./../config');
var express=require('express');
var router=express.Router();

module.exports.date_available=function(req,res){
	connection.query("select date from unavailable where doctor_id=?",[req.body.doctor_id],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:errormain});}
		else{
			res.json({
			status:true,
			message:resultmain});
		}
	});
}