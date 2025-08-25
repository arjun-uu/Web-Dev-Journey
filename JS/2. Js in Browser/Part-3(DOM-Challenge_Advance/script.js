
// Challenge 1: Basic Click Event
document.getElementById("clickBtn")
    .addEventListener("click", function () {
        document.getElementById("message").innerText = "Button clicked 🎉";
    });

// Challenge 2: Event Delegation
document.getElementById("teaList")
    .addEventListener("click", function (e) {
        if (e.target.classList.contains("tea")) {
            document.getElementById("teaChoice").innerText =
                "You selected: " + e.target.innerText;
        }
    });
    
// or
document.getElementById("teaList").addEventListener("click", (e) => {
    if (e.target && e.target.matches(".tea")) {
        document.getElementById("teaChoice").innerText =
            "You selected: " + e.target.innerText;
    }
});


// Challenge 3: Form Handling
document.getElementById("feedbackForm")
    .addEventListener("submit", function (e) {
        e.preventDefault(); // stop form refresh
        let feedback = document.getElementById("feedbackInput").value;
        document.getElementById("feedbackOutput").innerText =
            "Thank you! You said: " + feedback;
        document.getElementById("feedbackInput").value = ""; // clear input
    });

// Challenge 4: DOMContentLoaded Event
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loadedMsg").innerText = "✅ DOM fully loaded!";
});

// Challenge 5: CSS Class Manipulation
document.getElementById("toggleBtn").addEventListener("click", function () {
    const para = document.getElementById("stylePara");
    para.classList.toggle("highlight");
});
