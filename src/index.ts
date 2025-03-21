import { countVowels } from "./CountVowels";
import { deepEqual } from "./DeepEqual";
import { findMissingNumber } from "./FindMissingNumber";
import { firstNonRepeatingChar } from "./FirstNonRepeatingChar";
import { LRUCache } from "./LRUCache";
import { reverseString } from "./ReverseString";
import { TaskManager } from "./TaskManager";

console.log(reverseString("hello"));
console.log(countVowels("typescriptA"));
console.log(findMissingNumber([1, 2, 3, 5, 6]));
console.log(firstNonRepeatingChar("swiss"));
console.log(firstNonRepeatingChar("racecar"));
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
console.log(deepEqual({ a: 1 }, { a: 1 })); // true
console.log(deepEqual({ a: 1 }, { a: "1" })); // false
console.log(deepEqual({ a: { b: 2 } }, { a: { b: 2 } })); // true
console.log(deepEqual({ a: { b: 2 } }, { a: { b: 3 } })); // false

const cache = new LRUCache(2);
cache.put(1, 1);  // Cache = {1=1}
cache.put(2, 2);  // Cache = {1=1, 2=2}
console.log(cache.get(1));  // Returns 1, Cache = {2=2, 1=1}
cache.put(3, 3);  // Evicts key 2, Cache = {1=1, 3=3}
console.log(cache.get(2));  // Returns null (not found)
cache.put(4, 4);  // Evicts key 1, Cache = {3=3, 4=4}
console.log(cache.get(1));  // Returns null (not found)
console.log(cache.get(3));  // Returns 3, Cache = {4=4, 3=3}
console.log(cache.get(4));  // Returns 4, Cache = {3=3, 4=4}


const taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.addTask("Complete TypeScript project");
taskManager.completeTask(1);
taskManager.displayTasks();
