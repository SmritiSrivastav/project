var connection = require('./../config');
var express=require('express');
var router=express.Router();
//doctor_id will come from session value
module.exports.departments=function(req,res){
	//var date=new Date();
	
	connection.query("select * from department",function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:"Some error occured!!"});}
		else{
			res.json({
			status:true,
			message: resultmain});
		}
	});
}