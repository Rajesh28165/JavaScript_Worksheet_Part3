// Debugged Code

async function fetchData() {
    await new Promise((resolve) => setTimeout(() => {
        console.log("Task 1");
        resolve();
    }, 0));
    console.log("Task 2");
    await Promise.resolve().then(() => console.log("Task 3"));
    console.log("Completed!");
}
fetchData();
