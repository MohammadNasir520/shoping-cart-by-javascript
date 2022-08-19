// get the phone and case total price 
function getTextElementById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

// set text to subttotal, tax, final ammount
function setTextElementvalueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;

}

// calculate subtotal function 

function calculateSubtotal() {
    // calculate total

    const currentPhoneTotal = getTextElementById('phone-total-price');
    const currentCasetotal = getTextElementById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCasetotal;
    setTextElementvalueById('sub-total', currentSubTotal)

    // calculate tax
    const taxAmmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmmount = parseFloat(taxAmmountString);

    setTextElementvalueById('tax-ammount', taxAmmount);

    const finalAmmount = currentSubTotal + taxAmmount;
    setTextElementvalueById('final-total', finalAmmount)


}