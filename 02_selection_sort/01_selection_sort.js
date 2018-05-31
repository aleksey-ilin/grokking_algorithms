const findSmallest = (arr) => {
  let smallest= arr[0];
  let smallestIndex = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }
  const smallestIndex = findSmallest(arr);
  const smallest = arr[smallestIndex];
  const newArr = arr.filter(element => element !== smallest);
  return [smallest].concat(selectionSort(newArr));
};

findSmallest([11, 4, 65, 3, 87, 2]);
selectionSort([11, 4, 65, 3, 87, 2, 1]);
