let loadWheel = document.querySelector(".loadWheel")
let contentPage = document.querySelector(".contentPage")


window.onload=()=>
{
    setInterval(wheelAnimation, 4000)
}

function wheelAnimation() {
    loadWheel.style.display='none'; 
    contentPage.style.opacity = "1"; 
}