let randomNumber =Math.floor( Math.random() * 100 + 1);
let output = document.getElementById("loveScore");
let outputText = `${randomNumber} %`;
output.innerHTML = outputText;

// var firstName = document.getElementById("firstName").value;
// var secondName = document.getElementById("secondName").value;

// console.log(firstName)
// console.log(secondName)
console.log(output) 
let btn = document.querySelector(".btn");
btn.addEventListener("click" , function(){
    location.reload();
})

if(randomNumber >= 90){
    document.querySelector("h3").innerHTML = `You love eachother like pani and puri 😉`;
}

else if (randomNumber >= 70 && randomNumber <=90) {
    document.querySelector("h3").innerHTML = `You love each other like chola and bhatura😉`;
    
}
else if (randomNumber < 70) {
    document.querySelector("h3").innerHTML = `Best of luck try more , You will both love each other soon😉`;

}