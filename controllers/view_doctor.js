var connection = require('./../config');
var express=require('express');
var router=express.Router();

module.exports.view_doctor=function(req,res){
	connection.query("select concat(firstname,lastname) doctor,experience,specialization,department_name from ((doctor inner join department on department.department_id=doctor.department_id) inner join login on login.user_id=doctor.user_id_ref) where department.department_id=?",[req.body.department_id],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:errormain});}
		else{
			res.json({
			status:true,
			message:resultmain});
		}
	});
}