function countingValleys(steps, path) {

    let sea_level = 0;
    let valley_count = 0;

    for (i = 0; i < steps - 1; i++) {
        if (path.charAt(i) == 'U') {
            sea_level++;
        } else {
            sea_level--;
        }
        if (path.charAt(i + 1) == 'U' && sea_level == -1) {
            valley_count++;
        }
    }
    return valley_count;

}

console.log(countingValleys(8, 'DUDUDUDU'));