"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstNonRepeatingChar = firstNonRepeatingChar;
function firstNonRepeatingChar(str) {
    if (str.length === 0)
        return null;
    const map = new Map();
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        map.set(char, map.get(char) + 1 || 1);
    }
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (map.get(char) === 1) {
            return char;
        }
    }
    return null;
}
//# sourceMappingURL=FirstNonRepeatingChar.js.map