// ===============================
// 📘 Promise with Timeout Example
// ===============================

let promise = new Promise((resolve, reject) => {
    console.log("⏳ Task started...");

    setTimeout(() => {
        let success = true; // change to false to see rejection

        if (success) {
            resolve("✅ Task completed successfully after 2 seconds!");
        } else {
            reject("❌ Task failed after 2 seconds!");
        }
    }, 2000); // async wait 2 seconds
});

// Handling promise
promise
    .then((result) => {
        console.log(result);
        return `Arjun`;
    })   // when resolved
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })    // when rejected
    .finally(() => console.log("Promise finished (either success or fail)."));
