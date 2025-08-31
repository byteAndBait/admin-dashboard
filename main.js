const sideBar = document.querySelector(".sideBar")
const sideBarButton = document.querySelector(".sideBarButton")
const mainContentElement = document.querySelector(".content")
sideBarButton.addEventListener("click",()=>{
    sideBar.classList.toggle("closed")
    mainContentElement.style.flex = "100%";
})