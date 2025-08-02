
function sparsearrays(array_string, array_query) {


    let result_array = [];
    for (let j = 0; j <= array_query.length - 1; j++) {
        let count = 0;
        for (let i = 0; i <= array_string.length - 1; i++) {
            if (array_query[j] === array_string[i]) {
                count++;
            }
            if (i === array_string.length - 1) {
                result_array.push(count);
            }
        };
    }

    return result_array;
}

console.log(sparsearrays([1, 2, 3, 4, 5], [1, 3, 5]));
console.log(sparsearrays(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb']));
