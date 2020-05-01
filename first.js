 function highestSubArray(arr){
  let subArr = [];
  let finalLengthsArr = [];
  let finalSubArr = [];
  let probe;

  if(arr === []){
    return undefined
  }

  for (let j = 0; j < arr.length; j++) {
    subArr.push(arr[j]);
    for (let i = j; i < arr.length; i++) {
      probe = arr[i] < arr[i + 1];
      if (probe) subArr.push(arr[i + 1])
      else break;
    }
    finalSubArr.push(subArr);
    finalLengthsArr.push(subArr.length);
    subArr = [];
  }
  const max = finalLengthsArr.indexOf(Math.max(...finalLengthsArr));
  return finalSubArr[max];
};


