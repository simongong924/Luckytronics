var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
// var url = 'mongodb://localhost:27017/myproject';
var url = "mongodb+srv://admin_simon:1q2w3e4r@luckytronicsdb-cdpf5.mongodb.net";

// //create the user collections
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("LuckytronicsDB");
//   dbo.createCollection("users", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("LuckytronicsDB");
  var myobj = { name: "john", address: "john@me.com" };
  dbo.collection("users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
