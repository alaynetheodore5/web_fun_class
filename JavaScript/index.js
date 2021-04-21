// for(var num = 0; num < 15; num++){
//   console.log(num);
// }

//my prediction: 1, 5, 10

// actual: 1...14

// for loop start i at 1, i less than 10, increase i by 2
// for(var i = 1; i < 10; i+=2){
//   // if i is divisble by 3 with 0 left over (or evenly divided by 3)
//   if(i % 3 == 0){
//     //print to the console i
//     console.log(i);
//   }
// }

//my prediction: 

// Sum and Print 1-5
// Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
// The expected output will be: Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15
// var sum = 0;
// for(var i=1; i<=5; i++){
//   sum += i;
//   console.log("Num:" + i, "Sum:" + sum);
// }

// Print Values and Sum

// Print each array value and the sum so far

// var testArr = [6,3,5,1,2,4]
// var sum = 0;
// for(var i=0; i<=testArr.length-1; i++){
//   sum += testArr[i];
//   console.log("Value:" + testArr[i]);
//   console.log("Sum:" + sum);
// }

// Multiply each value in the array by its array position
// The expected output will be: [0,3,10,3,8,20]

var testArr = [6,3,5,1,2,4]
var newArr = [];
for(var i=0; i<=testArr.length-1; i++){
  // console.log("Value:" + testArr[i]);
  // console.log("i:" + i);
  var placeholder = i * testArr[i];
  // console.log(placeholder);
  newArr.push(placeholder);
}
console.log(newArr);
