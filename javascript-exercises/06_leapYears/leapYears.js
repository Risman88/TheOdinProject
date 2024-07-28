const leapYears = function(num) {
    const isYearDivisibleByFour = num % 4 === 0;
    const isCentury = num % 100 === 0;
    const isYearDivisibleByFourHundred = num % 400 === 0;
    if (isYearDivisibleByFour && !isCentury || isYearDivisibleByFourHundred) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
