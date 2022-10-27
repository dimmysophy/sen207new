const cars = 'Toyota'
console.log(cars)

let books = "Maths"
console.log(books)
var name = "Henry"
console.log(name)

let girl = "Miracle"
console.log("Hello " + girl)

//check the value of a variable
console.log(typeof(girl))

let number = 12

const arr = ["Henry", "Victor", "Peter"]

console.log(typeof(number))
console.log(typeof (arr))

const henry = {
 firstname : "Awa",
 lastname : "Peter",
 mail : "henry@gmail.com"

}
console.log(henry.firstname)

//algotithm to determine the smallest common
const smallestCommons = arr => {
 let max = Math.max(...arr);
 let min = Math.min(...arr);
 // Initially the solution is assigned to the highest value of the array
 let sol = max;




 for (let i = max - 1; i >= min; i--) {
   // Each time the solution checks (i.e. sol%i===0) it won't be necessary
   // to increment 'max' to our solution and restart the loop
   if (sol % i) {
     sol += max;
     i = max;
   }
 }
 return sol;
};




// test here
smallestCommons([1, 5]);








//Define an object with the following attributes
//name, age, state, country and access each of the value stored
