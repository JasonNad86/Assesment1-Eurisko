export function firstNonRepeatingChar(str: string): string | null {
    if (str.length === 0) return null;

    const map = new Map<string, number>();

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        map.set(char, map.get(char)! + 1 || 1); //map each char with its frequency
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (map.get(char) === 1) {  //return the char only appearing once
            return char; 
        }
    }

    return null; 
}
