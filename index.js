function Driver(name, age, workExperience) {
    this.name = name;
    this.age = age;
    this.workExperience = workExperience;
    this.driveMyCar = function(){
        alert("Your Driver is " + this.name);
        alert("His " + this.age + " yrs old");
        alert("His work experience is " + this.workExperience)
        document.getElementById("Name").innerText = "Name: " + this.name;
        document.getElementById("Age").innerText = "Age: " + this.age;
        document.getElementById("WorkEXP").innerText = "WorkEXP: " + this.workExperience;
    }
    this.carWash = function(){
        alert("Your Driver is " + this.name);
        alert("His " + this.age + " yrs old");
        alert("His work experience is " + this.workExperience)
        document.getElementById("Name2").innerText = "Name: " + this.name;
        document.getElementById("Age2").innerText = "Age: " + this.age;
        document.getElementById("WorkEXP2").innerText = "WorkEXP: " + this.workExperience;
    }
}

const Toto = new Driver("Toto", 40 ,"Taxi Driver");
const Boy = new Driver("Boy", 50 ,"Bus Driver");

let myDriver = document.getElementById("DriveMyCar")
myDriver.addEventListener("click", function(){
    Toto.driveMyCar();
});
let carWasher = document.getElementById("CarWash");
carWasher.addEventListener("click", function(){
    Boy.carWash();
});