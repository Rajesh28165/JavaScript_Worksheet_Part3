// Corrected Code:

function multiply(...nums) {
    if (nums.length === 0) return 1;
    return nums.reduce((prod, num) => prod * num, 1);
}
console.log(multiply());
