var connection = require('./../config');
var express=require('express');
var router=express.Router();
//patient_id must come from session
module.exports.register=function(req,res){
	connection.query("select doctor,symptoms,medication_prescribed from medical_records where patient_id=? ",[req.body.patient_id],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:"Something went wrong"});}
		else{
			res.json({
			status:true,
			message: resultmain});
		}
	});
}
