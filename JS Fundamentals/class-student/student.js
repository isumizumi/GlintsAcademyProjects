//ES6(OOP)
class Student {
    constructor(name, age, dateOfBirth, gender, studentId, hobbies) {
      this.names     = name;
      this.age       = age;
      this.date      = dateOfBirth;
      this.gender    = (gender === "Male" || gender === "Female") ? gender : "Wrong input";  
      this.studentId = studentId;
      this.hobbies   = hobbies;
    }
    
    setName(newName) {
      this.names      = newName;
    }
    
    setAge(newAge) {
      this.age       = newAge;
    }
    
    setDate(newDate) {
      this.date      = newDate;
    }
    
    setGender(newGender) {
      // console.log(newGender)
      if(newGender === "Male" || newGender === "Female"){
        return this.gender = newGender;
      } else{
        // alert("Gender harus berupa Male atau Female");
        console.log("Gender harus berupa Male atau Female")
      }
    }
    
    setStudentId(newStudentId) {
      this.studentId = newStudentId;
    }
    
    getName() {
      return this.names;
    }
   
    getAge() {
      return this.age;
    }
    
    getDate() {
      return this.date;
    }
    
    getGender() {
      return this.gender;
    }
    
    getStudentId() {
      return this.studentId;
    }
    
    getHobbies() {
      return this.hobbies;
    }
    
    getData() {
      // return this.names + " | " + this.age + " | " + this.date + " | " + this.gender + " | " + this.studentId + " | " +  this.hobbies;
      return Object.values(this)
    }
  
    addHobby(newHobbies) {
      this.hobbies.push(newHobbies);
    }
    
    removeHobby(deleteHobbies) {
      this.hobbies.splice(this.hobbies.indexOf(deleteHobbies),1);
    }
  }
  
  let Murid = new Student("Bunga", 27, "7 Februari 1989", "Banci", "2016001", ["Bermimpi"]);
  Murid.setGender("Banci")
  console.log(Murid.getData());
  Murid.setGender("Female")
  console.log(Murid.getData());
  Murid.addHobby("Tidur");
  console.log(Murid.getData());
  Murid.removeHobby("Tidur");
  console.log(Murid.getData());