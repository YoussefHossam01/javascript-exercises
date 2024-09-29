const removeFromArray = function() {
    const args = Array.from(arguments);
    const arr = args[0];
    let len = arr.length;
    let argLen = args.length;
    let found = false;
    let newArr = [];
    for (let i =0; i < len; i++)
    {
        found = false;
        for (let j = 1; j< argLen; j++)
            {
                if(arr[i] === args[j])
                    {
                        found = true;
                    }
            }
            if (!found)
                {
                    newArr.push(arr[i]);
                } 
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
