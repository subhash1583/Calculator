let display = document.querySelector(".numm");

let equal = document.querySelector(".btnequal");
let clear = document.querySelector(".btnclear");
let btnn = document.querySelectorAll(".btn");
let day = document.getElementById("day");
let night = document.getElementById("night");
let cal = document.querySelector(".calculator");
let bodybtn = document.querySelector(".buttonContainer");
let btnswitch = btnn.target;

btnn.forEach(function(bb) {

    bb.addEventListener("click", function(e) {
        let value = e.target.dataset.num;
        display.value += value;


    })


})
equal.addEventListener("click", function() {

    if (display.value === "") {
        display.value = "enter";

    } else {

        display.value = eval(display.value);



    }
});
clear.addEventListener("click", function() {
    display.value = "";
})
day.addEventListener("click", function() {
    cal.style.backgroundColor = "#FFEEEE";

})
day.addEventListener("click", function() {
    bodybtn.style.backgroundColor = "#EBD8C3";

})
day.addEventListener("click", function() {
    display.style.backgroundColor = "#FFEEEE";
    display.style.color = "black";
})
day.addEventListener("click", function() {
    day.style.color = "black";
    night.style.color = "black";
})
night.addEventListener("click", function() {
    cal.style.backgroundColor = "";

})
night.addEventListener("click", function() {
    display.style.backgroundColor = "";
    display.style.color = "";
})
night.addEventListener("click", function() {
    bodybtn.style.backgroundColor = "";

})
night.addEventListener("click", function() {
    night.style.color = "";
    day.style.color = "";

})