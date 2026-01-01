const reverseString = function(string) {

    let array = [];
    for (let i = string.split("").length - 1; i >= 0; i--) {
        array.push(string.split("")[i]);
    }

    return array.join("");

};

// Do not edit below this line
module.exports = reverseString;
