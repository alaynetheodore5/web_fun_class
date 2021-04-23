// Remove array duplicates. Do not alter the original array. Return a new array with the results 'stable' (preserve the original order).
// Given [1, 2, 1, 3, 4, 2] return [1, 2, 3, 4]

// function removeDups(originalArr){
//   const newArr = [];
//   for(var i=0; i<originalArr.length; i++){
//     var exists = false;
//     for(var j=0; j<originalArr.length; j++){
//       if(i == 0 ){
//         newArr.push(originalArr[i]);
//       }
//       if(originalArr[i] === newArr[j]){
//         exists = true;
//         break;
//       }
//       if(!exists){
//         newArr.push(originalArr[i]);
//       }
//     }
//   }
//   return newArr;
// }

// console.log(removeDups([1, 2, 1, 3, 4, 2]));

//in place
function removeDuplicates(arr){
  for(i=0; i<arr.length; i++){
    console.log("inside i for loop");
    for(j=i+1; j<arr.length; j++){
      console.log("inside j", j)
      if(arr[i] == arr[j]) {
        console.log("there is a duplicate");
        arr.pop();
        // arr.pop(arr[i]);
        // i--;
      }
    }
  }
  return arr;
}

removeDuplicates([1, 2, 1, 3, 4, 2]);

function removeDupes(arr) {
  for(var i=1; i<arr.length; i++) {
      for(var j=0; j<i; j++) {
          if(arr[i] === arr[j]) {
          for(var k=i; k<arr.length-1; k++) {
              arr[k] = arr[k+1]
          }
          arr.pop();
          i--;
          }  
      }
  }
  return arr;
}

console.log(removeDupes([1, 2, 1, 3, 4, 2]));