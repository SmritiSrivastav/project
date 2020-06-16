var mysql = require('mysql');
var express = require('express');
var app = express();

app.get('/', function(request,response){
  fetchData(response);
console.log("Done displayed data!");

});

var db = mysql.createConnection({
  host     : '35.200.193.123',
  user     : 'sakshi',
  password : 'summer2020',
  database : 'test'
});
db.connect(function(err){
  if(err){throw err;}
  console.log("Connected to database")

})

function executeQuery(sql,cb){
  db.query(sql, function(error,result,fields){
    if(error){ throw error;}
    cb(result);
  })
}
function fetchData(response){
  executeQuery("select department_id,department_name,description from department",function(error,result){
	  if (error){
		  res.json({
			  status:false,
			  message:error
		  });
	  }
  // console.log(result);
   response.write('<table><tr>');
   for(var column in result[0]){
     response.write('<td><label>'+ column + '</td></label>');
     response.write('</tr>');
     
   }
  for(var row in result){
    response.write('<tr>');
    for (var column in result[row]){
      response.write('<td><label>' +result[row][column]+ '</td></label>');

    }
    response.write('</tr>');

  }
  response.end('</table>');
  
  

});

}
app.listen(8080,function(){
  //console.log("listening"); 
})


