document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const successPopup = document.getElementById("successPopup");
    const phoneCodeDropdown = document.getElementById("phoneCode");
    const countryDropdown = document.getElementById("country");
    const phoneInput = document.getElementById("phoneNumber");

    // Function to update phone code based on selected country
    function updatePhoneCode() {
        const selectedCountry = countryDropdown.options[countryDropdown.selectedIndex];
        const countryCode = selectedCountry.getAttribute("data-code");

        if (countryCode) {
            phoneCodeDropdown.value = countryCode;
        }
    }

    // Attach event listener for country selection change
    countryDropdown.addEventListener("change", updatePhoneCode);

    // Function to validate form fields
    function validateForm(event) {
        event.preventDefault(); // Prevent actual form submission

        let isValid = true;
        const name = form.querySelector("[name='name']").value.trim();
        const email = form.querySelector("[name='email']").value.trim();
        const phone = phoneInput.value.trim();
        const country = countryDropdown.value;

        // Validate Name
        if (name === "") {
            isValid = false;
            alert("Please enter your full name.");
        }

        // Validate Email
        if (email === "" || !email.includes("@")) {
            isValid = false;
            alert("Please enter a valid email address.");
        }

        // Validate Country Selection
        if (country === "") {
            isValid = false;
            alert("Please select a country.");
        }

        // Validate Phone Number
        if (phone === "" || isNaN(phone) || phone.length < 6) {
            isValid = false;
            alert("Please enter a valid phone number.");
        }

        // If form is valid, show success popup
        if (isValid) {
            successPopup.classList.remove("hidden"); // Show success popup
            form.reset(); // Reset form fields
        }
    }

    // Attach validation function to form submit event
    form.addEventListener("submit", validateForm);

    // Function to close the success popup
    window.closePopup = function () {
        successPopup.classList.add("hidden"); // Hide success popup
    };
});
