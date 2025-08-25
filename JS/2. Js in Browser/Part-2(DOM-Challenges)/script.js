// Challenge 1
function changeText() {
    const para = document.getElementById("para")
    para.innerText = "Paragraph changed! 🎉";
}
// recommended
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    let paragraph = document.getElementById("para");
    paragraph.innerText = "Paragraph changed!";
});


// Challenge 2
function highlightFirstCity() {
    const firstCity = document.querySelector("#cities li");
    firstCity.classList.toggle("highlight");
}

// Challenge 3
function changeOrder() {
    document.getElementById("order").innerText = "Order: Espresso ☕";
}

// Challenge 4
function addItem() {
    const ul = document.getElementById("shoppingList");
    const li = document.createElement("li");
    li.innerText = "Eggs";
    ul.appendChild(li);
}

// Challenge 5
function removeLastTask() {
    const ul = document.getElementById("tasks");
    if (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
    }
}