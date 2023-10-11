
// Question 1
// Falsy or Truthy 

// function filteroutFalsy (elem1 , elem2){
//     // We have to use the ! as if statements will run if the statement 
//     // is true. To find the falsy value we will usually use !!
//     return (!elem1) ? elem1 : elem2;
// }

// console.log(filteroutFalsy(0, 500))
// console.log(filteroutFalsy(false, 100))
// console.log(filteroutFalsy(true, "DOG"))

// Question 2
// Array Length 

function arrLength(Length){
    // length is used to calculate the amount of entriees in the array 
    return Length.length
}

console.log(arrLength([1,2,3]))
console.log(arrLength([5,0,4,1]))
console.log(arrLength([]))