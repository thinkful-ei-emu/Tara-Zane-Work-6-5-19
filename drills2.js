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

function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe: function(){
      return `${this.name} is a ${this.race} from ${this.origin} who uses a ${weapon}.`;
    },
    evaluateFight: function(character) {
      let thisDamage = character.attack - this.defense;
      let characterDamage = this.attack - character.defense;
      return `You opponent takes ${characterDamage} damage and you receive ${thisDamage} damage.`;
    }
  };
}

const gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'staff');

const frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'Sting and Barrow Blade');

const bilbo = createCharacter('Bilbo Baggins', 'Bilbo', 'Hobbit', 'The Shire', 2, 1, 'The One Ring');

const aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril');

const legolas = createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'bow and arrow');

let characters = [gandalf, frodo, bilbo, aragorn, legolas];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', '1', '5', 'Hadhafang'));

console.log(characters.find(element => element.nickname === 'aragorn').describe());

let hobbitCharacters = characters.filter(element => element.race === 'Hobbit');

let strongCharacters = characters.filter(element => element.attack > 5);

console.log(strongCharacters);


const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr,query){
  let didBreak;
  //looping through arr array
  for(let i=0;i<arr.length;i++){
    didBreak=false;
    // looping through the keys in query
    for(let key in query){
      // if the key is in arr
      if(key in arr[i]){
        if(!(query[key]===arr[i][key])){
          console.log('Does Not Match');
          didBreak=true;
          break;
        }
        else{
          console.log('hello');

        }
      }
      
      else{
        didBreak=true;
        break;
      }  
      
      
      
    }
    if(!(didBreak)){
      return arr[i];


    }
   
   
  }
  return null;
}

console.log(findOne(HEROES, { id: 1 }));
console.log(findOne(HEROES, { id: 10 }));
console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
console.log(findOne(HEROES, { squad: 'Justice League' }));


// Next problem

const database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne:function (query){
    
    let didBreak;
    //looping through arr array
    for(let i=0;i<this.store.heroes.length;i++){
      didBreak=false;
      // looping through the keys in query
      for(let key in query){
        // if the key is in arr
        if(key in this.store.heroes[i]){
          if(!(query[key]===this.store.heroes[i][key])){
            console.log('Does Not Match');
            didBreak=true;
            break;
          }
          else{
            console.log('hello');
  
          }
        }
        
        else{
          didBreak=true;
          break;
        }  
        
        
        
      }
      if(!(didBreak)){
        return this.store.heroes[i];
  
  
      }
     
     
    }
    return null;
  }
};

database.findOne({id:1});



