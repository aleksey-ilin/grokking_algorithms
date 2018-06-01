const count = (list) => {
  if (list.length === 0) {
    return 0;
  }
  return 1 + count(list.slice(1));
};

count([1, 5, 3, 76, 7]);
