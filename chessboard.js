function chessboard(width, height) {

    for (i = 0; i < height; i++) {
        let row = '';
        for (let j = 0; j < width; j++) {
            if (j % 2 === 0) {
                row += '#';
            } else {
                row += ' ';
            }
        }
        console.log('\n' + row);

    }

}

chessboard(16, 8);