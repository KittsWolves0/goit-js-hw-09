const formData = {
    email: "",
    message: "" 
}

const form = document.querySelector(".feedback-form");
const locStoreKey = "feedback-form-state";


form.addEventListener("submit", handlerSub);
form.email.addEventListener("input", handlerEmail);
form.message.addEventListener("input", handlerMessage);
populateText();

function handlerMessage(event) {
    formData.message = event.target.value.trim();    
    localStorage.setItem(locStoreKey, JSON.stringify(formData));
}

function handlerEmail(event) {
    formData.email = event.target.value.trim();
    localStorage.setItem(locStoreKey, JSON.stringify(formData));
}

function populateText() {
    const mesData = JSON.parse(localStorage.getItem(locStoreKey));
    if (mesData.email || mesData.message) {
        form.email.value = mesData.email;
        form.message.value = mesData.message;
    }
}

function handlerSub(event) {
    event.preventDefault();

    const { email, message } = event.target.elements;
    const emailVal = email.value;
    const mesVal = message.value;
    if (!emailVal || !mesVal) {
        alert("Fill please all fields");
        return
    }
    console.log(JSON.parse(localStorage.getItem(locStoreKey)));
    localStorage.removeItem(locStoreKey);
    form.reset();
}