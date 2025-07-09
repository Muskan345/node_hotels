const mongoose = require("mongoose");

//Define the MongoDB connnection URL
const mongoURL = "mongodb://localhost:27017/hotels";

//Set Up the MongoDB Connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  //useUnifiedTopology: true,
});

//Get the default connection
//Mongoose maintains  a default connection object representing the MongoDB connection
const db = mongoose.connection;

//Define event listeners for database connection
db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

//Export the database connection
module.exports = db;
