class User{
  constructor(UserID,firstName,lastName,emailAddress,address1Field,address2Field,city,state,postCode,country){
    this.UserID=UserID;
    this.firstName=firstName;
    this.lastName=lastName;
    this.emailAddress=emailAddress;
    this.address1Field=address1Field;
    this.address2Field=address2Field;
    this.city=city;
    this.state=state;
    this.postCode=postCode;
    this.country=country
  }
}

module.exports=User;
