let head = document.querySelector("#header-container");
head.style.backgroundColor = "blue";

let eTasks = document.querySelector(".emergency-tasks");
eTasks.style.backgroundColor = "red";

let nETasks = document.querySelector(".no-emergency-tasks");
nETasks.style.backgroundColor = "yellow";

let subs = document.querySelectorAll("h3");
for (let index = 0; index < subs.length; index++) {
    subs[index].style.backgroundColor = "black";
}

let footer = document.querySelector("#footer-container");
footer.style.backgroundColor = "purple";