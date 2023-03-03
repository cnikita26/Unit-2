// Problem 1. 

function Character() {
  this.name='unnamed'
}
Character.prototype.setName=function(name){
  this.name=name
   }

//Character.call(setName,this)

Object.setPrototypeOf(Warrior.prototype,Character.prototype)
function Warrior(name) {
Character.call(this,name) 
this.strength=0
}
Warrior.prototype.increaseStrength=function(){
this.strength+=100
}
Warrior.prototype.decreaseStrength=function(){
    this.strength-=100
    }

    Object.setPrototypeOf(Knight.prototype,Warrior.prototype)

function Knight(name,strength) {
    Warrior.call(this,name,strength)
 this.weapon='no weapon';
}
Knight.prototype.setWeapon=function(weapon){
    this.weapon=weapon;
}
// Problem 2.

class Vehicle {
 constructor(){
    this.make='123'
 }
 setMake(x){
   this.Vehicle=x;
 }

}

class Car extends Vehicle {
  constructor(name){
    super(name)
    this.model='XYZ'
  }
}

class Truck extends Vehicle {
    constructor(name){
        super(name)
        this.bedSize=200
      }
}

class Motorcycle extends Vehicle {
    constructor(name){
        super(name)
        this.engineSize=455
      }
}

export { Character, Warrior, Knight, Vehicle, Car, Truck, Motorcycle}