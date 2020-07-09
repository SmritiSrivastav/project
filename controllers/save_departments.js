var connection = require('./../config');
var express=require('express');
var router=express.Router();

module.exports.save_dept=function(req,res){
	connection.query("insert into department (department_name,description) values (?,?)",[req.body.department_name,req.body.description],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:errormain});}
		else{
			res.json({
			status:true,
			message: 'Department Value Saved !!'});
		}
	});
}