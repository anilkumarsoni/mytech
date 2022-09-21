export const displayAlert = (setState) => {
  setState(true);
  setTimeout(() => {
    setState(false);
  }, 3000);
};

export const sortRows = (list) =>
  list.sort(({ id: id1 }, { id: id2 }) => id2 - id1);
