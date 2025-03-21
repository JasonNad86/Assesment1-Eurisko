"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseString = reverseString;
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
//# sourceMappingURL=ReverseString.js.map