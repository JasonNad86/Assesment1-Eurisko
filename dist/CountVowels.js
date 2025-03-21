"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countVowels = countVowels;
function countVowels(str) {
    let count = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                count++;
                break;
        }
    }
    return count;
}
//# sourceMappingURL=CountVowels.js.map