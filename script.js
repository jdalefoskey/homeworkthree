
let generateBtn = document.querySelector("#generate");

//first click function to gather user criteria
generateBtn.addEventListener("click", function(){ 

//set password length/complexity
let complexity = prompt("How Many Character would you like?");

//possible password values
let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

let password = "";

//create for loop to choose password characters
for(var i = 0; i < complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

//add password to textbox/display area
document.getElementById("password").value = password;











});




