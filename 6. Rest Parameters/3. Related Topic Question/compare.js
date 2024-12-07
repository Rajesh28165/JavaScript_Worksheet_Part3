function extractFirstAndRest(first, ...rest) {
    console.log(first); // 1
    console.log(rest); // [2, 3, 4]
}

extractFirstAndRest(1, 2, 3, 4);
