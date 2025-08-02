

function divisiblesumpairs(array, divisor) {

    let count = 0;

    // The following commented code is an alternative approach that was not used, had few failing test cases.
    // for (let i = 0; i <= array.length - 1; i++) {
    //     let b = array[i];
    //     for (let j = 0; j <= array.length - 1; j++) {
    //         if ((b + array[j + 1]) % divisor === 0) {
    //             count++;
    //         }
    //     }
    //     array = array.slice(i);
    // }

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if ((array[i] + array[j]) % divisor === 0) {
                count++;
            }
        }
    }
    return count;
}

console.log(divisiblesumpairs([1, 2, 3, 4, 5, 6], 5));
console.log(divisiblesumpairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));
console.log(divisiblesumpairs([1, 3, 2, 6, 1, 2], 3));