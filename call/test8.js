let duckCount = require('./8');

console.log("test for  empty object ",duckCount({})=== 0);
console.log("test for 1 quack property ",duckCount({quack:"abc"}) === 1);
console.log("test for no quack property ",duckCount({abc:"abc"}) === 0);
console.log("test for 1 object with quack property ",duckCount({quack:"123"},{abc:"123"}) === 1);
console.log("test for 2 object with quack property ",duckCount({quack:"123"},{quack:"123"}) === 2);
