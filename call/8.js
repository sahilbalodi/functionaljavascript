//let i=0;
function duckCount() {
  // SOLUTION GOES HERE
  let a = Array.prototype.slice.call(arguments);
  let filtered = a.filter(function (arg) {
    return Object.prototype.hasOwnProperty.call(arg,'quack');
  });
  return filtered.length;
}
module.exports = duckCount
