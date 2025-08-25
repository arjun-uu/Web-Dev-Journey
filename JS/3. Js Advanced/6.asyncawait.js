// Simulate an async operation
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "Arjun", url: "abcdef.com" });
        }, 3000);
    });
}

// Using async-await
async function getData() {
    console.log("Fetching data...");

    try {
        const userData = await fetchData(1500); // Wait for promise to resolve
        console.log("user-data is : ", userData);
    } catch (error) {
        console.log("Error fetching the data :", error);
    }
}

getData();



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Fetch post data
function fetchPostData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Post data fetched successfully!");
            // reject("Failed to fetch post data"); // Uncomment to test error
        }, 2000);
    });
}

// Fetch comment data
function fetchCommentData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Comment data fetched successfully!");
            // reject("Failed to fetch comment data"); // Uncomment to test error
        }, 1500);
    });
}

// Using async-await with Promise.all
async function getBlogData() {
    console.log("Fetching data...");

    try {
        // Run both promises in parallel
        const [post, comment] = await Promise.all([fetchPostData(), fetchCommentData()]);
        console.log(post);
        console.log(comment);
    } catch (error) {
        console.log("Error:", error); // Catches if any promise rejects
    }
}

getBlogData();
