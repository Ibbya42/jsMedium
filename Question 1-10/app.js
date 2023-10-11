
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

// function arrLength(Length){
//     // length is used to calculate the amount of entriees in the array 
//     return Length.length
// }

// console.log(arrLength([1,2,3]))
// console.log(arrLength([5,0,4,1]))
// console.log(arrLength([]))

// Question 3
// Get Last element of Array 

// function lastElem (arr) {
//     // Need to minus the length by 1 as the index starts from 0
//     return arr[arr.length -1]
// }

// console.log(lastElem([3,2,0,6,2]))
// console.log(lastElem(["Dog" , "Cat" , "Sheep"]))

// Question 4
// Sum of Array 

// function arrSum(arr){
//     // Create a variable to hold the sum 
//     let sum = 0;
//     // Loop through every element in the array 
//     for ( let i = 0; i < arr.length ; i++){
//         // The sum will equal to the the array values
//         sum = sum + arr[i]
//     }
//     // Return Sum after all the elements have been looped through
//     return sum;
// }

// console.log(arrSum([2,2,2]))
// console.log(arrSum([100,200,500]))