/**
 * Direction:
 * Find all fields that have different value & must can detect all field dynamically
 *
 * Expected Result:
 * ['firstName', 'lastName']
 *
 */
 const data = [
  { firstName: 'Adi', lastName: 'Nugroho', age: 25 },
  { firstName: 'Deddy', lastName: 'Dores', age: 25 },
];

const result = (data) => {
  const keys = Object.keys(...data);
  const arr = [];
  data.forEach(element => {
    const obj = Object.keys(element).filter(k => element[k] !== data[0][k]);
    if (obj.length !== 0) {
      arr.push(...obj);
    }
  });
  return arr;
};

console.log(result(data));