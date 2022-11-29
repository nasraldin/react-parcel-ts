// export const groupBy = <T>(arr: T[], keys: (keyof T)[]): { [key: string]: T[] } => {
//   return arr.reduce((storage, item: any) => {
//     const objKey = keys.map((key) => `${item[`${key}`]}`).join(':');
//     if (storage[`${objKey}`]) {
//       storage[`${objKey}`].push(item);
//     } else {
//       storage[`${objKey}`] = [item];
//     }
//     return storage;
//   }, {} as { [key: string]: T[] });
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const groupBy = (data: any, key: never) => {
  // `data` is an array of objects, `key` is the key (or property accessor) to group by
  // reduce runs this anonymous function on each element of `data` (the `item` parameter,
  // returning the `storage` parameter at the end
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.reduce(function (storage: any, item: []) {
    // get the first instance of the key by which we're grouping
    const group = item[`${key}`];

    // set `storage` for this instance of group to the outer scope (if not empty) or initialize it
    storage[`${group}`] = storage[`${group}`] || [];

    // add this item to its group within `storage`
    storage[`${group}`].push(item);

    // return the updated storage to the reduce function, which will then loop through the next
    return storage;
  }, {}); // {} is the initial value of the storage
};
