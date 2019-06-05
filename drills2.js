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

function findById(items, idNum) {
  //find item with id idNum, return that item (object)
  let result;
  items.forEach(function(item) {
    console.log(item);
    if (item.id === idNum) {
      result = item;
    }
  });
  return result;
}

const data = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

console.log(findById(data, 22));
