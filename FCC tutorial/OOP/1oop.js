//1. How to create a dog object with two properties
let dog = {
    name: "Spot",
    numLegs: 4
};


//2. object properties can be accessed via dot notation as follows
// objectName.propertyName
console.log(dog.name);
console.log(dog.numLegs);


//3. objects can have functions as properties.
//Function properties are called methods
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
      return (`This dog has ${this.numLegs} legs.`);
    }
};
dog.sayLegs();//returns the string: This dog has 4 legs.
  


//4. Constructors are functions that create new objects. 
//They define properties and behaviors that will belong to the new object

/*
Create a constructor, Dog, with properties name, color, and numLegs that 
are set to a string, a string, and a number, respectively.
*/
function Dog() {
    this.name = "Rusty";
    this.color = "Golden";
    this.numLegs = 4;
}


//5.  the new operator is used when calling a constructor

/*The 'new' operator tells JavaScript to create an instance 
of Dog called hound
*/
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
let hound = new Dog();



//6. parameters can be passed into a constructor to make 
//creating properties more flexible

function Dog(name, color) {
    this.name  = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Spot", "Black");//creates dog with name Spot that is black
let shepherd = new Dog("Sherman", "Brown");//creates dog with name Sherman that is brown


//7. Anytime a constructor function creates a new object, 
//that object is said to be an 'instance' of its constructor

/*The instanceof operator allows you to compare an object to a constructor, 
returning true or false based on whether or not that object 
was created with the constructor. */
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
  
let myHouse = new House(5);
console.log(myHouse instanceof House);//prints true

//8. object properties instantiated in the constructor are called 
//'own' properties.
//In fact every instance of the object will have its own copy of these 'own' properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}
  
let canary = new Bird("Tweety");
let ownProps = [];
  
for (let property in canary) {
      ownProps.push(property);
}
console.log(ownProps);//prints ["name", "numLegs"]
  

//9. Prototype Properties
/*
Prototype is an object that is shared among ALL instances of the object.
think of a prototype as a "recipe" for creating objects.
*/

function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs= 4;
let beagle = new Dog("Snoopy");
  
  


//10. how to loop through an object's properties
//and determine if it is an 'own' or 'prototype' property
function Dog(name) {
    this.name = name;
}
  
Dog.prototype.numLegs = 4;
  
let beagle = new Dog("Snoopy");
  
let ownProps = [];
let prototypeProps = [];
  
for (let prop in beagle) {
    if (beagle.hasOwnProperty(prop)) {//hasOwnProperty() returns true if prop is an 'own' property and returns false otherwise
      ownProps.push(prop);
    }
    else {
      prototypeProps.push(prop);
    }
}



//11. .constructor property return what kind of object it is
/*
the constructor property is a reference to the constructor function that created the instance. 
The advantage of the constructor property is that it's possible to check for this property
to find out what kind of object it is
The constructor property can be overwritten, hence it’s better to use
the 'instanceof' method to check the type of an object.
*/
function Dog(name) {
    this.name = name;
}
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog ? true : false;
}// if 'candidate' is an instance of the Dog object, return true, else return false



//12.
/*An efficient way to declare prototype properties
is to set the prototype to a new object that already contains the properties. 
This way, the properties are added all at once as follows: */
function Dog(name) {
    this.name = name;
}
  
Dog.prototype = {
    numLegs: 4,
    eat: function() {
      console.log("eating...");
    },
    describe: function() {
      console.log(`My name is ${this.name}.`);
    }
};
//Warning!
//manually setting the prototype to a new object erases the constructor property!
  

//13.
/*
To keep the constructor property after manually creating a prototype object,
remember to define the constructor property in the prototype object as follows:
*/
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,//manually adding constructor property back inside of prototype object
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
  

//14.
/*An object inherits its prototype directly from the constructor function that created it.
You can show the prototype inheritance relationship with the 'isPrototypeOf' method
*/

function Dog(name) {
    this.name = name;
}
 
let beagle = new Dog("Snoopy");
  
console.log(Dog.prototype.isPrototypeOf(beagle));//prints 'true'
//beagle inherit its prototype from Dog
//Dog is the prototype of beagle


//15.
/*
Object.create(obj) creates a new object, and sets obj as the new object's prototype
*/
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"


//17.
/*To use prototypal inheritance,set the prototype of the subtype (or child) to be an instance of the supertype object
*/

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
//In this example, Dog is a subtype that inherits from 
//the Animal supertype
let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom" because
//beagle is a Dog and Dogs inherit all properties and methods
//of their supertype - Animal



//18. When an object inherits its prototype from another object, 
//it also inherits the supertype's constructor property
/*We can manually set a child's constructor back to its own, rather than its parent's */
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);//at this point Bird's constructor is actually Animal
Dog.prototype = Object.create(Animal.prototype);//at this point Dog's constructor is actually Animal

Dog.prototype.constructor = Dog;//Change Dog's constructor back to Dog instead of its parent, Animal
Bird.prototype.constructor = Bird

let duck = new Bird();
let beagle = new Dog();


//19. A constructor function that inherits its prototype object from a supertype
//constructor function can still have its own methods in addition to inherited methods
/*
In addition to what is inherited from its parent, you want to add behavior that is 
unique to subtype. In this example, we will add a bark() function to Dog's prototype.
*/
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

let animal1 = Object.create(Animal.prototype);
Dog.prototype = Object.create(animal1);//Dog inherits Animals prototype methods
Dog.prototype.constructor = Dog;//reset Dog's constructor from Animal to Dog

//Functions are added to a subclass's prototype the same 
//way as any constructor function
Dog.prototype.bark = function() {
    console.log("Woof!");
};//Added a new function to Dog prototype. Now Dogs can eat() and bark()

let beagle = new Dog();
beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"


//20. It's possible to override an inherited method.
//It's done the same way as adding a prototype function 
//- by adding a method to ChildObject.prototype using the same method name
//as the one to override.
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = () =>  "Alas, this is a flightless bird.";
//The above line makes Penguin override the Bird's fly() function

let penguin = new Penguin();
console.log(penguin.fly());//prints: Alas, this is a flightless bird.


//21. A mixin allows other objects to use a collection of functions.
/*Note how the mixin allows for the same fly method to be reused by 
unrelated objects bird and boat. The objects do not have an inheritance relationship 
*/
let bird = {
  name: "Donald",
  numLegs: 2
};
let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("I'm Gliding!");
  };
};

glideMixin(boat);
boat.glide();
glideMixin(bird);
bird.glide();//both bird and boat can call glide()


//22.
/*
The simplest way to make this public property private is by creating
a variable within the constructor function. This changes the scope of 
that variable to be within the constructor function versus available globally.
This way, the variable can only be accessed and changed by methods also within
the constructor function. 
*/
function Bird() {
  var weight = 15;//private variable

  this.getWeight = function() {
    return weight;//this method can return the value of weight 
  }
}


//23. IIFEs are functions that are invoked imediately when they are reached in code
(function() {
  console.log("this function is imediately invoked");
})();
//To create an IIFE, wrap a function inside parenthesis followed by two more
//parenthesis and a semicolon
