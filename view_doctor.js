var connection = require('./../config');
var express=require('express');
var router=express.Router();

module.exports.view_doctor=function(req,res){
	connection.query("select doctor_name,experience,specialization,department_name from doctor natural join department on department.department_id=doctor.department_id where department.department_id=?",[req.body.department_id],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:errormain});}
		else{
			res.json({
			status:true,
			message:resultmain});
		}
	});
}