var sound = new Audio();
sound.src = "./media/vine-boom.mp3";
sound.oncanplaythrough = function(){
    sound.readyToRock = true;
};
sound.onerror = () =>{
    console.log("SOUNDFILE DIDN'T LOAD")
}
function playSound(){
    if(sound && sound.readyToRock){
        sound.currentTime = 0;
        sound.play();
    }
}


const image = document.querySelector('img');
image.addEventListener("click", playSound);