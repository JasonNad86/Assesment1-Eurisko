export function findMissingNumber(arr: number[]): number {
    const n = arr.length + 1; // Since one number is missing, length of array is N-1
    const sumExpected = (n * (n + 1)) / 2; // Sum of first N numbers
    const sumActual = arr.reduce((sum, num) => sum + num, 0); // Sum of numbers in the array

    return sumExpected - sumActual;
}
