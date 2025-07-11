const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send(
    "Welcome to my hotel... How can I help you? , we have list of menus"
  );
});

// app.get("/chicken", (req, res) => {
//   res.send("sure sir, i would love to serve chicken");
// });

// app.get("/idli", (req, res) => {
//   res.send("sure sir,  i would love to serve u south indian");
// });

// app.get("/chinese", (req, res) => {
//   res.send("I would love to serve u chinese");
// });

// app.post("/items", (req, res) => {
//   res.send("Data is saved");
// });

//import the router files
const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");

//Use the imported routes
app.use("/person", personRoutes);
app.use("/MenuItem", menuRoutes);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});
