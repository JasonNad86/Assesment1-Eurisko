"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CountVowels_1 = require("./CountVowels");
const DeepEqual_1 = require("./DeepEqual");
const FindMissingNumber_1 = require("./FindMissingNumber");
const FirstNonRepeatingChar_1 = require("./FirstNonRepeatingChar");
const LRUCache_1 = require("./LRUCache");
const ReverseString_1 = require("./ReverseString");
const TaskManager_1 = require("./TaskManager");
console.log((0, ReverseString_1.reverseString)("hello"));
console.log((0, CountVowels_1.countVowels)("typescriptA"));
console.log((0, FindMissingNumber_1.findMissingNumber)([1, 2, 3, 5, 6]));
console.log((0, FirstNonRepeatingChar_1.firstNonRepeatingChar)("swiss"));
console.log((0, FirstNonRepeatingChar_1.firstNonRepeatingChar)("racecar"));
console.log((0, DeepEqual_1.deepEqual)({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log((0, DeepEqual_1.deepEqual)({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
console.log((0, DeepEqual_1.deepEqual)({ a: 1 }, { a: 1 })); // true
console.log((0, DeepEqual_1.deepEqual)({ a: 1 }, { a: "1" })); // false
console.log((0, DeepEqual_1.deepEqual)({ a: { b: 2 } }, { a: { b: 2 } })); // true
console.log((0, DeepEqual_1.deepEqual)({ a: { b: 2 } }, { a: { b: 3 } })); // false
const cache = new LRUCache_1.LRUCache(2);
cache.put(1, 1); // Cache = {1=1}
cache.put(2, 2); // Cache = {1=1, 2=2}
console.log(cache.get(1)); // Returns 1, Cache = {2=2, 1=1}
cache.put(3, 3); // Evicts key 2, Cache = {1=1, 3=3}
console.log(cache.get(2)); // Returns null (not found)
cache.put(4, 4); // Evicts key 1, Cache = {3=3, 4=4}
console.log(cache.get(1)); // Returns null (not found)
console.log(cache.get(3)); // Returns 3, Cache = {4=4, 3=3}
console.log(cache.get(4)); // Returns 4, Cache = {3=3, 4=4}
const taskManager = new TaskManager_1.TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.addTask("Complete TypeScript project");
taskManager.completeTask(1);
taskManager.displayTasks();
//# sourceMappingURL=index.js.map