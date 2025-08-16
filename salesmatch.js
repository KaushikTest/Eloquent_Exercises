function sockMerchant(n, ar) {
    ar.sort((a, b) => (a - b));
    let count = 1;
    let r = [];
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (ar[i] == ar[i + 1]) {
            count++;
        } else {
            if (count != 1) {
                r.push(count);
            }
            count = 1;
        }
    }
    for (let i = 0; i < r.length; i++) {
        sum += Math.floor(r[i] / 2);
    }

    return sum;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));