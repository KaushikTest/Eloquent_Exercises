

function divisiblesumpairs(array, divisor) {

    let count = 0;

    for (let i = 0; i < array.length; i++) {
        let b = array[i];
        for (let i = 0; i < array.length - 1; i++) {
            if ((b + array[i + 1]) % divisor === 0) {
                count++;
            }
        }
        array = array.slice(i);
    }
    return count;
}

console.log(divisiblesumpairs([1, 2, 3, 4, 5, 6], 5));
console.log(divisiblesumpairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));