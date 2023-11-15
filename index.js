// document.querySelectorAll(".drum").forEach(addEventListener("click", function (){
//     // var audio = new Audio("./sounds/tom-1.mp3");
//     // audio.play();

//     console.log(this);  // this is bound to the global object i.e. window

// }));


// document.querySelectorAll(".drum").forEach(function (drumElement) {
//     drumElement.addEventListener("click", function () {
//         // var audio = new Audio("./sounds/tom-1.mp3");
//         // audio.play();

//         console.log(this.innerHTML);
//     });
// });

function response(key){
    switch (key) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();               
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();                
            break;
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();                
            break;
        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();                
            break;
        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();                
            break;
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();                
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function addAnimation(key){
    document.querySelector("." + key).classList.add("pressed");

    // setTimeout(removeAnimation(key), 300);
    // “removeAnimation(key)" is not a function!!!
    // it's a function call
}   

// function removeAnimation(key){
//     document.querySelector("." + key).classList.remove("pressed");
// }

// detecting button press
for (var i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        this.style.color = "white";

        var buttonInnerHTML = this.innerHTML;
        response(buttonInnerHTML);
        addAnimation(buttonInnerHTML);
        setTimeout(()=>{
            document.querySelector("." + buttonInnerHTML).classList.remove("pressed");
        }, 200);
    });
}

// detecting keyboard press
document.addEventListener("keydown", (event)=>{
    response(event.key);
    addAnimation(event.key);
    setTimeout(()=>{
        document.querySelector("." + event.key).classList.remove("pressed");
    }, 200);
})

