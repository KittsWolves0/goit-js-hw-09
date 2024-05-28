const formData = {
    email: "",
    message: "" 
}

const form = document.querySelector(".feedback-form");
const formMes = document.querySelector("textarea");
const formMail = document.querySelector("input");
const locStoreKey = "feedback-form-state";


form.addEventListener("submit", handlerSub);
form.addEventListener("input", handlerInput);
populateText();

function handlerInput(event) {
    formData.message = formMes.value.trim();   
    formData.email = formMail.value.trim();
    localStorage.setItem(locStoreKey, JSON.stringify(formData));
    console.log(localStorage.getItem(locStoreKey));
}

function populateText() {
    const mesData = JSON.parse(localStorage.getItem(locStoreKey));
    if (mesData) {
        form.email.value = mesData.email.trim();
        form.message.value = mesData.message.trim();
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

console.log(JSON.parse(localStorage.getItem(locStoreKey)));
    
