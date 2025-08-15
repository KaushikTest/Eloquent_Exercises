
function xorString(s, t) {
    let r = '';
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === t.charAt(i)) {
            r += '0';
        } else {
            r += '1';
        }
    }
    return r;
}


console.log(xorString('10101', '00101'));