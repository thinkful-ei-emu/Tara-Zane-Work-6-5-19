function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    "olly olly": "oxen free",
    sayHello: function() {
      return "Hello!";
    }
  };
}

const stuff = createMyObject();
console.log(stuff);
console.log(stuff.sayHello());