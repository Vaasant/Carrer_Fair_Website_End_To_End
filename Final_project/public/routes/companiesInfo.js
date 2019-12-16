// express app,router and utility requires start

var express = require('express');
var router = express.Router();
var utility = require('../util/connectionDB.js');
// express app,router and utility requires end


// Routing for about connections start

router.get('/', async function (req, res) {
  var jobTypeList=[];

    var companies= await utility.getConnections();
    console.log("in comapnies"+companies[0]);
    for (var i = 0; i < companies.length; i++) {
      jobTypeList.push(companies[i].typeOfJob)
    }
    var uniqueJob = jobTypeList.filter((v, i, a) => a.indexOf(v) === i);
    console.log(uniqueJob);
    res.render('connections',{qs:companies,session:req.session.theUser,uniqueJob:uniqueJob});

});



// router.get('/', function (req, res) {
//     var companies=utility.getConnections();
//
//       res.render('experiment',{qs:companies,session:req.session.theUser});
// });

// Routing for about connections end


// exporting router
module.exports = router;
