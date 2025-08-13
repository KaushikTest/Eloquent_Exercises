function twoArrays(k, A, B) {

    A.sort();
    B.sort((a, b) => (b - a));
    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return 'NO';
        } else {
            continue;
        }
    }
    return 'YES';
}

console.log(twoArrays(1, [0, 1], [0, 2]));