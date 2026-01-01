const removeFromArray = function(array, ...element) {

    return array.filter((num) => !(element.includes(num)))
};

// Do not edit below this line
module.exports = removeFromArray;
