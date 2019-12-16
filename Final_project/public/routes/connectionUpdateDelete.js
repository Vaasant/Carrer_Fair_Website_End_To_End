// express app,router and utility requires start

var express = require('express');
var router = express.Router();
var bodyParser= require('body-parser');
var utility = require('../util/connectionDB.js');
var userDbUtil = require('../util/userDB');
var userProfile = require('../models/userprofile');
var userConnectionsDB=require('../util/UserConnectionDB.js')
var urlencodedParser = bodyParser.urlencoded({extended :false});
const { check, validationResult } = require('express-validator');
var userProfile = require('../models/UserProfile');
var connectionDB = require('../util/connectionDB');
var UserConnectionObject= require('../models/UserConnection.js');


// express app,router and utility requires end




router.post('/updatePage',urlencodedParser,async function(req,res){
console.log(req.body.UPDATEFORM);
 if (req.body.UPDATEFORM=='UPDATE') {
    res.render('connectionUpdateDelete',{session:req.session.theUser,id:req.query.ID,inserted:null,error:null});
  }
else if(req.body.DELETEFORM=='DELETE'){
  var deleteConnection =await utility.removeConnection(req.query.ID,req.session.theUser.UserID)
  var deleteinSaved= userConnectionsDB.removeConnection(req.query.ID,req.session.theUser.UserID);
  var deleteConnectionDB = connectionDB.getConnection(req.query.ID);
                  var findout=await userConnectionsDB.getUserProfile(req.session.theUser.UserID);
                  var UserConnections=[];
                  for (var i = 0; i < findout.length; i++) {
                    console.log(findout[i]);
                    var connection=await connectionDB.getConnection(findout[i].connectionID)
                    console.log("inprofile"+connection);
                    var addConnection = new UserConnectionObject(connection,findout[i].RSVP);
                    UserConnections.push(addConnection);
                  }
                  Profile = new userProfile( req.session.theUser.UserID);
                  Profile.UserConnections=UserConnections;
                  req.session.UserProfile= Profile;
                  Profile.removeConnection(deleteConnectionDB);
                  req.session.UserProfile=Profile;
  console.log(deleteConnection);
  if(deleteConnection=="yes"){
    var jobTypeList=[];
      var companies= await utility.getConnections();
      for (var i = 0; i < companies.length; i++) {
        jobTypeList.push(companies[i].typeOfJob)
      }
      var uniqueJob = jobTypeList.filter((v, i, a) => a.indexOf(v) === i);
      res.render('connections',{qs:companies,session:req.session.theUser,uniqueJob:uniqueJob});

  }
  else{
    res.render('delete',{session:req.session.theUser});
    }
}
// else{
//   var jobTypeList=[];
//
//     var companies= await utility.getConnections();
//     console.log("in comapnies"+companies[0]);
//     for (var i = 0; i < companies.length; i++) {
//       jobTypeList.push(companies[i].typeOfJob)
//     }
//     var uniqueJob = jobTypeList.filter((v, i, a) => a.indexOf(v) === i);
//     console.log(uniqueJob);
//     res.render('connections',{qs:companies,session:req.session.theUser,uniqueJob:uniqueJob});
// }
})


router.post('/',urlencodedParser,[
  check('companyName').isLength({ min: 3}).withMessage('name must be alpha numerial'),
  check('details').isLength({ min: 8}).withMessage('details must be length of 10'),
  check('location').isLength({min:5}).withMessage('location must be length of 5'),
  check('host').isLength({min:5}).withMessage('host must be length of 5'),
  check('dateAndTime').isLength({min:5}).withMessage('date must be length of 5')
],async function(req,res){
  console.log("inpost/");
  console.log(req.body);
  const errors =validationResult(req);
  console.log(errors.mapped());
  if(!errors.isEmpty()){
      res.render('connectionUpdateDelete',{session:req.session.theUser,id:req.query.ID,inserted:null,error:errors.array()});
    }
 else if (req.query.action=='UpdateDone') {
   var updatePage=await utility.updateConnection(req.query.ID,req.body,req.session.theUser.UserID)
                         var findout=await userConnectionsDB.getUserProfile(req.session.theUser.UserID);
                         var UserConnections=[];
                         for (var i = 0; i < findout.length; i++) {
                           console.log(findout[i]);
                           var connection=await connectionDB.getConnection(findout[i].connectionID)
                           console.log("inprofile"+connection);
                           var addConnection = new UserConnectionObject(connection,findout[i].RSVP);
                           UserConnections.push(addConnection);
                         }
                         Profile = new userProfile( req.session.theUser.UserID);
                         Profile.UserConnections=UserConnections;
                         req.session.UserProfile= Profile;
   console.log("updatePage  "+updatePage);
   if (updatePage!=null) {
     res.render('connectionUpdateDelete',{session:req.session.theUser,id:req.query.ID,inserted:"INSERTED",error:errors.array()});
   }
   else {
     res.render('connectionUpdateDelete',{session:req.session.theUser,id:req.query.ID,inserted:"You are not authourized user to change this connection",error:errors.array()});
   }
  }

})

module.exports = router;
