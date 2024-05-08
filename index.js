document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const emailInput = document.getElementById("email");
    const numberInput = document.getElementById("number");
    const dobInput = document.getElementById("dob");

    form.addEventListener("submit", function (event) {
        if (!isValidEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        if (!isValidPhoneNumber(numberInput.value)) {
            alert("Please enter a valid 10-digit phone number.");
            event.preventDefault();
            return;
        }

       if (!isValidDOB(dobInput.value)) {
            alert("Please enter a valid date of birth.");
            event.preventDefault();
            return;
        }
    });

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(number) {
        const numberRegex = /^[0-9]{10}$/;
        return numberRegex.test(number);
    }

    function isValidDOB(dob) {
     const dobDate = new Date(dob);
        const currentDate = new Date();
        return dobDate < currentDate;
    }
});
