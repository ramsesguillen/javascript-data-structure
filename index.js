function reverseString(input) {
    if (input === '') {
        return '';
    }
    return reverseString(input.substring(1)) + input.charAt(0);
}

console.log(reverseString('hello'));

function isPalindrome(input) {
    if (input.length === 0 || input.length === 1) {
        return true;
    }

    if (input.charAt(0) === input.charAt(input.length  - 1)) {
        return isPalindrome(input.substring(1, input.length - 1))
    }

    return false;
}

console.log(isPalindrome('kayak'));







