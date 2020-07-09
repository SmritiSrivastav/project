var connection = require('./../config');
var express=require('express');
var router=express.Router();

module.exports.particular_record=function(req,res){
//Session provided value
if(req.session.user_id){
	var user_id=req.session.user_id;
	connection.query("select * from medical_records where patient_id= ? and medical_record_id=?",[user_id,req.body.record_id],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:errormain});}
		else{
			res.json({
			status:true,
			message: resultmain});
		}
	});
}
else{
	res.json({message : "Please login"});
}
}