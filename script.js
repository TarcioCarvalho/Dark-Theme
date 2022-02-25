const body = document.querySelector("body")
const button = document.querySelector(".ball")

button.addEventListener("click", ()=> {
    if (button.classList.contains("dark")) {
        button.classList.remove("dark")
        button.classList.add("light")
        body.classList.remove("dark")
    } else {
        button.classList.remove("light")
        button.classList.add("dark")
        body.classList.add("dark")
    }
})