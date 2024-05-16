document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateForm()) {
            console.log("Form is valid. Submitting...");
            form.submit();
        }
    });

    function validateForm() {
        let isValid = true;

        const geschlecht = document.getElementById("geschlecht").value;
        const vorname = document.getElementById("vorname").value;
        const nachname = document.getElementById("nachname").value;
        const email = document.getElementById("email").value;
        const nachricht = document.getElementById("nachricht").value;

        if (!geschlecht || !vorname || !nachname || !email || !nachricht) {
            isValid = false;
            alert("Bitte füllen Sie alle Felder aus.");
            highlightInvalidFields();
        } else if (!validateEmail(email)) {
            isValid = false;
            alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
            highlightInvalidFields();
        }

        return isValid;
    }

    function highlightInvalidFields() {
        const inputs = form.querySelectorAll("input, select, textarea");
        inputs.forEach(input => {
            if (!input.validity.valid) {
                input.classList.add("invalid-input");
            } else {
                input.classList.remove("invalid-input");
                input.classList.add("valid-input");
            }
        });
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
