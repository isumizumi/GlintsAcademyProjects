console.log("Soal No 1 (Animal Class)")
console.log();

class Animal {
    // Code class di sini
    constructor(name) {
      this._name = name;
      this._legs = 4;
      this._cold_blooded = false;
    }
    
    get name() {
      return this._name
    }

    get legs() {
      return this._legs
    }

    set legs(newvalue) {
      this._legs = newvalue
    }
    
    get cold_blooded() {
      return this._cold_blooded
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false


// Code class Ape dan class Frog di sini
 
class Ape extends Animal {
  constructor(name, amount){
    super(name)
    this._legs = amount
  } 

  yell() {
    console.log("Auooo");
  }
}

class Frog extends Animal {
  constructor(name){
    super(name)
  } 

  jump() {
    console.log("hop hop");
  }
}

var sungokong = new Ape("kera sakti", 2)
sungokong.yell() // "Auooo"
console.log(sungokong.name);
console.log(sungokong.legs);
console.log(sungokong.cold_blooded);
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 
console.log(kodok.name);
console.log(kodok.legs);
console.log(kodok.cold_blooded);



console.log();
console.log("Soal No 2 (Function to Class)")
console.log();

// function Clock({ template }) {
  
//   var timer;

//   function render() {
//     var date = new Date();

//     var hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     var mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     var secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     var output = template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   this.stop = function() {
//     clearInterval(timer);
//   };

//   this.start = function() {
//     render();
//     timer = setInterval(render, 1000);
//   };

// }

// var clock = new Clock({template: 'h:m:s'});
// clock.start(); 


class Clock {
  constructor({template}) {
    this.temp = template
  }   

  render(){
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = this.temp
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop(){
    clearInterval(this.timer)
  }

  start(){
    this.render()
    this.timer = setInterval(() => this.render(), 1000)
  }
}
  
var clock = new Clock({template: 'h:m:s'});
clock.start();  