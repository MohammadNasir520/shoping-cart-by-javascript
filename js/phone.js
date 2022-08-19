function updatePhone(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value;
    const phoneNumber = parseInt(phoneNumberFieldString);

    let newPhoneNumber;

    if (isIncrease === true) {

        newPhoneNumber = phoneNumber + 1;


    }
    else {
        newPhoneNumber = phoneNumber - 1;

    }
    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

// case and phone total price set
function updatePhoneTotalPrice(newPhoneNumber) {
    phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total-price');
    phoneTotalElement.innerText = phoneTotalPrice;

}



document.getElementById('btn-phone-plus').addEventListener('click', function () {

    const newPhoneNumber = updatePhone(true)


    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubtotal()

});
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhone(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubtotal()
})
