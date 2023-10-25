
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

// // Question 5
// // Add up numbers from a single number 

// function progressiveSum(num){
//     let sum = 0;
//     // Starts the loop from 1 to take away the zero value
//     // Put <= on the num to get the final value of the array 
//     for (let i = 1 ; i <= num ; i++){
//         sum = sum + i
//     }
//     return sum;
// }

// console.log(progressiveSum(3))
// console.log(progressiveSum(4))

// // Question 6
// // Calculate time

// function calcTime(time){
// // Math.floor is used to remove the decimal by rounding off the number
// let timeMinutes = Math.floor(time /60)
// let timeSeconds =  time % 60;

// // If the lenght of minutes equals to 1 = add a zero 
// // infront of the minutes section 
// if (timeMinutes.toString().length === 1){
//     timeMinutes = '0' + timeMinutes
// }

// return timeMinutes + ":" + timeSeconds;
// }

// console.log(calcTime(70))

// // Question 7
// // Find Largest Number 

// function getMax (arr) { 
//     // Create max variable 
//     let max = arr[0];
//     // Loop between every element in the array 
//     for (let i = 0; i < arr.length; i++){
//         // Loop through every element and if the element is bigger than 
//         // The number on the array it will be entered onto max 
//         if (arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max;
// }

// console.log(getMax([5,100,0]))
// console.log(getMax([1,2,3]))

// // Question 8
// // Reverse String 

// Incrementing Method 

// function reverseString(string){
//     let stringReversed = "";

//     for (let i = 0 ; i  < string.length ; i++){
//         stringReversed = string[i] + stringReversed;
//     }

//     return stringReversed;
// }

// console.log(reverseString("Ibrahim"))

// Decrementing Method 

// function reverseString (string){
//     // Create a new string variable that will hold the reverse method
//     let newString = "";

//     // Loop through the whole lenght of the string 
//     // As long as the loop is greater than 0 it will keep running 
//     // It will always decrement by -1 
//     for ( let i = string.length - 1 ; i >= 0 ; i--){
//         newString += string[i];
//     }

//     // Return the new string after looping
//     return newString;
// }

// console.log(reverseString("abc"))
// console.log(reverseString("Ibrahim"))

// // Question 9
// // Turn every element in an array to 0 

// For Loop
// function convertToZero(arr){
//     for ( let i = 0 ; i < arr.length; i++){
//         arr[i] = 0;
//     }
//     return arr;
// }

// console.log(convertToZero([1,2,3,4,5]))

// // Fill 
// function convertToZero(arr){
//         return new Array(arr.length).fill(0)
//     }

// console.log(convertToZero([1,2,3,4,5]))

// Mapping 
// function convertToZero(arr){
//     // Map will convert everything in the array into the value 
//     // on the right side of this operations. 
//     return arr.map(elem => 0)
// }

// console.log(convertToZero([1,2,3,4,5]))


// // Question 10
// // remove apples array 

// function removeApples(arr){
//     // Create a new variable that will hold the no apple element 
//     let noApples = []
//     // Loop through the remove apple array 
//     for ( let i = 0 ; i < arr.length ; i++){
//         // Check if the current element does not have apple 
//        if (arr[i] !== 'Apple'){
//         // Push the other elements into the no apples array 
//         noApples.push(arr[i]);
//        }
//     }
//     // Return the no apple 
//     return noApples;
// }

// console.log(removeApples(['Banana', 'Apple' ,'Orange']))
// console.log(removeApples(['Banana', 'Tomato' ,'Orange']))

// Array Filter 
// function removeApples(arr){
//     // If the element is != to apple then remove it from the array 
//    return arr.filter (elem => elem !== 'Apple')
// }

// console.log(removeApples(['Banana', 'Apple' ,'Orange']))
// console.log(removeApples(['Banana', 'Tomato' ,'Orange']))


// // Question 11
// // Filter out Falsy Values

// function filteroutFalsy(arr){
//     return arr.filter (elem => !!elem === true)
// } 

// console.log(filteroutFalsy(['Tomato', 'Apple', 'Banana', false]));
// console.log(filteroutFalsy(['Tomato', 'Apple', 0, false]));

// // Question 12
// // Truthy to True , Falsy to False

// function convertToBoolean (arr){
//     return arr.map (elem => !!elem)
// }

// console.log(convertToBoolean(['Ibby' , 0 , 'Test']))