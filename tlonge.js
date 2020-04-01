const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;
let url = 'mongodb://localhost:27017/tlonge';

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db){
    if(err) throw err;


    console.log('Database created by tlonge');
    db.close();
});
