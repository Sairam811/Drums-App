//mouseclick sound
var i=0;
while(i<document.querySelectorAll(".drum").length){   //  i<document.getElementsByClassName("drum").length
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var button=this.innerHTML;
       makeSound(button);
    });
    i++;
}
//keypress sound
document.addEventListener("keypress",function(event)  {
        makeSound(event.key);
        buttonAnimation(event.key);
    })
function makeSound(key){
    buttonAnimation(key);
    switch(key){
        case "w":
            var sound_w=new Audio("sounds/tom-1.mp3");
            sound_w.play();
            break;
        case "a":
            var sound_a=new Audio("sounds/tom-2.mp3");
            sound_a.play();
            break;
        case "s":
            var sound_s=new Audio("sounds/kick-bass.mp3");
            sound_s.play();
            break;
        case "d":
            var sound_d=new Audio("sounds/tom-3.mp3");
            sound_d.play();       
            break;
        case "j":
            var sound_j=new Audio("sounds/tom-4.mp3");
            sound_j.play();       
            break;
        case "k":
            var sound_k=new Audio("sounds/crash.mp3");
            sound_k.play();       
            break;
        case "l":
            var sound_l=new Audio("sounds/snare.mp3");
            sound_l.play();       
            break;

        default:
          
        }   
}
function buttonAnimation(currentkey){
     var activeButton=document.querySelector("."+currentkey);
         activeButton.classList.add("pressed");
         setTimeout(function(){
             activeButton.classList.remove("pressed");
         },100)
}
