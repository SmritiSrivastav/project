var express = require('express');
var router = express.Router();
var connection = require('./../config');
//Here patient id will come from session variable
module.exports.appointments=function(req,res){
    connection.query('INSERT INTO appointments (patient_id,slot_booked_for,doctor_id,) values (?,?,?)',[req.body.patient_id,req.body.slot_booked_for,req.body.doctor_id] ,function (error, results, fields) {
        router.get('/appointments', (req, res, next) => {
            req.collection.find({})
              .toArray()
              .then(results => res.json(results))
              .catch(error => res.send(error));
          });
          
          router.post('/appointments', (req, res, next) => {
            const { patient_id, slot_booked_for, doctor_id} = req.body;
            if (!patient_id || !slot_booked_for || !doctor_id ) {
              return res.status(400).json({
                message: 'Appointment Date, patient id and doctor id are required',
              });
            }
          
            const payload = { patient_id,slot_booked_for, doctor_id };
            req.collection.insertOne(payload)
              .then(result => res.json(result.ops[0]))
              .catch(error => res.send(error));
          });
        if (error) {
          res.json({
             status:false,
              message:error,
              
          })
        }else{
            res.json({
              status:true,
              message:'Appointment registered sucessfully'
          })
        }
      });
    }
    
