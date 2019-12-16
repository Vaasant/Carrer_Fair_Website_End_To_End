var User = require('../models/User.js')

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
mongoose.connect('mongodb://localhost:27017/carrers',{useNewUrlParser: true});
var schema = mongoose.Schema;

var userSchema = new schema({
  UserID : {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, requied: true},
  emailAddress : {type: String, requied: true},
  password:{type:String,required:true},
  address1Field:String,
  address2Field:String,
  city:String,
  state:String,
  postCode:String,
  country:String
});

var userModel = mongoose.model('users', userSchema);

module.exports.getUsers = function()
{
  return new Promise(resolve =>{
      resolve(userModel.find().then(function(data){
        let users=[];
        console.log(data);
        for (let i=0;i<data.length;i++){
          let userAdd = new User(data[i].UserID,
            data[i].firstName,
            data[i].lastName,
            data[i].emailAddress,
            data[i].address1Field,
            data[i].address2Field,
            data[i].city,
            data[i].state,
            data[i].postCode,
            data[i].country
          )
          users.push(userAdd);
        }
        return users;
      })
    );

  });



}

module.exports.getUser = function(UserID,password)
{
  return userModel.findOne({UserID:UserID,password:password}).then(function(data){
        let users=[];
        console.log("in mongo"+data);
        if(data!=null){
          let userAdd = new User(data.UserID,
            data.firstName,
            data.lastName,
            data.emailAddress,
            data.address1Field,
            data.address2Field,
            data.city,
            data.state,
            data.postCode,
            data.country
          )

        return userAdd;
        }
        else{
          return null;
        }

      })



}




module.exports.addUser= function(userObj){
  console.log(userObj);
return  userModel.find({ $or: [ { UserID:userObj.UserID }, { emailAddress: userObj.emailAddress } ] } ).then(function(d){
    if(d.length != 0){
      return "no";
    }
    else if(d.length == 0){
      var addObject = {
        UserID : userObj.UserID,
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        emailAddress : userObj.emailAddress,
        password:userObj.password,
        address1Field:userObj.address1Field,
        address2Field:userObj.address2Field,
        city:userObj.city,
        state:userObj.state,
        postCode:userObj.postCode,
        country:userObj.country
    }
    var data = new userModel(addObject)
    data.save()
    return "yes";
  }
  })

}




module.exports.findPassword= function(UserID){
  console.log(UserID);
return  userModel.findOne({UserID:UserID}).then(function(d){
  console.log("looking for d");
  console.log(d);
    if(d!=null){
      return d.password.slice(0, 16)
    }
    else{
      return null;
    }
  })

}
















// var User = require('../models/User.js')
// var mongoose = require('mongoose');
// var express = require('express');
// var app = module.exports = express();
// var bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
// mongoose.connect('mongodb://localhost/nbad',{useNewUrlParser: true});
// var schema = mongoose.Schema;
//
// var userSchema = new schema({
//   userId : {type: Number, required: true},
//   firstName: {type: String, required: true},
//   lastName: {type: String, requied: true},
//   emailAddress : {type: String, requied: true}
//   // degree: String,
//   // program: String
// },{collection:'users'});
//
// var userModel = mongoose.model('users', userSchema);
//
// module.exports.getUsers = function()
// {
//   let users=[];
//   for (let i=0;i<data.length;i++){
//     let userAdd = new User(data[i].UserID,
//       data[i].firstName,
//       data[i].lastName,
//       data[i].emailAddress,
//       data[i].address1Field,
//       data[i].address2Field,
//       data[i].city,
//       data[i].state,
//       data[i].postCode,
//       data[i].country
//     )
//     users.push(userAdd);
//   }
//   return users;
// }
//
// var data=
// [
//   {
//     UserID:'Vaasant2511',
//     firstName:'Vaasant',
//     lastName:'Sreereddy',
//     emailAddress:'svaasant@gmail.com',
//     address1Field:'9501 A',
//     address2Field:'UT',
//     city:'charlotte',
//     state:'north carolina',
//     postCode:'28262',
//     country:'USA'
//   },
//
//   {
//     UserID:'Ranga2511',
//     firstName:'Ranganadh',
//     lastName:'Sreereddy',
//     emailAddress:'ranganadh@gmail.com',
//     address1Field:'9501 A',
//     address2Field:'UT',
//     city:'charlotte',
//     state:'north carolina',
//     postCode:'28262',
//     country:'USA'
//   }
// ]
