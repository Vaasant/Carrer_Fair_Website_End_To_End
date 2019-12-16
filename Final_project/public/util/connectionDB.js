// require the connection model from models start

var connectionModel = require('../models/connection');

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var connectionSchema = new Schema({
    UserID:String,
    connectionID : String,
    companyName : String,
    typeOfJob: String,
    details: String,
    host: String,
    location:String,
    dateAndTime:String,
    imageURL:String
});

var connectionDB = mongoose.model('connections',connectionSchema);

mongoose.connect('mongodb://localhost/carrers', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


// require the connection model from models end


// data storing for database start for all categories and topics

//data for wellsfargo
// var WellsFargo=
//  {
//     connectionID:'FT01',
//     companyName:'Wells Fargo',
//     typeOfJob:"FULLTIME",
//     details:"Wells Fargo & Company is an American multinational financial services company headquartered in San Francisco, California, with central offices throughout the United States. It is the worlds fourth-largest bank by market capitalization and the fourth largest bank in the US by total assets. Wells Fargo is ranked #26 on the 2018 Fortune 500 rankings of the largest US corporations by total revenue.[12] In July 2015, Wells Fargo became the world's largest bank by market capitalization, edging past ICBC, before slipping behind JPMorgan Chase in September 2016, in the wake of a scandal involving the creation of over 2 million fake bank accounts by Wells Fargo employees. Wells Fargo fell behind Bank of America to third by bank deposits in 2017 and behind Citigroup to fourth by total assets in 2018.",
//     host:"Hosted By UNCC",
//     location:"WoodwardHall 3rd Floor",
//     dateAndTime:"November 25th,2019 10:30am-2:00pm",
//     imageurl:'../assets/images/wellsFargo.png'
//    };
//
// //data for creditkarma
//
// var CreditKarma=
//  {
//     connectionID:'FT02',
//     companyName:'Credit Karma',
//     typeOfJob:"FULLTIME",
//     details:"Credit Karma is an American multinational personal finance company, founded on March 8, 2007, by Kenneth Lin, Ryan Graciano and Nichole Mustard. It is best known as a free credit and financial management platform, but its features also include free tax preparation, monitoring of unclaimed property databases and a tool to identify and dispute credit report errors. All of Credit Karma’s services are free to consumers. Revenue from targeted advertisements for financial products offsets the costs of its free products and services. Credit Karma earns revenue from lenders, who pay the company when Credit Karma successfully recommends customers to the lenders",
//     host:"Hosted By UNCC",
//     location:"WoodwardHall 3rd Floor",
//     dateAndTime:"November 25th,2019 10:30am-2:00pm",
//     imageurl:"../assets/images/creditKarma.png"
//    };
//
// //data for TataConsultancyServices
//
// var TataConsultancyServices=
// {
//     connectionID:"FT03",
//     companyName:"Tata Consultancy Services",
//     typeOfJob:"FULLTIME",
//     details:"Tata Consultancy Services Limited (TCS) is an Indian multinational information technology (IT) service and consulting company headquartered in Mumbai, Maharashtra, India. It is a subsidiary of Tata Group and operates in 149 locations across 46 countries. TCS is the largest Indian company by market capitalization. TCS is now placed among the most valuable IT services brands worldwide. In 2015, TCS was ranked 64th overall in the Forbes World's Most Innovative Companies ranking, making it both the highest-ranked IT services company and the top Indian company. It is the world's largest IT services provider. As of 2018, it is ranked eleventh on the Fortune India 500 list. In April 2018, TCS became the first Indian IT company to reach $100 billion market capitalization, and second Indian company ever (after Reliance Industries achieved it in 2007) after its market capitalization stood at ₹6,79,332.81 crore ($102.6 billion) .",
//     host:"Hosted By UNCC",
//     location:"WoodwardHall 3rd Floor",
//     dateAndTime:"November 25th,2019 10:30am-2:00pm",
//     imageurl:"../assets/images/tcs.png"
//
// };
//
// //data for Spectrum
// var Spectrum=
// {
//     connectionID:"FT04",
//     companyName:"Spectrum",
//     typeOfJob:"FULLTIME",
//     details:"Spectrum or Charter Spectrum is a trade name of Charter Communications, used to market consumer cable television, internet, telephone, and wireless services provided by the company.The brand was first introduced in 2014; prior to that, these services were marketed primarily under the Charter name. Following the acquisitions of Time Warner Cable and Bright House Networks by Charter, these operations also assumed the Spectrum brand.Includes the major local broadcast channels and allows a choice of 10 (out of 56) additional cable channels to create a customized channel lineup for $34.99/month. Premium movie channels can be added for an additional fee.Offers a set lineup of 25 cable channels plus the major local broadcast channels for $29.99. News, sports, and premium movie channels can be added for an additional fee.Offers a set lineup of 62 cable channels (but no local broadcast or sports channels) for $14.99/month.",
//     host:"Hosted By UNCC",
//     location:"WoodwardHall 3rd Floor",
//     dateAndTime:"November 25th,2019 10:30am-2:00pm",
//     imageurl:"../assets/images/spectrum.png"
//
// };
//
// //data for BankOfAmerica
//
// var BankOfAmerica=
// {
//     connectionID:'IS01',
//     companyName:'Bank Of America',
//     typeOfJob:"INTERNSHIP",
//     details:"The Bank of America Corporation (abbreviated as BofA) is an American multinational investment bank and financial services company based in Charlotte, North Carolina, with central hubs in New York City, London, Hong Kong, Minneapolis, and Toronto. Bank of America was formed through NationsBank's acquisition of BankAmerica in 1998. It is the second largest banking institution in the United States, after JPMorgan Chase. As a part of the Big Four, it services approximately 10.73% of all American bank deposits, in direct competition with Citigroup, Wells Fargo, and JPMorgan Chase. Its primary financial services revolve around commercial banking, wealth management, and investment banking.",
//     host:"Hosted By UNCC",
//     location:"WoodwardHall 3rd Floor",
//     dateAndTime:"November 25th,2019 10:30am-2:00pm",
//     imageurl:"../assets/images/Bofa.png"
//
// };
//
// //data for AOSmithCorporation
//
// var AOSmithCorporation=
// {
//     connectionID:'IS02',
//     companyName:'AO Smith Corporation',
//     typeOfJob:"INTERNSHIP",
//     details:"A. O. Smith Corporation is an American manufacturer of both residential and commercial water heaters and boilers and the largest manufacturer and marketer of water heaters in North America. It also supplies water treatment products in the Asian market. The company has 24 locations worldwide, including five manufacturing facilities in North America, as well as plants in Bengaluru in India, Nanjing in China and Veldhoven in The Netherlands In the past, A. O. Smith has had numerous other product lines. Among them, it was the largest bomb maker in the United States by the end of World War I. Smith ranked 74th among United States corporations in the value of World War II military production contracts",
//     host:"Hosted By UNCC",
//     location:"WoodwardHall 3rd Floor",
//     dateAndTime:"November 25th,2019 10:30am-2:00pm",
//     imageurl:'../assets/images/AoSmith.png'
//
// };
//
// //data for Cummins
//
// var Cummins=
// {
//     connectionID:'IS03',
//     companyName:'Cummins',
//     typeOfJob:"INTERNSHIP",
//     details:"Cummins is an American Fortune 500 corporation that designs, manufactures, and distributes engines, filtration, and power generation products. Cummins also services engines and related equipment, including fuel systems, controls, air handling, filtration, emission control, electrical power generation systems, and trucks. Headquartered in Columbus, Indiana, United States, Cummins sells in approximately 190 countries and territories through a network of more than 600 company-owned and independent distributors and approximately 6,000 dealers. Cummins reported net income of $2.19 billion on sales of $23.77 billion in 2018.",
//     host:"Hosted By UNCC",
//     location:"WoodwardHall 3rd Floor",
//     dateAndTime:"November 25th,2019 10:30am-2:00pm",
//     imageurl:"../assets/images/Cummins.png"
//
// };
//
// //data for DealCloud
//
// var DealCloud=
// {
//     connectionID:'IS04',
//     companyName:'Deal Cloud',
//     typeOfJob:"INTERNSHIP",
//     details:"Our data-powered platform delivers vertical-specific solutions that enable dealmakers and principal investing professionals to execute deals at the highest levels. We know that no two capital markets firms are exactly the same. That’s why we built our platform to be flexible and easily configured to meet the changing needs of private equity, growth equity, venture capital, real estate, and credit investors, as well as highly acquisitive private and public companies, investment banks, and M&A advisory firms.We provide more than a CRM. No matter your organizational structure, strategy, mandate, or fund size, DealCloud creates a single source of truth for your firm’s institutional knowledge.",
//     host:"Hosted By UNCC",
//     location:"WoodwardHall 3rd Floor",
//     dateAndTime:'November 25th,2019 10:30am-2:00pm4/5',
//     imageurl:'../assets/images/dealCloud.png'
//
// };

// data storing for database end for all categories and topics



// var all=
//     [
//         WellsFargo,
//         CreditKarma,
//         TataConsultancyServices,
//         Spectrum,
//         BankOfAmerica,
//         AOSmithCorporation,
//         Cummins,
//         DealCloud
//     ];

// get connections function start
var getConnections=function()
{
  return new Promise(resolve =>{
    resolve(connectionDB.find().then(function(allConnections){
      console.log("ingetconnections"+allConnections);
      var myList=[];
       for(i=0;i<=allConnections.length-1;i++){

         let connection= connectionModel.connection(
         allConnections[i].connectionID,
         allConnections[i].companyName,
         allConnections[i].typeOfJob,
         allConnections[i].details,
         allConnections[i].host,
         allConnections[i].location,
         allConnections[i].dateAndTime,
         allConnections[i].imageurl);
         if(connection.connectionID.slice(0,2)=="CT"){
           connection.imageurl="../assets/images/company.png";
         }
         else{
           connection.imageurl="../assets/images/"+allConnections[i].connectionID+".png";
         }
         myList.push(connection);
       }
       return myList
    })
  );
  })

};
// get connections function end


// get connection function start

var getConnection=async function(connectionID)
{

  return await connectionDB.find({connectionID:connectionID}).then(function(detailedConnection){
    if(detailedConnection.length > 0){
      let connection= connectionModel.connection(
      detailedConnection[0].connectionID,
      detailedConnection[0].companyName,
      detailedConnection[0].typeOfJob,
      detailedConnection[0].details,
      detailedConnection[0].host,
      detailedConnection[0].location,
      detailedConnection[0].dateAndTime,
      detailedConnection[0].imageurl);
      if(connection.connectionID.slice(0,2)=="CT"){
        connection.imageurl="../assets/images/company.png";
      }
      else{
        connection.imageurl="../assets/images/"+detailedConnection[0].connectionID+".png";
      }
      console.log(connection.connectionID);
      return connection;
    }




 });




};
// get connection function end


module.exports.updateConnection= function(ConnectionID,connectionObj, UserID)
{
  return  connectionDB.findOneAndUpdate({UserID:UserID,connectionID:ConnectionID},{ $set: {companyName:connectionObj.companyName,details:connectionObj.details,host:connectionObj.host,location:connectionObj.location,dateAndTime:connectionObj.dateAndTime} }).then(function(detailedConnection){

    return detailedConnection;


 });

};

module.exports.removeConnection= function(ConnectionID, UserID)
{
  console.log("inremove");
  console.log(ConnectionID);
  console.log(UserID);
  return  connectionDB.findOneAndDelete({UserID:UserID,connectionID:ConnectionID}).then(function(data){
    if(data){
      return "yes";
    }
    else{
      return "no";
    }
  })

};
// exporting getConnections and getConnection
module.exports.getConnections=getConnections;
module.exports.getConnection=getConnection;
module.exports.connectionSchema=connectionSchema;
