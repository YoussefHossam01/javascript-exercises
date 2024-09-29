const reverseString = function(string) {
    let reversed = "";
    let len = string.length;
    for (let i = len - 1; i >= 0; i--)
    {
        reversed += string[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
