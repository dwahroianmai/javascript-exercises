const repeatString = function(string, n) {
    let stringCopy = string.slice();
    if (n === 0) {
        return '';
    } else if (n > 0) {
        for (let i = 0; i < n - 1; i++) {
            string += stringCopy;
        } return string;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
