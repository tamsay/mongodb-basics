let mongo = require('mongodb');

let MongoClient = mongo.MongoClient;
let url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useUnifiedTopology: true },  (error, db)=>{
    if(error) throw error;

    console.log('nothing dey happen');
    db.close();
})