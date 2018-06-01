const max = (list) => {
  const iter = (biggest, list) => {
    if (list.length === 0) {
      return biggest;
    }
    const newlist = list.slice(1);
    if (list[0] > biggest) {
      return iter(list[0], newlist);
    }
    return iter(biggest, newlist);
  };
  return iter(0, list);
};

max([1, 5, 3, 76, 78]);
