let logger = require('./9');
let temp = logger("a");
console.log("test for all different string ",temp("b" , "c") === "abc");
console.log("test for same string  ",temp("a") === "aa");
console.log("test for empty ",temp() === "a");
console.log("test for empty ",temp("") === "a");
