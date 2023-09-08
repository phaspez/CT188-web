let count = 0;

const button = document.getElementById("buttonCounter");

button.addEventListener("click", ()=> {
    count += 1;
    let label = document.getElementById("labelCounter");
    label.innerText = "Count is " + count.toString();
});