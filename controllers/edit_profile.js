var mysql = require('mysql');
var express = require('express');
var app = express();
var connection = require('./../config');

module.exports.editprofile=function(request,response){
  fetchData(response);
  //console.log('Hi');
}
function fetchData(response){
	//User id comes from session variable
	var user_id=3;
	var user;
  connection.query("select user_type,email,phone,age,gender,username from login where user_id=?",[user_id],function(error,result,field){
	  if (error){
		  response.write('error');
	  }else{ 
	  connection.query("select experience,qualification,specialization,department_name from doctor inner join department on department.department_id=doctor.department_id and user_id_ref=?",[user_id],function(errord,resultd,fieldd){
					if(errord){
						//response.write('{message:'+errord+'}');
						response.write.json("query", function(err) { response.end(); });
					}
					else{
						response.write('Experience :' +resultd[0].experience+"\n");
						response.write('Qualification : ' +resultd[0].qualification+"\n");
						response.write('Specialization : ' +resultd[0].specialization+"\n");
						response.write('Department : ' +resultd[0].department_name+"\n");
					}
				});
	response.write('Username : ' +result[0].username+"\n");
	response.write('Phone : ' +result[0].phone+"\n");
	response.write('Email : ' +result[0].email+"\n");
	if(result[0].type==1)
		user='DOCTOR';
	else
		user='Patient';
	response.write('USER TYPE :  ' +user+"\n");
	if (result[0].gender=='M')
	response.write('Gender : Male'+"\n");
	if (result[0].gender=='F')
	response.write('Gender : Female'+"\n");
	else
	response.write('Gender : Not Defined'+"\n");
	if(result[0].age!=-1)
	response.write('Age : ' +result[0].age);
	else
	response.write('Age : Not Defined'+"\n");
  if(result[0].user_type==1){
	  response.write('In doctor');
				connection.query("select experience,qualification,specialization,department_name from doctor inner join department on department.department_id=doctor.department_id and user_id_ref=?",[user_id],function(errord,resultd,fieldd){
					if(errord){
						response.write.json("query error", function(err) { response.end(); });
					}
					else{
						response.write('Experience :' +resultd[0].experience+"\n");
						response.write('Qualification : ' +resultd[0].qualification+"\n");
						response.write('Specialization : ' +resultd[0].specialization+"\n");
						response.write('Department : ' +resultd[0].department_name+"\n");
					}
				});
			}
  response.end('end');
  
	  } 

});

}


