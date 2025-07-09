// function add(a, b) {
//   return a + b;
// }

// var add = function (a, b) {
//   return a + b;
// };

// var add = (a, b) => {
//   return a + b;
// };

// var add = (a, b) => a + b;

// var result = add(123, 5);
// console.log(result);

// (function() {
//   console.log("Prince is added");
// })();

//Way 1
// function callback() {
//   console.log("now adding is successfully completed");
// }

// var add = function (a, b, callback) {
//   var result = a + b;
//   console.log("result: " + result);
//   callback();
// };

// add(3, 10100010322220432, callback);

// WAy 2
// var add = function (a, b, prince) {
//   var result = a + b;
//   console.log("result: " + result);
//   prince();
// };

// add(2, 3, function () {
//   console.log("add completed");
// });
// add(2, 3, () => console.log("add completed"));

var monkey = function (a, move) {
  console.log("monkey is moving with " + a + " speed");
  move();
};

monkey(2, () => {
  console.log("I can not move");
});

// function move() {
//   console.log("I can not move");
// }
