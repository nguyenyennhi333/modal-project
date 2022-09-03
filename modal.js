const openBtn = document.getElementById("open-modal")
const closeBtn = document.getElementById("close-modal")
const overLay = document.getElementById("overlay")

openBtn.addEventListener("click", () => {
    overLay.style.display = "block"
})

closeBtn.addEventListener("click", () => {
    overLay.style.display = "none"
})