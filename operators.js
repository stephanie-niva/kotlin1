//1.Extracting characters from string
let txt = "extravaganza"
console.log(txt[8])
console.log(txt[9])
console.log(txt[10])
console.log(txt[11])

//2.Inserting string
const food= "The quick fox jumped over the lazy dog";
console.log(food.slice(0,4) + "eat" + food.slice())


//3.counting no.of times
const story = "The quick brown fox jumped over the lazy dog";
console.log(story.match(/the/g).length);
console.log(story.match(/brown/g).length);
console.log()

//4.finding word in string
const string1= "The pupils are reading in the library";
const string2= "The child was sitting on the table before it fell";

let result1=string1.search("are")
let result2=string2.search("sitting")

console.log(result1);
console.log(result2);

//5.convert string to specific format
let a ="wonderful";
console.log(a.toUpperCase());
let b ="amazing";
console.log(b.toLowerCase());
let c = "undERneath";
console.log(toLowerCase());
let e = "A wonderfull world";
console.log(e.replace("w",'w'))
