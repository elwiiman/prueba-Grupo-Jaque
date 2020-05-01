const operation = (n, m) => {

  if(n <0 || m< 0){
    
    return 0;
  }

  if( Number.isInteger(n) === false || Number.isInteger(m) === false){
    return 0;
  }

  let sum = 0;
  let i = 0;
  
  while (i < n) {
    sum += n + i;
    i += 1;
  }
  sum += m;
  return sum;
};
