function Cache(func) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log('Returning from cache');
            return cache.get(key);
        }

        const result = func(...args);
        cache.set(key, result);

        if (cache.size > 10) {
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
        }

        return result;
    };
}

export default Cache;
