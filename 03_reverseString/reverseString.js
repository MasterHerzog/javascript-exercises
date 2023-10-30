const reverseString = function(phrase) {
    let result = [];
    for(let i = 0; i < phrase.length; i++){
        result[i] = phrase.charAt((phrase.length-1)-i);
    }

    return result.join("");
};

// Do not edit below this line
module.exports = reverseString;
