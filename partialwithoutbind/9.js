
let slice = Array.prototype.slice

function logger(namespace) {
  // SOLUTION GOES HERE
  let a = function () {
    let t = [namespace].concat(slice.call(arguments));
    //console.log(namespace , ...slice.apply(arguments));
    console.log.apply(null,t);
  }
  return a;
}


module.exports = logger
