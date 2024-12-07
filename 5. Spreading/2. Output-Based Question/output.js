function mergeArraysRemoveDuplicates(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

const result = mergeArraysRemoveDuplicates([1, 2], [2, 3]);
console.log(result);