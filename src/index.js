// problem 1 
function checkString(str, toUpperCase) {
    if (toUpperCase === void 0) { toUpperCase = true; }
    if (toUpperCase) {
        return str.toUpperCase();
    }
    else {
        return str.toLowerCase();
    }
}
console.log(checkString("Hello TypeScript"));
console.log(checkString("Hello Java script", false));
console.log(checkString("Hello mongoose", false));
