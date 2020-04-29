function convertNumberToString(number, x = 10) {
    let integer = Math.floor(number);
    let fraction = null;
    let string = '';
    while (integer > 0) {
        string = integer % x + string
        integer = Math.floor(integer / x)
    }
    return fraction ? string + fraction : string
}


function convertStringToNumber(string, radix = 10) {
    if (typeof string === "string") {
        if (radix > 10 || radix < 2) {
            return
        }
        let chars = string.split('');
        let number = 0;
        let i = 0;
        while (i < chars.length && chars[i] !== '.') {
            number *= radix;
            number += chars[i].codePointAt(0) - '0'.codePointAt(0);
            i++;
        }
        if (chars[i] === '.') {
            i++
        }
        let fraction = 1;
        while (i < chars.length) {
            fraction /= radix;
            number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction;
            i++
        }
        return number;
    }
    return new Error('无法转换')
}


console.log(convertNumberToString(233434, 10));
console.log(convertStringToNumber('12434', 10));
console.log(convertNumberToString(8, 2));
console.log(convertStringToNumber('1100', 2));
