
// (function(exports, module, require, __filename, __dirname){}) // full module are incapsulated

function log(message){
    console.log(message);
}

// export as export object, log and name will be it's method and property
// module.exports.log = log;
// module.exports.name = name;
console.log(__filename);
console.log(__dirname);

// export as function. full exports will be function.
module.exports = log; 

// console.log(module);