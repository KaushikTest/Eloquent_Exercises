function countBs(text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'B') {
            count++;
        }
    }
    return count;
}


function countchar(text, char) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countBs("Brown Bread Buns"));
console.log(countchar("Big brown bread buns", 'b'));