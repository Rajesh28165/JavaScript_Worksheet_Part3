// Debugged Code:
async function fetchData() {
    try {
        const response = await fetch("invalid-url");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(await response.json());
    } catch (error) {
        console.error("Error:", error.message);
    }
}
fetchData();