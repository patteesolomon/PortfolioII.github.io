const someArray = [7,5,8,9,6,3,1,0,7,5];

const someFunction = (someArray = []) => {
    const someArraySorted = [];
    sAL = someArray.length;
    first = 0;
    last = 0;
    current = 0;
    for (let index = 0; index < sAL; index++) {
        first = someArray[index];
        last = someArray[index + 1];
        someArray.forEach(element => {
            if (element > last) 
            {
                current = last;
            }
        });
        someArraySorted.push(index);
    }
    return someArraySorted;
};

console.log(someFunction(someArray));