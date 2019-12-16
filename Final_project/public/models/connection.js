


module.exports.connection = function(connectionID,connection_name,connection_topic,details,host,location,dAndT,imageurl){
  // creating an object model named connectionModel start
  var connectionModel={connectionID:connectionID,
                    companyName:connection_name,
                    typeOfJob:connection_topic,
                    details:details,
                    host:host,
                    location:location,
                    dateAndTime:dAndT,
                    imageurl:imageurl};
  return connectionModel;
};
// creating an object model named connectionModel end
