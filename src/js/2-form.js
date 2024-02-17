// const { createLogger } = require("vite")

const form = document.querySelector(".feedback-form")

const infoForLocal = {
    email: "",
    message: "",
}

form.elements.email.value = JSON.parse(localStorage.getItem("feedback-form-state")).email
form.elements.message.value = JSON.parse(localStorage.getItem("feedback-form-state")).message

// input listener

form.addEventListener("input", doInputThings)

function doInputThings(event) {

    if (event.target === form.elements.email) {
        infoForLocal.email = event.target.value.trim()
        localStorage.setItem("feedback-form-state", JSON.stringify(infoForLocal))
    } else {
        infoForLocal.message = event.target.value.trim()
        localStorage.setItem("feedback-form-state", JSON.stringify(infoForLocal))
    }

}
console.log(localStorage.getItem("feedback-form-state"))

// submit listener

form.addEventListener("submit", doSubmit)

function doSubmit(event) {
    event.preventDefault()
    if ((form.elements.message.value.length > 0) && (form.elements.email.value.length > 0)) {
        console.log({ email: form.elements.email.value, message: form.elements.message.value })
        localStorage.removeItem("feedback-form-state")
        infoForLocal.email = ""
        infoForLocal.message = ""
        form.reset()
    } else {
        alert("What about both? Email and message")
    }
}

console.log(localStorage.getItem("feedback-form-state"))


