var connection = require('./../config');
var express=require('express');
var router=express.Router();

function update_doctor(user_id,specialization,experience,qualification,department_id,callback){
				connection.query("update doctor set experience=?,qualification=?,specialization=? where user_id_ref=?",[experience,qualification,specialization,user_id],function(errord,resultd,fieldd){
					if(errord){
						console.log(errord);
						return callback(false);
					}
					else{
					//	console.log(resultd);
						return callback(true);
					}
				})
}

function get_user_type(email,phone,callback){
	 connection.query('Select user_type from login where email=? or phone=?',[email,phone],function(errorm,resultsm,fieldsm){if (errorm) {
        res.json({
           status:false,
            message:error,
			
        });
      }
			  else{
				//  console.log(resultsm[0].user_type);
				  return callback(resultsm[0].user_type);}
	 })
}

//user_id will come from session value
module.exports.save_editprofile=function(req,res){
	var email=req.body.email;
	var phone=req.body.phone;
	var type;
	var specialization=req.body.specialization;
	var qualification=req.body.qualification;
	var experience=req.body.experience;
	var department_id=req.body.department_id;
	connection.query("select user_id from login where email=? or phone=?",[email,phone],function(error,result,field){
		if(error){
			re.json({message:error});
		}
		if (result.length<=1){
	//var user_id=3;
	var user_id=result[0].user_id;
	//console.log(user_id);
	connection.query("update login set email=? ,phone=? , age=? ,gender=? ,lastname=?,firstname=?,address=? where user_id=?",[email,phone,req.body.age,req.body.gender,req.body.lastname,req.body.firstname,req.body.address,user_id],function(errormain,resultmain,fieldmain){
		if(errormain){res.json({message:errormain});}
		else{
			//console.log(resultmain);
			get_user_type(email,phone,function(res){
				if (res==1){
					 update_doctor(user_id,specialization,experience,qualification,department_id,function(result){
				  type=result;});
				}
			});
			res.json({
			status:true,
			message:"Profile Editied"});
		}
		});
		}
		else{
			res.json({message: "There aldready exists some other account with this email or phone number." });
		}
	});
}
	