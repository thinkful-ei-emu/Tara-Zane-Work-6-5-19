'use strict';

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
    obj.status='In Summer School';
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



function validateKeys(object,expectedKeys){
  if(Object.keys(object).length!==expectedKeys.length){
    return false;
  }
  else{
    for(let i=0;i<expectedKeys.length;i++){
      if (!(expectedKeys[i] in object)){
        return false;

      }
   
    }
    return true;
   
  }
}

const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const testKeys = ['id', 'name', 'age', 'city'];

console.log(validateKeys(objectB,testKeys));
