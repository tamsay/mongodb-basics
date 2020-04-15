let mongo = require('mongodb')
let MongoClient = mongo.MongoClient;
let url = 'mongodb://localhost:27017/';

let internsCollection = (collectionItem)=>{
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, db)=>{
    let interndb = db.db('internDb');

    interndb.createCollection('interns', (error, response)=>{
    console.log('Interns Collection Created')
    db.close();
  })  
});
};
// internsCollection([])

let movies = [ 
    {movie: "The Banker", year: "2020", rating: 8},  
    {movie: "Bad Boys", year: "2020", rating: 7}, 
    {movie: "The Hunt", year: "2020", rating: 7}, 
    {movie: "Bloodshot", year: "2020", rating: 7.5}, 
    {movie: "First Cow", year: "2020", rating: 6.5} 
];

let moviesCollection=(moviesArray)=>{
  MongoClient.connect(url,  { useUnifiedTopology: true }, (error, client)=>{

    let moviesdb = client.db('moviesdb');
   
    moviesdb.createCollection('favoriteMovies', (error, response)=>{
    if(error) throw error;

        moviesdb.collection('favoriteMovies').insertMany(moviesArray, (err, res)=>{
          console.log(res.result)
        });
    })
});
};
moviesCollection(movies);


module.exports = {
   internsCollection: internsCollection,
   moviesCollection: moviesCollection,
}
