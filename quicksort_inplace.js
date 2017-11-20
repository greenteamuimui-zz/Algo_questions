const quickSort = function(array, start = 0, length = array.length -1){
  let partitionIndex;
  if (start < length){
    partitionIndex = partition(array ,start, length);
    quickSort(array, start, partitionIndex-1);
    quickSort(array, partitionIndex+1, length);
  }
  return array;
};

const partition = function(array, start, length){
  let pivot = array[length];
  let partitionIndex = start;
  for (let i = start; i < length; i++){
    if (array[i] < pivot){
      let temp = array[partitionIndex];
      array[partitionIndex] = array[i];
      array[i] = temp;
      partitionIndex++;
    }
  }
  let temp = array[partitionIndex];
  array[partitionIndex] = pivot;
  array[length] = temp;
  return partitionIndex;
};

console.log(quickSort([3,7,8,4,2,1,5]));
