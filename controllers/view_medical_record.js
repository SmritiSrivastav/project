var connection = require('./../config');
var express=require('express');
var router=express.Router();

module.exports.records=function(req,res){
	if(req.session.user_id){
		//session value
		var user_id=req.session.user_id;
		//var user_id=1;
	connection.query("select doctor,symptoms,medication_prescribed from medical_records where patient_id=?",[user_id],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:errormain});}
		else{
			if (resultmain.length>0){
			res.json({
			status:true,
			message: resultmain});
		}else{
			res.json({
			status:true,
			message: 'No records available.'});}
		}
	});
}
else{
	res.json({
		status:false,
		message:'Please login'
	});
}
}