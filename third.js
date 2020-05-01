const highestKinArr = (arr, k) => {
  const sorted = arr.sort((a, b) => {
    return a - b;
  });

  k = sorted.length - k;
  return sorted[k];
};
