

function random() {

    for (let i = 0; i < 7; i++) {
        switch (i) {
            case 0:
                console.log('#');
                break;
            case 1:
                console.log('##');
                break;
            case 2:
                console.log('###');
                break;
            case 3:
                console.log('####');
                break;
            case 4:
                console.log('#####');
                break;
            case 5:
                console.log('######');
                break;
            default:
                console.log('#######');
                break;
        }
    }

    // let count = 7;
    // for (let i = 0; i < count; 7) {

    //     console.log('#');
    //     i++
    // }


}
random();