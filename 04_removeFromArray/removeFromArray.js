const removeFromArray = function() {
    const wordList = arguments[0];
    let index;
    for(let i = 0; i < arguments.length ; i++){
        index = wordList.indexOf(arguments[i]);
        if(index > -1){
            wordList.splice(index,1);
        }
    }

    return wordList;
};

// Do not edit below this line
module.exports = removeFromArray;
