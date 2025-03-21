"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LRUCache = void 0;
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map(); // Stores key-value pairs
        this.order = []; // Stores the order of keys (most recent at the start)
    }
    // Get the value from cache
    get(key) {
        // If the key doesn't exist in the cache, return null
        if (!this.map.has(key))
            return null;
        // Move the accessed key to the front (most recent)
        this._moveToFront(key);
        return this.map.get(key);
    }
    // Put a key-value pair in the cache
    put(key, value) {
        // If the key already exists, update its value and move it to the front
        if (this.map.has(key)) {
            this.map.set(key, value);
            this._moveToFront(key);
        }
        else {
            // If the cache is at capacity, remove the least recently used (LRU) item
            if (this.map.size >= this.capacity) {
                const lruKey = this.order.pop();
                this.map.delete(lruKey);
            }
            // Add the new key-value pair to the cache
            this.map.set(key, value);
            this.order.unshift(key); // Add key to the front
        }
    }
    // Helper function to move a key to the front (most recent)
    _moveToFront(key) {
        // Remove the key from the order array
        const index = this.order.indexOf(key);
        if (index !== -1) {
            this.order.splice(index, 1);
        }
        // Add the key to the front of the order array
        this.order.unshift(key);
    }
}
exports.LRUCache = LRUCache;
//# sourceMappingURL=LRUCache.js.map