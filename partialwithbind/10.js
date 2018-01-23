let slice = Array.prototype.slice
module.exports = function(namespace) {
  // SOLUTION GOES HERE
  let a = function () {
    let b = slice.bind(arguments);
    let t =  [namespace].concat(b());
    console.log.apply(null , t);

  //  console.log(namespace , ...(b));
  }
  return a;
}
