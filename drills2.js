'use strict'

function makeStudentsReport(data) {
  let result = [];
  data.forEach(function(student) {
    result.push(`${student.name}: ${student.grade}`);
  });
  return result;
}

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

console.log(makeStudentsReport(testData));


function enrollInSummerSchool(students){
  
  students.forEach(function(obj){
    obj.status='In Summer School'
  });
  return students;
}
const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];


console.log(enrollInSummerSchool(studentData));
