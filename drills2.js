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

const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return this.water/this.flour*100;
  }
};

console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());



let myObj={
  foo: 'bob',
  bar: 'bar',
  fum: 'fum',
  quux: 'quux',
  spam: 'spam',
};

function writeOver(obj){
  for(const key in obj){
    console.log(`${key} ${obj[key]}`);
  }

}
writeOver(myObj);

const hobbitLife = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(hobbitLife['meals'][3]);



const scrubs1={
  name:'jd',
  jobTitle:'Doctor',
  boss: 'Bob'
};

const scrubs2={
  name:'turk',
  jobTitle:'Surgeon',
  boss: 'Bob'
};

const scrubs3={
  name:'Carla',
  jobTitle:'Nurse',
  boss: 'Bob'
};

const scrubs4 = {
  name: 'Bob',
  jobTitle: 'Chief of Medicine'
};

const scrubArray=[scrubs1,scrubs2,scrubs3, scrubs4];

function displayArray(arr){
  arr.forEach(function(item){
    if ('boss' in item) {
      console.log(`${item.name} ${item.jobTitle} reports to ${item.boss}.`);
    }
    else {
      console.log(`${item.jobTitle} ${item.name} doesn't report to anybody.`);
    }
  });
  
}

displayArray(scrubArray);


function decode(word){
  const cipher={
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };
  if(!(word[0] in cipher)){
    return ' ';
  }
  else{
    let firstLetter = word[0];
    console.log(firstLetter);
    let codeIndex = cipher[firstLetter];
    console.log(codeIndex);
    console.log(word[codeIndex]);
    return word[codeIndex];
  }

}

function decodeWords(string){
  const wordsArray=string.split(' ');
  let result='';
  wordsArray.forEach( function(word){
    result+=decode(word);
  }
  );
  return result;
}


