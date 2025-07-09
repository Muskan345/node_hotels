// var fs = require("fs");
// var os = require("os");

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile("greeting.txt", "Hi " + user.username + "! \n", () => {
//   console.log("file is created");
// });

// console.log(os);

// var fs = require("fs");

// const folderName = "Users";

// try {
//   if (!fs.existsSync(folderName)) {
//     fs.mkdirSync(folderName);
//   }
// } catch (err) {
//   console.error(err);
// }

// fs.appendFile("test.txt", "I got angry", () => {
//   console.log("tanu ko peetooo");
// });

const notes = require("./notes.js");
var _ = require("lodash");

console.log("server file is available");

var a = notes.age;
console.log("age: " + a);

var name = notes.name;
console.log(name);

var res = notes.sub(9, 5);
console.log(res);

var result = notes.addNumber(a + 18, 10);
console.log("result is now" + result);

var data = ["person", "person", 1, 2, 1, 2, "name", "age", 2, 0, false];
var filter = _.compact(data);
console.log(filter);
