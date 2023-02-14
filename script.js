/* Declare variables below to save the different sections (divs) of your story*/
let gameOfThronePicture = document.querySelector(".game-of-thrones-picture");
let optionOneButton = document.querySelector(".option-one");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoButton = document.querySelector(".option-two");
let optionTwoScreen = document.querySelector(".option-two-screen"); 
let daenerys = document.querySelector(".daenerys");
let missandei = document.querySelector(".missandei");
let varys = document.querySelector(".varys");
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwoEnd = document.querySelector(".option-two-end");



daenerys.style.display = "none";
gameOfThronePicture.onclick = function() {
    daenerys.style.display = "block";
};
optionOneButton.onclick = function() {
    optionOneScreen.style.display = "block";
};
optionTwoButton.onclick = function() {
    optionTwoScreen.style.display = "block";
};
missandei.onclick = function() {
    optionOneEnd.style.display = "block";
};
varys.onclick = function() {
    optionTwoEnd.style.display = "block";
};
/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/