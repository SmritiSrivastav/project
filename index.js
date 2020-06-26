//const {Datastore} = require('@google-cloud/datastore');
var express=require("express");
var bodyParser=require('body-parser');
var app = express();
var session = require('express-session');

/*const DatastoreStore = require('@google-cloud/connect-datastore')(session);
app.use(session({
  store: new DatastoreStore({
    kind: 'express-sessions',
 
    // Optional: expire the session after this many milliseconds.
    // note: datastore does not automatically delete all expired sessions
    // you may want to run separate cleanup requests to remove expired sessions
    // 0 means do not expire
    expirationMs: 1000000000,
 
    dataset: new Datastore({
 
      // For convenience, @google-cloud/datastore automatically looks for the
      // GCLOUD_PROJECT environment variable. Or you can explicitly pass in a
      // project ID here:
      projectId: process.env.healthplus-278304,
 
      // For convenience, @google-cloud/datastore automatically looks for the
      // GOOGLE_APPLICATION_CREDENTIALS environment variable. Or you can
      // explicitly pass in that path to your key file here:
      keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
    })
  }),
  secret: 'my-secret',
    resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));*/

var doctor_appointmentsRouter=require('./controllers/view_doctor_appointments');
var patient_appointmentsRouter=require('./controllers/view_patient_appointments');
var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
var appointmentsRouter = require('./controllers/appointments');
var medicalrecordsRouter=require('./controllers/view_medical_record');
var save_medicalrecordsRouter=require('./controllers/save_medicalrecords');
var profileRouter=require('./controllers/profile');
var editprofileRouter=require('./controllers/edit_profile');
var save_editprofileRouter=require('./controllers/profile_save');
var reg_departmentRouter=require('./controllers/departments');
var forgotpassRouter = require('./controllers/forgot_password');
var resetpassRouter = require('./controllers/reset_password');
var unavailableRouter = require('./controllers/unavailable');
var save_deptRouter = require('./controllers/save_departments');
var particular_recordRouter = require('./controllers/particular_record');
var view_doctorRouter = require('./controllers/view_doctor');
var time_availableRouter = require('./controllers/time_available');
var date_availableRouter = require('./controllers/date_available');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//app.use(session({resave: true, saveUninitialized: true, secret: 'XCR3rsasa%RDHHH', cookie: { maxAge: 60000 }}));

app.post('/register',registerController.register);
app.post('/authenticate',authenticateController.authenticate);
app.post('/appointments',appointmentsRouter.appointments);
app.post('/reset_password',resetpassRouter.resetpass);
app.post('/forgot_password',forgotpassRouter.forgotpass);
app.get('/medical_records',medicalrecordsRouter.records);
app.post('/save_medical_records',save_medicalrecordsRouter.save_records);
app.get('/medical_records/particular',particular_recordRouter.particular_record);
app.get('/profile',profileRouter.profile);
//app.get('/profile/edit',editprofileRouter.editprofile);
app.post('/profile/save_edit',save_editprofileRouter.save_editprofile);
app.get('/register/department',reg_departmentRouter.departments);
app.get('/department/doctor',view_doctorRouter.view_doctor);
app.post('/unavailable',unavailableRouter.unavailable);
app.post('/save_department',save_deptRouter.save_dept);
app.get('/appointments/time_available',time_availableRouter.time_available);
app.get('/appointments/date_available',date_availableRouter.date_available);
app.get('/doctor',doctor_appointmentsRouter.doctor_appointments);
app.get('/patient',patient_appointmentsRouter.patient_appointments);
//session destroy
app.get('/logout',function(req,res){
    sessionData = req.session;
    sessionData.destroy(function(err) {
        if(err){
            msg = 'Error destroying session';
            res.json(msg);
        }else{
            msg = 'Session destroy successfully';
            console.log(msg)
            res.json(msg);
        }
    });
});


//module.exports=app;
app.listen(8080)