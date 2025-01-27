//import mongoclient from mongodb
const { MongoClient } = require("mongodb");

//bring in dotenv and run config()
require("dotenv").config();
//process.env.NAME OF WHATEVER
const CONNECTION_STRING = process.env.CONNECTION_STRING;
//check to see .env is working
//console.log(CONNECTION_STRING);
//Create a new MongoClient using the string
const client = new MongoClient(CONNECTION_STRING);
//try to connect to the database
try {
  client.connect();
  console.log("Connect to the database");
} catch (error) {
  console.error(error);
}

//list all the databases
async function listDatabases(client) {
  databaseList = await client.db().admin().listDatabases();
  console.log("Databases: ");
  console.log(databaseList);
}

listDatabases(client);

//get movie collection
const db = client.db("sample_mflix");
//method that takes a db and lists all of the collections
async function listCollections(db) {
  collections = await db.listCollections().toArray();
  console.log("Collections: ");
  collections.forEach((collection) => console.log(collection.name));
}
//--UNCOMMENT THIS TO SEE ALL COLLECTIONS IN THE CONSOLE
//listCollections(db);
//lets create a movies object
const movies = db.collection("movies");

//lets find all the movies
async function findAllMovies() {
  //.find returns all of the records that match {}
  const result = await movies.find({});
  //turn the response into an array
  const moviesArray = await result.toArray();
  //lets say I wanted only the movies with a year of 1972
  //I just filtered this on my API server instead of on the database.
  //I got EVERY movie back the from the database and then I filtered in my Node application
  //DO NOT DO THIS.
  const filteredMovies = moviesArray.filter((movie) => movie.year === 1972);
  console.log(filteredMovies);
}
//--UNCOMMENT THIS TO SEE ALL MOVIES IN THE CONSOLE
//findAllMovies();

async function findMoviesByGenreAndYear(genre, year) {
  const query = { year: year, genres: genre };
  const result = movies.find(query);
  const moviesArray = await result.toArray();
  console.log(moviesArray);
}
//--UNCOMMENT THIS TO SEE ALL MOVIES THAT ARE DRAMA AND 1972 IN THE CONSOLE
//findMoviesByGenreAndYear("Drama", 1972);

const newMovie = {
  title: "Elden Ring",
  year: 2022,
  director: "Steven Spielberg",
};

async function insertMovie(movie) {
  const result = await movies.insertOne(movie);
  console.log(`New Movie created with the following id: ${result.insertedId}`);
}

//--UNCOMMENT THIS TO CREATE A NEW MOVIE
//insertMovie(newMovie);

async function updateMovie(title, year) {
  //an update operation is two steps, retrieve the record, then change
  const query = { title: title };
  const update = { $set: { year: year } };
  const result = await movies.updateOne(query, update);
  console.log(`${result.matchedCount} records matched ${query}`);
  console.log(`${result.modifiedCount} records were changed`);
}
//--UNCOMMENT THIS TO UPDATE A MOVIE
//updateMovie("Elden Ring", 2026);
