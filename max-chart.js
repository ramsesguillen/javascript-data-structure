/*
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/
const maxChar = str => {
    let charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || +1;
    }

    for (let obj in charMap ) {
        if (charMap[obj] > max ) {
            max = charMap[obj];
            maxChar = obj;
        }
    }
    // return maxChar;
    console.log({ max, maxChar})
}

maxChar('abcccccccd');
maxChar('apple 1231111');
