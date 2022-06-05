/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 * 
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
 const students = [
  { firstName: 'Kai', lastName: 'Lyons' },
  { firstName: 'Belle', lastName: 'Norton' },
  { firstName: 'Finnley', lastName: 'Rennie' },
  { firstName: 'Tatiana', lastName: 'Dickerson' },
  { firstName: 'Peyton', lastName: 'Gardner' },
];
const groups = 3;

function result(students, groups) {
  // your code here
  const newArr = [];
  students = students.sort((a,b) => a.firstName > b.firstName ? 1 : -1);
  const modulo = students.length%groups;
  for (let index = 0; index < students.length; index++) {
    if (index % modulo === 0) {
      newArr.push(students.slice(index, modulo+index));
    }
  }
  return newArr;
}

console.log(result(students, groups));