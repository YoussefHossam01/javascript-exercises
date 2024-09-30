const sumAll = function(num1, num2) {

    // Only positive integers can be used.
    if(Number.isNaN(num1) || Number.isNaN(num2) || (num1 - Math.floor(num1)) != 0 ||
       (num2 - Math.floor(num2)) != 0 || num1 < 0 || num2 < 0 || typeof num1 != "number" ||
       typeof num2 != "number")

    {
        return 'ERROR'
    }

    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    let sum = 0;

    for (let i = min; i <= max; i++)
    {
        sum += i;
    }
    return  sum;
};

// Do not edit below this line
module.exports = sumAll;
