export function deepEqual(obj1: any, obj2: any): boolean {
    // Check if both are the same type
    if (obj1 === obj2) return true; // If both are identical (includes primitives and same references)

    // If one is null or not an object, they are not equal
    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
        return false;
    }

    // Get keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if they have the same number of properties
    if (keys1.length !== keys2.length) return false;

    // Recursively check each property
    for (let key of keys1) {
        // If the key is not in both objects or if recursive equality fails
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    // If all checks pass, the objects are deeply equal
    return true;
}
