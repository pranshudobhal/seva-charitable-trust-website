var openIcon = document.querySelector(".open");
var closeIcon = document.querySelector(".close");

openIcon.addEventListener("click", function openIconenClicked(){
    openIcon.classList.add("open-click");
    closeIcon.style.left = "0";
})

closeIcon.addEventListener("click", function openIconenClicked(){
    closeIcon.classList.add("close-click");
    openIcon.classList.remove("open-click");
    closeIcon.style.left = "100vw";
})