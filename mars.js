function marsExploration(s) {
    let count = 0;
    let SOS = 'SOS';
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) !== SOS.charAt(i % 3)) {
            count++;
        }
    }

    return count;
}

console.log(marsExploration('SOSSPSSQSSOR'));
