export function reverseString(str: string): string {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) { //loop from end to start to get the reverse
        reversed += str[i];
    }
    return reversed;
}

