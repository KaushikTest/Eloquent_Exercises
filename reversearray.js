function reverseArray(array) {

    let x = [];

    for (let i = array.length - 1; i >= 0; i--) {
        x.push(array[i]);
    }
    return x;

}

console.log(reverseArray([1, 2, 3, 4, 5]));

function reverseArrayInPlace(array) {

    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }

    return array;

}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 7]));