// require the connection model from models start

var connectionModel = require('../models/connection');
var connection=require('./connectionDB.js')
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userConnectionsSchema = new Schema({
      UserID : String,
      connectionID:String,
      RSVP:String
});


var connectionDB=mongoose.model('connections',connection.connectionSchema)
var userConnectionsDB = mongoose.model('userConnections',userConnectionsSchema);

mongoose.connect('mongodb://localhost/carrers', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


module.exports.getUserProfile= function(UserID)
{
    return new Promise(resolve =>{
          resolve(userConnectionsDB.find({UserID:UserID}).then(function(allConnections){
            return allConnections;
          })
        );
      });

};

module.exports.updateRSVP= function(connectionID, UserID, rsvp)
{
    return new Promise(resolve =>{
          resolve(userConnectionsDB.findOneAndUpdate({UserID:UserID,connectionID:connectionID},{RSVP:rsvp}).then(function(allConnections){
            console.log(allConnections);
            return allConnections;
          })
        );
      });

};

module.exports.addRSVP= function(connectionID, UserID, rsvp)
{

      return new Promise(resolve =>{
    resolve(userConnectionsDB.find({UserID:UserID,connectionID:connectionID},function(err,d){
        if(d.length === 0){
          var addObject = {
          UserID :UserID,
          connectionID:connectionID,
          RSVP:rsvp

        }
        var data = new userConnectionsDB(addObject)
        data.save()
        return "yes";
    }
  })
  )

})

};

module.exports.removeConnection = function(connectionID, UserID){
      return new Promise(resolve =>{
          resolve(userConnectionsDB.findOneAndDelete({UserID:UserID,connectionID:connectionID}).exec(function(err){
            return "yes";
          })
);
});
}

module.exports.addConnection= function(connection,userid){
    var ans = 'CT';
        ans += Math.random().toString(36).slice(5);
    var bns=ans.slice(0,6)
    console.log("in random"+ans +"  "+bns);
  return new Promise(resolve =>{
  resolve(connectionDB.find({connectionID:bns},function(err,d){
    if(d.length === 0){
      var addObject = {
        UserID:userid,
      connectionID:bns,
      companyName : connection.name,
      typeOfJob: connection.topic,
      details: connection.details,
      host: connection.host,
      location:connection.location,
      dateAndTime:connection.date,
      imageURL:connection.imageURL
    }
    var data = new connectionDB(addObject)
    data.save()
    return "yes";
  }
  })
  )

  })
}
