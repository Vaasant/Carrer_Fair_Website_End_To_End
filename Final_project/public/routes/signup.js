// express app,router and utility requires start

var express = require('express');
var router = express.Router();
var bodyParser= require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended :false});
var userDbUtil = require('../util/userDB');
const { check, validationResult } = require('express-validator');
'use strict';
var crypto = require('crypto');
// express app,router and utility requires end


// Routing for about connections start


var genRandomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};

var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt:salt,
        passwordHash:value
    };
};

function saltHashPassword(userpassword) {
var salt = genRandomString(16); /** Gives us salt of length 16 */
var passwordData = sha512(userpassword, salt);
console.log('UserPassword = '+userpassword);
console.log('Passwordhash = '+passwordData.passwordHash);
console.log('nSalt = '+passwordData.salt);
return salt+passwordData.passwordHash
}

router.get('/', async function (req, res) {
  res.render('signup',{session:undefined,created:undefined,error:undefined});
});

router.post('/',urlencodedParser,
[
  check('UserID').isAlphanumeric().withMessage('username must be alpha numerial'),
  check('firstName').isAlpha().withMessage('First Name must be alphabetic'),
  check('lastName').isAlpha().withMessage('Last Name must be alphabetic '),
  check('emailAddress').isEmail().withMessage('Make sure email is in correct format'),
  check('password').isLength({ min: 8, max: 100})
  .withMessage('Password must be between 8-100 characters long.')
  .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, 'i')
  .withMessage('Password must include one lowercase character, one uppercase character, a number, and a special character.'),
  check('address1Field').isLength({ min: 3, max: 100}).withMessage('Address must be min 3 to 100 characters'),
  check('address2Field').isLength({ min: 3, max: 100}).withMessage('Address must be min 3 to 100 characters'),
  check('city').isLength({ min: 2, max: 100}).withMessage('City must be min 2 to 100 characters'),
  check('state').isLength({ min: 2, max: 100}).withMessage('State must be min 2 to 100 characters'),
  check('postCode').isLength({ min: 5, max: 100}).withMessage('PostCode must be min 5 to 100 characters'),
  check('country').isLength({ min: 3, max: 100}).withMessage('Country must be min 3 to 100 characters')
]
,async function (req, res) {
  const errors =validationResult(req);
  var action=req.query.action;
  if(!errors.isEmpty()){
      res.render('signup',{session:undefined,created:undefined,error:errors.array()});
    }
  else if(req.body.UserID){
    console.log("inside signin");
    var userpassword= req.body.password;
    var hashPassword=saltHashPassword(userpassword);
    req.body.password=hashPassword;
    console.log(hashPassword);
    userDbUtil.addUser(req.body).then(function(d){
      if(d!="yes"){
        res.render('signup',{session:undefined,created:d,error:undefined});
      }
      else{
        res.render('signup',{session:undefined,created:d,error:undefined});
      }
    })
  }
  else{
    res.render('signup',{session:undefined,created:undefined,error:undefined});
  }
});
module.exports = router;
