/**
    reverseInt(15) === 51;
    reverseInt(981) === 189;
    reverseInt(500) === 5;
    reverseInt(-15) === -51;
    reverseInt(-90) === -9;
 */
function reverseInt(n) {
    const number = n.toString().split('');
    let newNumber = [];
    for (let i = number.length - 1; i >= 0; i--) {
        newNumber.push(number[i]);
    }
    const sign = Math.sign(n);
    return parseInt(newNumber.join('')) * sign;
}

reverseInt(-500);
