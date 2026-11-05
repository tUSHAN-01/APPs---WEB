let dt_from = document.querySelector(".dt_from").value
let dt_to = document.querySelector(".dt_to").value
let btn = document.querySelector(".btn")
let copy = document.querySelector(".copy")
let displayBox = document.querySelector(".displayBox")


btn.addEventListener("click", () => {
    console.log("clicked");
    displayBox.innerHTML = `
    <div class="display">Daily Hazat Report from dtd. ${dt_from} to dtd. ${dt_to}</div>
    <button class="copy">COPY</button>`

})
displayBox.addEventListener("click", (event) => { //Copyed Code
    if (event.target.classList.contains("copy")) {
        console.log("copied");
    }

})
