const repeatString = function(word, times) {
    let l_word = word;
    let l_times = times;
    let result = "";

    if(l_times < 0){
        result = "ERROR";
    }else{
        for(let i = 0; i < l_times; i++){
            result += l_word;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
