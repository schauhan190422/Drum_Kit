// .addEventListener() method attaches an event handler to the specified element.
// Syntax: element.addEventListener(event, function, useCapture);

// document.querySelector("button").addEventListener("click", handelClick);
// function handelClick(){
//     alert("I got Clicked");
// }

//Detecting Button Press//  
var numberofdrumbutton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofdrumbutton; i++)  //to call each drum button 
{

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // alert("I got Clicked");
        // console.log(this.innerHTML);      //print the valur of button(which button clicked w,a..)\

        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}
//Detecting Keyboard Press//
document.addEventListener("keypress", function (event) {
    //alert("Key was Pressed");   //provide an alert when we press any key through keyboard with the help of ("keypress")
    // console.log(event); //it provide which key is pressed in console
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default: console.log(buttonInnerHTML)
    }
}

function buttonAnimation(currentKey) {          //button animantion
    var activeButton = document.querySelector("." + currentKey);    //concinate the "." with currentkey for classes 

    activeButton.classList.add("pressed");  //pressed is a class which defines in css

    setTimeout(function() {    //
        activeButton.classList.remove("pressed");
    }, 100);
 }

