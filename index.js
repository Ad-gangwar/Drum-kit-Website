var n = document.querySelectorAll(".drum").length;
for(var i=0; i<n; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
   var btnInnerHTML= this.innerHTML;
   makeSound(btnInnerHTML);
   btnAnimation(btnInnerHTML);
});
}

document.addEventListener("keypress", function(event){
    console.log(event);
    makeSound(event.key);  
    btnAnimation(event.key);
})
function makeSound(key){
switch(key){
    case "w":
        var audio=new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
    case "a":
        var audio=new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
    case "s":
        var audio=new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
    case "d":
        var audio=new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
    case "j":
        var audio=new Audio('sounds/snare.mp3');
        audio.play();
        break;
    case "k":
        var audio=new Audio('sounds/crash.mp3');
        audio.play();
        break;
    case "l":
        var audio=new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
   }
}

function btnAnimation(currKey){
    var activeBtn=document.querySelector("."+currKey);
    activeBtn.classList.add("pressed");

    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    }, 100);
}
// for(var i=0; i<n; i++){
    // document.querySelectorAll(".drum")[i].addEventListener("click", getClick);
// }
// function getClick(){
//    alert("I got clicked!"); 
// }

// also we can call anonymous function:-
// document.querySelector("button").addEventListener("click", function() {
//    alert("I got clicked!"); 
// });