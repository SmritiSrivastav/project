var connection = require('./../config');
var express=require('express');
var deasync = require('deasync');
var Q = require('Q');
var router=express.Router();

function get_data(user_id){
	        var defered = Q.defer();
        connection.query("select experience,qualification,specialization,department_name from doctor inner join department on doctor.department_id=department.department_id where user_id_ref=?",[user_id],defered.makeNodeResolver());
        return defered.promise;
	/*connection.query("select experience,qualification,specialization,department_name from doctor inner join department on doctor.department_id=department.department_id where user_id_ref=?",[user_id],function(error,result,field){
							if(error){
								return false;
							}
							else{
								//console.log(result);
								return (result[0]);
							}
				
					});*/
}
function all_users(user_id){
	        var defered = Q.defer();
        connection.query("select user_type,email,phone,age,gender,firstname,lastname from login where user_id=?",[user_id],defered.makeNodeResolver());
        return defered.promise;
		/*connection.query("select user_type,email,phone,age,gender,firstname,lastname from login where user_id=?",[user_id],function(errormain,resultmain,fieldmain){
			if(errormain){res.json({message:"Something went wrong!!"})}
			else{ 
				//if(resultmain[0].user_type==1){

					/*get_data(user_id, function(result){
									answer =  result;
									console.log(answer);
							});*/
				//}
					//ans=Object.assign(resultmain,answer);
					//res.end();
				/*while(answer === undefined) {
      require('deasync').runLoopOnce();
    }
		return resultmain;
				/*res.json({
					status:true,
					message:resultmain,
					message2:answer
					})
			}
		});*/
}

//user_id will come from session value
module.exports.profile= deasync (function(req,res){
	var user_id=19;
	if(1){
	//var user_id=req.session.user_id;
	var ans;
	var answer;
	 Q.all([all_users(),get_data()]).then(function(results){
        res.send(JSON.stringify(results[0][0][0].solution+results[1][0][0].solution));
        // Hint : your third query would go here
    });

	}
	else{
		res.json({message: "Please login."});
	}
})