

function breaktherecord(s) {

    let low_break = 0;
    let high_break = 0;
    let lowest_score = s[0];
    let highest_score = s[0];
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i + 1] > highest_score) {
            high_break++;
            highest_score = s[i + 1];
        } else if (s[i + 1] < lowest_score) {
            low_break++;
            lowest_score = s[i + 1];
        } else {
            continue;
        }
    }

    return [low_break, high_break];

}

console.log(breaktherecord([12, 24, 10, 25, 9, 8, 27, 29, 5]));
console.log(breaktherecord([1, 2, 3, 4,]));
console.log(breaktherecord([4, 3, 6, 4, 5]));