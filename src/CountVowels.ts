export function countVowels(str: string): number {
    let count = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {   //if vowel increment counter
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