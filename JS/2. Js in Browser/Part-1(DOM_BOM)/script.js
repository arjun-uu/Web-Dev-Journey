// DOM
// Access element by id
        const title = document.getElementById("title");
        console.log(title.innerText); // prints: Hello World

        // Change content
        const btn = document.getElementById("changeBtn");
        btn.onclick = function() {
            title.innerText = "DOM Changed!";
            title.style.color = "red"; // change style
        };


// BOM

// Window object
console.log(window.innerWidth); // width of browser
console.log(window.innerHeight); // height

// Location
console.log(window.location.href); // current URL

// Navigator
console.log(navigator.userAgent); // browser info

// History
// window.history.back(); // go back
// window.history.forward(); // go forward

// Alert, prompt, confirm
alert("Hello BOM!");
const name = prompt("Enter your name:");
const isSure = confirm("Are you sure?");

