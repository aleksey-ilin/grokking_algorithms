const binary_search = (list, item) => {
  let low = 0;
  let high = list.length;
  let mid = 0;
  let guess = 0;
  
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    guess = list[mid];
    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    }
    low = mid + 1;
  }
};
