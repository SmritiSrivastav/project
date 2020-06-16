var connection = require('./../config');
var express=require('express');
var router=express.Router();

module.exports.register=function(req,res){
//Session provided value
	var user_id=1;
	connection.query("select * from medical_records where patient_id= ? and medical_record_id=?",[user_id,req.body.record_id],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:errormain});}
		else{
			res.json({
			status:true,
			message: resultmain});
		}
	});
}