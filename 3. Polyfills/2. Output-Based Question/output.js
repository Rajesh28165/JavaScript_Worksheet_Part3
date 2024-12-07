if (!Array.prototype.flat) {
    Array.prototype.flat = function(depth = 1) {
        return this.reduce((acc, val) => {
            if (Array.isArray(val) && depth > 0) {
                acc.push(...val.flat(depth - 1));
            } else {
                acc.push(val);
            }
            return acc;
        }, []);
    };
}

const input = [[1, 2], [3, [4]]];
console.log(input.flat());  

// Output: [1, 2, 3, [4]]
