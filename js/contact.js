async function validateForm() {
    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.remove());
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));

    
    let isValid = true;

    // Get form elements
    const gender = document.getElementById('gender').value;
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate first name
    if (!firstName) {
        showError('firstName', 'Vorname ist erforderlich.');
        isValid = false;
    }

    // Validate last name
    if (!lastName) {
        showError('lastName', 'Nachname ist erforderlich.');
        isValid = false;
    }

    // Validate email format using a regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('email', 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
        isValid = false;
    }

    // Validate message length (example: minimum 10 characters)
    if (message.length < 10) {
        showError('message', 'Die Nachricht muss mindestens 10 Zeichen enthalten.');
        isValid = false;
    }

    return isValid;
}

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    element.classList.add('input-error');
    const error = document.createElement('div');
    error.className = 'error';
    error.innerText = message;
    element.parentNode.appendChild(error);
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the form from submitting immediately
        const isValid = await validateForm(); // Validate the form asynchronously
        if (isValid) {
                // Speichert die Daten in der Datenbank
                await databaseClient.insertInto("form", {
                  gender: gender.value, firstName: firstName.value, lastName: lastName.value, email: email.value, message: message.value 
                });
            form.style.display = "none"
            if (document.getElementById("confirmationMessage").style.display = "none") {
                document.getElementById("confirmationMessage").style.display = "block"
            };
        }
})});