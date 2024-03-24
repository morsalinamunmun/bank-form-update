/*
1. add event handler with the withdraw button
2.get the withdraw amount from the withdraw input field(also make sure to convert the input into a number by using parseFloat)
3. get old withdraw total
4. set total withdraw amount
5. get the previous balance total
6. calculate balance total
7. clear value
*/
//step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldById('withdraw-input');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');

    const withdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', withdrawTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');

    const balanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', balanceTotal);
})