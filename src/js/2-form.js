// const { createLogger } = require("vite")

console.log("Сподіваюсь я вірно зрозумів запропоновані покращення: якщо ні, можна трошки детальніше, там де не зрозумів")

const form = document.querySelector(".feedback-form")


function isLocalHasData() {
    const storageLocal = localStorage.getItem("feedback-form-state") ? JSON.parse(localStorage.getItem("feedback-form-state")) : "";
    return storageLocal
}

form.elements.email.value = isLocalHasData()?.email || ""
form.elements.message.value = isLocalHasData()?.message || ""

// input listener

form.addEventListener("input", doInputThings)

function doInputThings(event) {
    const infoForLocal = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    }

    if (event.target === form.elements.email) {
        infoForLocal.email = event.target.value.trim()
        localStorage.setItem("feedback-form-state", JSON.stringify(infoForLocal))
    } else {
        infoForLocal.message = event.target.value.trim()
        localStorage.setItem("feedback-form-state", JSON.stringify(infoForLocal))
    }

}
console.log(`Це дані з локального сховища за запитом feedback-form-state ${localStorage.getItem("feedback-form-state")}`)

// submit listener

form.addEventListener("submit", doSubmit)

function doSubmit(event) {
    event.preventDefault()
    if (form.elements.message.value && form.elements.email.value) {
        console.log({ email: form.elements.email.value, message: form.elements.message.value })
        localStorage.removeItem("feedback-form-state")
        form.reset()
    } else {
        alert("What about both? Email and message")
    }
}




