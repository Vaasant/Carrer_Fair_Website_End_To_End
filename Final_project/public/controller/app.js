// express app,path and utility requires start
var express= require('express');
var app =express();
var path =require('path');
var utility = require('../util/connectionDB.js');
var session = require('express-session');
// express app,path and utility requires END

//  view engine,views set  start
app.set('view engine','ejs');
app.set('views','../views');
//  view engine,views set  END

// static image and stylesheet Start
app.use('/assets/stylesheets',express.static(path.join(__dirname,'/../assets/stylesheets')));
app.use('/assets/images',express.static(path.join(__dirname,'/../assets/images')));
app.use(session({secret:'thisISSecret'}));
// static image and stylesheet End

// routes for index,connection,connections,abbout,contact,newConnection,Savedconnection start
var company = require('../routes/companyInfo.js');
var companies= require('../routes/companiesInfo.js');
var savedCompanies=require('../routes/savedCompanyConnection');
var newConnection=require('../routes/newConnectionInfo.js');
var index=require('../routes/indexInfo.js');
var about=require('../routes/aboutInfo.js');
var contact=require('../routes/contactInfo.js');
var newConnectionSaved=require('../routes/newConnectionSaved.js');
var profileController= require('./profileController.js');
var login=require('../routes/login.js');
var signup=require('../routes/signup.js');
var connectionUpdateDelete=require('../routes/connectionUpdateDelete.js')
// routes for index,connection,connections,abbout,contact,newConnection,Savedconnection end


// paths for index,connection,connections,abbout,contact,newConnection,Savedconnection start


app.use('/connections',companies);

app.use('/connection',company);

app.use('/savedConnections',profileController);

app.use('/newConnection',newConnection);

app.use('/about',about);

app.use('/contact',contact);

app.use('/newConnectionSaved',newConnectionSaved);

app.use('/login',login);

app.use('/signup',signup);

app.use('/connectionUpdateDelete',connectionUpdateDelete)
app.use('/*',index);


// paths for index,connection,connections,abbout,contact,newConnection,Savedconnection end

// server Start
app.listen(9000,function(){
    console.log('app started')
    console.log('listening on port 9000')
});
// server End
