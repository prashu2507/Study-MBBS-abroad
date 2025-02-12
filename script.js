function updatePhoneCode() {
    let countryDropdown = document.getElementById("country");
    let phoneCodeInput = document.getElementById("phoneCode");

    let selectedOption = countryDropdown.options[countryDropdown.selectedIndex];
    let countryCode = selectedOption.getAttribute("data-code");

    if (countryCode) {
        phoneCodeInput.value = countryCode;
    }
}
