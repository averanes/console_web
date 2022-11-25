
'use strict';


const memoizedFuncion = memoization( (a, b) => {
    for (let i = 0; i < 10000000; i++); // for delay a bit

    return a + b
} );

console.time('First Exec')
console.log( memoizedFuncion(10, 6))
console.timeEnd('First Exec')

console.time('Second Exec')
console.log( memoizedFuncion(10, 6))
console.timeEnd('Second Exec')


function memoization(fn, $this) {
    const cache = {};

    return function (...args) {
        const keyCache = JSON.stringify(args);

        if (!cache[keyCache]) {
            cache[keyCache] = fn.call($this || this, ...args);
        }

        return cache[keyCache];


    }
}
