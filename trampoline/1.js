function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) return

  else {
    operation();
    return repeat.bind(null,operation, --num)
  }
}

function trampoline(fn) {
  // You probably want to implement a trampoline!
  while (typeof fn === "function") {
    fn = fn();
  }
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  let bound = repeat.bind(null,operation,num);
  trampoline(bound);
  //return repeat(operation, num)
}
