
function getInputFieldById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const elementValue = parseFloat(textElement.innerText);
    return elementValue;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldById('deposit-input');
    //1. get previous deposit total by id
    const previousDepositTotal = getTextElementValueById('deposit-total');
    //calculate new deposit
    const depositTotal = previousDepositTotal + newDepositAmount;
    //set deposit total value
    setTextElementValueById('deposit-total', depositTotal);
    //get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const balanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', balanceTotal);

})