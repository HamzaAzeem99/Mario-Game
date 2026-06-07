
let mario_c = document.getElementById("mario_c")
let enimy_c = document.getElementById("enimy_c")
let jump_audio = new Audio("./audio/jump.mp3")
let mario = new Audio("./audio/mario.mp3")
// mario.play()
// mario.volume = 0.3

window.addEventListener("keydown", function (e) {
    if (e.key === " " || e.code === "Space") {
        mario_c.classList.add("mario_jump")
        jump_audio.play()
        setTimeout(() => {
            mario_c.classList.remove("mario_jump")
        }, 500);
        console.log("jump");

    }


})
window.addEventListener("click", () => {
    mario_c.classList.add("mario_jump")
    jump_audio.play()
    setTimeout(() => {
        mario_c.classList.remove("mario_jump")
    }, 500);
    console.log("jump");
})
setInterval(() => {

}, 100);