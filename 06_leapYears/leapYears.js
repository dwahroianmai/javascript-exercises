const leapYears = function(year) {
    if (year % 100 === 0) {
        return year % 400 === 0;
    } return year % 4 === 0;
};

// Do not edit below this line
module.exports = leapYears;

/* is divisible by 4,
if divisible by 100 then also by 400 *

year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)

*/