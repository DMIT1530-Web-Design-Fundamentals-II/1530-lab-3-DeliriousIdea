const menuIconRef = document.querySelector(".menu-icon")
const menuRef = document.querySelector(".main-menu")


console.log(menuIconRef) // Make sure it's selected correctly
console.log(menuRef) // Make sure it's selected correctly

menuIconRef.addEventListener('click', toggleMenu)

function toggleMenu(e) {
    e.preventDefault()
    menuRef.classList.toggle("visible")
}