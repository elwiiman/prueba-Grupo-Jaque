const deleteDuplicates = (arr) => {
  const noDuplicatesArr = arr.filter((item, i) => arr.indexOf(item) === i);
  return noDuplicatesArr
};
