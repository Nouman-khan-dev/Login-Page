let btnLeft = document.getElementById("btnLeft");
let btnRight = document.getElementById("btnRight");
let overlay = document.querySelector(".overlay");
let containerLeft = document.querySelector(".container.left")
let containerRight = document.querySelector(".container.right")


let leftContent = document.querySelector(".contentOverlay.leftO")
let righContent = document.querySelector(".contentOverlay.rightO")



righContent.classList.remove("active")
leftContent.classList.add("active")


btnLeft.addEventListener("click", () => {
    overlay.classList.remove("left")
    overlay.classList.add("right")
    // --------
    righContent.classList.remove("active")
    leftContent.classList.add("active")

    containerRight.classList.add("active")
    containerLeft.classList.remove("active")

    containerRight.classList.remove("moveR")
    containerLeft.classList.add("moveL")
})

btnRight.addEventListener("click", () => {
    overlay.classList.remove("right")
    overlay.classList.add("left")
    // --------
    righContent.classList.add("active")
    leftContent.classList.remove("active")

    containerRight.classList.remove("active")
    containerLeft.classList.add("active")

    containerRight.classList.add("moveR")
    containerLeft.classList.remove("moveL")
})