// 5.	Finally, in your updateInterns.js file, update the movie with title "The Banker", to any movie of your choice, ensure all other properties (year and rating) are updated accordingly. Log the updated collection to the console and take a screenshot. Include your screenshot in your image.md file.

let assert = require('assert')
let mongo = require('mongodb')
let MongoClient = mongo.MongoClient;
let url = 'mongodb://localhost:27017/';

let deleteDocument=()=>{
MongoClient.connect(url, { useUnifiedTopology: true }, (error, client)=>{
    let deletedb = client.db('moviesdb');

        // deletedb.collection('favoriteMovies').deleteOne(entry, (err,res)=>{
        //     if(err) throw err;
        // })

        deletedb.collection('favoriteMovies').deleteMany({movie: /./}, ((err, res)=>{
            if(err) throw err;
        }));

            deletedb.collection('favoriteMovies').find({}).toArray((err, res)=>{
                console.log('Collection Deleted');
                client.close();
            }); 
    })
};
 deleteDocument()