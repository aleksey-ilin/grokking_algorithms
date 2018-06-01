const sum = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sum(arr.slice(1));
};

sum([1, 4, 7, 13]); 
