/**
 * Direction:
 * - combine the data between numbersOne and numberTwo and get the deleted data between originalData and the result of merge
 * - divide the data between total value of numbersOne and numbersTwo that already merge, and total value of deletedData
 *
 * Expected Result:
 * 2.21
 */

let originalData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numbersOne = [3, 4, 5, 7, 9];
let numbersTwo = [1, 2, 3, 5, 9]

const result = (originalData, numbersOne, numbersTwo) => {
    // Your Code Here
    const mergedData = [...numbersOne, ...numbersTwo];
    const deletedData = originalData.filter(data=>!mergedData.find(x=>x===data));
    console.log(deletedData)
    return sum(mergedData) / sum(deletedData);
}

const sum = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};

console.log(result(originalData, numbersOne, numbersTwo));