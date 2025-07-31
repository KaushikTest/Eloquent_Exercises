
function plusminus(array) {

    count_positive = 0;
    count_negative = 0;
    count_zero = 0;

    for (element of array) {
        if (element > 0) {
            count_positive++;
        }
        else if (element < 0) {
            count_negative++;
        }
        else {
            count_zero++;
        }

    }

    console.log((count_positive / array.length).toFixed(6));
    console.log((count_negative / array.length).toFixed(6));
    console.log((count_zero / array.length).toFixed(6));

}

plusminus([-4, 3, - 9, 0, 4, 1]);