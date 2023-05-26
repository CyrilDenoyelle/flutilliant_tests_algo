
canFormPalindrom = (str) => {

    const lowerStr = str.toLowerCase();

    const oddCountChars = lowerStr.split('').reduce((chars, char) => {
        if (chars.has(char)) {
            chars.delete(char);
        } else {
            chars.add(char);
        }
        return chars;
    }, new Set())
    return oddCountChars.size <= 1;
}

module.exports = canFormPalindrom;

