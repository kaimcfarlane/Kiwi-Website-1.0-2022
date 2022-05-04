let loadWheel = document.querySelector(".loadWheel")
let contentPage = document.querySelector(".contentPage")
let span = document.querySelector("span")

window.onload=()=>
{
    setInterval(wheelAnimation, 4000)

}

function wheelAnimation() {
    loadWheel.style.display='none'; 
    contentPage.style.opacity = "1"; 
    // span.style.animation = "1s ease-out 0s 1 contentLoad"; 
}