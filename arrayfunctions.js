function printrange(start, end) {
    let result = [];
    for (let i = start; i <= end
        ; i++) {
        result.push(start);
        start++;
    }
    return result;
}

console.log(printrange(5, 10));

function sumnumbers(array) {
    let result = 0;
    for (i = 0; i < array.length; i++) {
        result = result + array[i];
    }
    return result;
}

console.log(sumnumbers([1, 2, 3, 4, 6]));

function printbetweenrange(start, end, step) {
    let result = [];
    if (start < end) {
        for (let i = 0; i <= end; i++) {
            result.push(start);
            start = start + step;
            if (start > end) {
                break;
            }
        }
    }

    else {
        for (let i = start; i >= end; i--) {
            result.push(start);
            start = start + step;
            if (start < end) {
                break;
            }
        }
    }

    return result;
}

console.log(printbetweenrange(5, 2, -2));
console.log(printbetweenrange(10, 20, 2));