
function operation() {
  //let count = 0;
  for (let i = 0; i < 100000; i++) {
    console.log(i);
  }
}
function repeat(operation, num) {
  // modify this so it can be interrupted
  if (num <= 0) return
  operation();
  setTimeout(function () {
    repeat(operation,--num)
  },0);
}

module.exports = repeat
repeat(operation,5);
