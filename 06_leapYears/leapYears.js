const leapYears = function(year) {
    const isYearDivisibleByFour = year % 4;
    const isYearDivisibleByHundred = year % 100;
    const isYearDivisibleByFourHundred = year % 400;

    if(isYearDivisibleByFour === 0 && (isYearDivisibleByHundred  != 0 ||
        isYearDivisibleByFourHundred === 0))
    {
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = leapYears;
