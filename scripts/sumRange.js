function sumArrayRange(arrNum) {
    var retValue;
    var totalValue;

    totalValue = 0;
    if (arrNum.length === 2) {
        if (parseInt(arrNum[0]) === parseInt(arrNum[1])) {
            totalValue = parseInt(arrNum[0]) + parseInt(arrNum[1]);
        } else {
            for (var lowVal = arrNum[0]; lowVal <= arrNum[1]; lowVal++) {
                totalValue += parseInt(lowVal);
            }
        }
    } else if (arrNum.length === 1) {
        totalValue = parseInt(arrNum[0]);

    } else if (arrNum.length === 0) {
        totalValue = 0;

    }

    return totalValue;
}


function AddRange() {
    var elemenetId = document.getElementById('txtLower');
    var inputArr;
    var totalValue;

    inputArr = [];
    inputArr.push(elemenetId.value);

    elemenetId = document.getElementById('txtUpper');
    inputArr.push(elemenetId.value);

    totalValue = sumArrayRange(inputArr);

    elemenetId = document.getElementById('showResult');
    elemenetId.innerText = totalValue;
}