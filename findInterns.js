let assert = require('assert')
let mongo = require('mongodb')
let MongoClient = mongo.MongoClient;
let url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useUnifiedTopology: true }, (error, client)=>{
    let finddb = client.db('moviesdb');

    finddb.collection('favoriteMovies').findOne({}, ((err, res)=>{
        if(err) throw err;
        console.log('The first document in the collection is: ', res);
    }));
    
    finddb.collection('favoriteMovies').find({rating:7}).toArray((err, res)=>{
        assert.equal(err, null)
        if(err) throw err;
        console.log('These are the movies with rating of 7: ', res);
    })
    
    finddb.collection('favoriteMovies').find({}, {projection:{_id:0, movie:1}}).toArray((err, res)=>{
        if(err) throw err;
        console.log('These are all the movie titles in the collection: ', res);
    })
});