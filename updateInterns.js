let assert = require('assert')
let mongo = require('mongodb')
let MongoClient = mongo.MongoClient;
let url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useUnifiedTopology: true }, (error, client)=>{
    let updatedb = client.db('moviesdb');

        updatedb.collection('favoriteMovies').updateOne({movie: "The Banker"}, {$set: {movie:'The Russian Five', year:'2018', rating: 10}}, (err,res)=>{
            if(err) throw err;
            assert.equal(res.result.ok, 1);
            console.log('Movie details Updated ')
        })

        updatedb.collection('favoriteMovies').find({}).toArray((err, res)=>{
            if(err) throw err;
            console.log('The updated collection includes: ', res);
            client.close();
        });
    });