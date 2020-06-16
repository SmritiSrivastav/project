var mysql = require('mysql');
var express = require('express');
var app = express();
var connection = require('./../config');

app.get('/', function(request,response){
  fetchData(response);
console.log("Done displayed data!");

});

function executeQuery(sql,cb){
  db.query(sql, function(error,result,fields){
    if(error){ throw error;}
    cb(result);
  })
}
function fetchData(response){
	//User id comes from session variable
	var user_id=req.body.user_id;
	var user;
  executeQuery("select user_type,email,phone,age,gender,username from login where user_id=?",[user_id],function(error,result,field){
	  if (errormain){
		  res.json({
			  status:false,
			  message:error
		  });
	  }
  // console.log(result);
  response.write('<form method="post" action="profile_save.js">')
   response.write('<table><tr>');
   
	response.write('<tr><td><input type="text" id="username" value="' +result[0].username+ '"></td></tr>');
	response.write('<tr><td><input type="email" id="email" value="' +result[0].email+ '"></td></tr>');
	response.write('<tr><td><input type="text" id="phone" value="' +result[0].phone+ '"></td></tr>');
	response.write('<tr><td><input type="" id="email" value="' +result[0].email+ '"></td></tr>');
	if(result[0].type==1)
		user='DOCTOR';
	else
		user='Patient';
	response.write('<tr><td>USER TYPE :  ' +user+ '"></td></tr>');
	if (result[0].gender=='M')
	response.write('<tr><td><input type="radio" id="gender" value="M" selected>MALE</td>');
	else:
	response.write('<tr><td><input type="radio" id="gender" value="M">MALE</td>');
	if (result[0].gender=='F')
	response.write('<td><input type="email" id="email" value="F" selected>FEMALE</td></tr>');
	else
	response.write('<td><input type="email" id="email" value="F" >FEMALE</td></tr>');
	if(result[0].age!=-1)
	response.write('<tr><td><input type="number" id="age" value="' +result[0].age+ '"></td></tr>');
	else
	response.write('<tr><td><input type="number" id="age" value="Enter age"></td></tr>');

    }
    response.write('</tr>');

  }
  if(resultmain[0].user_type==1){
				connection.query("select experience,qualification,specialization from doctor where user_id_ref=?",[user_id],function(errord,resultd,fieldd){
					if(error){
						res.json({message:errord});
					}
					else{
						response.write('<tr><td><input type="text" id="experience" value="' +resultd[0].experience+ '"></td></tr>');
						response.write('<tr><td><input type="text" id="qualification" value="' +resultd[0].qualification+ '"></td></tr>');
						response.write('<tr><td><input type="text" id="specialization" value="' +resultd[0].specialization+ '"></td></tr>');
					}
				});
			}
  response.end('</table></form>');
  
  

});

}
app.listen(8080,function(){
  //console.log("listening"); 
})


