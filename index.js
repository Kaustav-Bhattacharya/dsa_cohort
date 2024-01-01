//Arrays are data structures storing elements with indices,
//ensuring homogeneous types, efficient memory use,
//and constant-time access.

//find min and max of an array

let array = [2,4,3,6,5,1];

let getMaxAndMin = (arr) => {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  return [min , max];
};


let [min , max] = getMaxAndMin(array);

console.log(min , max);