'use strict'

function makeStudentsReport(data) {
  let result = [];
  data.forEach(function(student) {
    result.push(`${student.name}: ${student.grade}`)
  })
  return result;
}

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

console.log(makeStudentsReport(testData));