function summin(array) {

    let temp = array[0];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1] > temp) {
            temp = array[i + 1];
        }
        else {
            array[i] = array[i + 1];
            array[i + 1] = temp;

        }

    }
    return poparrayreturnsum(array);

}

function summax(array) {

    let temp = array[0];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1] < temp) {
            temp = array[i + 1];
        }
        else {
            array[i] = array[i + 1];
            array[i + 1] = temp;

        }

    }

    return poparrayreturnsum(array);

}

function poparrayreturnsum(array) {
    array.pop();
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;

}

function result(array) {
    let array1 = array.slice();
    let array2 = array.slice();
    let result1 = summin(array1);
    let result2 = summax(array2);

    console.log('Sum of minimums: ' + result1);
    console.log('Sum of maximums: ' + result2);

}

result([9, 5, 4, 10, 2]);
result([3, 5, 7, 2, 8])
