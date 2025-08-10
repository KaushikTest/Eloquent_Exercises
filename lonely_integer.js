

function lonelyInteger(a) {
    let checked_elements = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < a.length; j++) {
            if (a[i] === a[j + 1]) {
                checked_elements.push(a[i]);
                break;
            }
        }
    }
    for (let i = 0; i < a.length; i++) {
        if (checked_elements.includes(a[i])) {
            continue;
        } else {
            return a[i];
        }
    }
}

console.log(lonelyInteger([1, 2, 3, 4, 3, 2, 1]));
console.log(lonelyInteger([1, 1, 2]));
console.log(lonelyInteger([0, 0, 1, 2, 1]));
