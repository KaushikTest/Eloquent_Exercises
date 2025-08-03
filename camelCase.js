

function camelCase(fulltext) {

    let text = fulltext.split(";");
    let result = "";
    let ntext = text[2].replace("()", "");

    if (text[0] === "S") {
        if (text[1] === "M") {
            for (let i = 0; i < ntext
                .length; i++) {
                if (ntext
                [i].toUpperCase() === ntext
                    [i] && ntext
                    [i] !== ntext
                    [i].toLowerCase() && i !== 0) {
                    result += " ";
                }
                result += ntext
                [i].toLowerCase();
            }
            return result;

        } else if (text[1] === "C") {
            for (let i = 0; i < ntext
                .length; i++) {
                if (ntext
                [i].toUpperCase() === ntext
                    [i] && ntext
                    [i] !== ntext
                    [i].toLowerCase()) {
                    result += " ";
                }
                result += ntext
                [i].toLowerCase();
            }
            return result.trim();
        } else {
            for (let i = 0; i < ntext
                .length; i++) {
                if (ntext
                [i].toUpperCase() === ntext
                    [i] && ntext
                    [i] !== ntext
                    [i].toLowerCase() && i !== 0) {
                    result += " ";
                }
                result += ntext
                [i].toLowerCase();
            }
            return result;

        }
    } else {
        if (text[1] === "V") {
            for (let i = 0; i < ntext
                .length; i++) {
                if (ntext
                [i] == " ") {
                    result += ntext
                    [i + 1].toUpperCase();
                    i++;
                } else {
                    result += ntext
                    [i];
                }

            }
            return result.replace(" ", "");
        } else if (text[1] === "C") {
            for (let i = 0; i < ntext
                .length; i++) {
                if (i == 0) {
                    result += ntext
                    [i].toUpperCase();
                    i++;
                }
                if (ntext
                [i] == " ") {
                    result += ntext
                    [i + 1].toUpperCase();
                    i++;
                } else {
                    result += ntext
                    [i];
                }

            }
            return result.replace(" ", "");

        } else {
            for (let i = 0; i < ntext
                .length; i++) {
                if (ntext
                [i] == " ") {
                    result += ntext
                    [i + 1].toUpperCase();
                    i++;
                } else {
                    result += ntext
                    [i];
                }

            }
            return result + '()';

        }
    }

}
console.log(camelCase('S;M;plasticCup()'));
console.log(camelCase('C;V;mobile phone'));
console.log(camelCase('C;C;coffee machine'));
console.log(camelCase('S;C;LargeSoftwareBook'));
console.log(camelCase('C;M;white sheet of paper'));
console.log(camelCase('S;V;pictureFrame'));
console.log(camelCase('C;M;mouse pad'));
console.log(camelCase('S;V;iPad'));
console.log(camelCase('C;C;code swarm'));
console.log(camelCase('S;C;OrangeHighlighter'));
