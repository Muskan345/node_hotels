const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

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
app.use("/person", personRoutes);

const menuRoutes = require("./routes/menuRoutes");
app.use("/MenuItem", menuRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
