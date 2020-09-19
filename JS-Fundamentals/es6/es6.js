console.log("Soal No 1 (Mengubah fungsi menjadi fungsi arrow)")
console.log();

const golden = () => { console.log("this is golden!!") }
 
golden()



console.log();
console.log("Soal No 2 (Menyederhanakan menjadi Object literal di ES6)")
console.log();

const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName() {
      console.log(firstName + " " + lastName)
    }
  }
}
 
//Driver Code 
newFunction("William", "Imoh").fullName() 



console.log();
console.log("Soal No 3 (Destructuring)")
console.log();

const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation } = newObject;

// Driver code
console.log(firstName, lastName, destination, occupation)



console.log();
console.log("Soal No 4 (Array Spreading)")
console.log();

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)



console.log();
console.log("Soal No 5 (Template Literals)")
console.log();

const planet = "earth"
const view = "glass"
var before = `Lorem ${view} dolor sit amet consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
 
// Driver Code
console.log(before) 
