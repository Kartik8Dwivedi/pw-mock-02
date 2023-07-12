let modal = document.getElementById("modal")
let openModal = document.getElementById("openModal")
let closeModal = document.getElementById("closeModal")

openModal.addEventListener('click', (e) => {
    modal.style.display = "block"
    document.body.style.overflow = "hidden"

    // This will prevent scrolling

})
// closeModal.addEventListener('click', (e) => {
//     modal.style.display = "none"
    
// })
window.addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target === closeModal || e.target === modal){
        modal.style.display = "none"
        document.body.style.overflow = "auto"
        // Now scrolling will be avalable
    }
})