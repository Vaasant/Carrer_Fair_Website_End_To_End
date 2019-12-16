var UserConnectionObject= require('./UserConnection.js');
var connectionDB= require('../util/connectionDB.js')
var userConnectionsDB=require('../util/UserConnectionDB.js')
class UserProfile {
  constructor(UserID) {
    this.UserID=UserID;
    this.UserConnections=[];
    this.OnLoadConnection(UserID);
  }
   OnLoadConnection(UserID)
  {
    var findout= userConnectionsDB.getUserProfile(UserID);
    for (var i = 0; i < findout.length; i++) {
      var connection= connectionDB.getConnection(findout[i].connectionID)
      var addConnection = new UserConnectionObject(connection,findout[i].RSVP);
      this.UserConnections.push(addConnection);
    }

    // var connection1= connectionDB.getConnection('FT01');
    // var addConnection1 = new UserConnectionObject(connection1,'YES');
    // this.UserConnections.push(addConnection1);
    // var connection2= connectionDB.getConnection('IS03');
    // var addConnection2 = new UserConnectionObject(connection2,'NO');
    // this.UserConnections.push(addConnection2);
  }

  addConnection(Connection, RSVP)
  {

    if(this.UserConnections.length == 0)
    {
      this.UserConnections.push(new UserConnectionObject(Connection,RSVP));
    }

    else
    {
      var equalCheck=0;
      var index=null;
      for (var i = 0; i <= this.UserConnections.length-1; i++) {
        console.log(this.UserConnections[i].Connection.connectionID + "  " + Connection.connectionID);
        if(this.UserConnections[i].Connection.connectionID == Connection.connectionID)
        {
          equalCheck=1;
          index=i;
          console.log("equal ");
        }

      }
      console.log(index);
      if(equalCheck==0)
      {
        console.log(equalCheck);
        this.UserConnections.push(new UserConnectionObject(Connection,RSVP))
      }
    }


  }

  removeConnection(Connection)
  {
    for (var i = 0; i <= this.UserConnections.length-1; i++) {
      if(this.UserConnections[i].Connection.connectionID==Connection.connectionID)
      {
        this.UserConnections.splice(i,1);
        break;
      }
    }
  }

  updateConnection(UserConnectionUpdate)
  {
    return UserConnectionUpdate;
  }

  getConnections()
  {
    return this.UserConnections;
  }


  emptyProfile()
  {
    this.UserConnections.length=0;
  }
}

module.exports=UserProfile;
