var connection = require('./../config');
var express=require('express');
var router=express.Router();

module.exports.register=function(req,res){
	connection.query("insert into medical_records (patient_id,doctor_id,symptoms,medication_prescribed) values (?,?,?,?)",[req.body.patient_id,req.body.doctor_id,req.body.symptoms,req.body.prescribed],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:"Something went wrong!!"});}
		else{
			res.json({
			status:true,
			message: 'Medical Record Saved.'});
		}
	});
}
