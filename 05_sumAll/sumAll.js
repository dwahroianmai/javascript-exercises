const sumAll = function(numOne, numTwo) {
    if (numOne < 0 || numTwo < 0 || 
        typeof numOne != "number" || 
        typeof numTwo != "number") {
            return "ERROR";
        } else {
            let total = 0;
            for (let i = Math.min(...arguments); i <= Math.max(...arguments); i++) {
                total += i;
            } return total;
        }
};

// Do not edit below this line
module.exports = sumAll;
