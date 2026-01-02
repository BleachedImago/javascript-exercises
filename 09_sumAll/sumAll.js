const sumAll = function(num1, num2) {

    let big;
    let small;

    if (num1 < 0 || num1 % 1 != 0 || typeof num1 != "number") {
        return "ERROR"
    }

    if (num2 < 0 || num2 % 1 != 0 || typeof num2 != "number") {
        return "ERROR"
    }

    if (num1 > num2) {
        big = num1;
        small = num2;
    } else {
        small = num1;
        big = num2;
    }

    let sum = 0;
    for (let i = small; i <= big; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
