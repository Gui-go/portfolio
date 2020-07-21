// import arg from './articles/art.json';

var arg = require('./articles/artmap.json')

// console.log(JSON.stringify(arg))
arg.map((i) => console.log(
    JSON.stringify(i.artid)
))

console.log(arg)