// Landing typing effect
var type = ["Jupiter Coffee Shop is always here"];
var textPosition=0;
var speed =100;

let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started = false; // Function Started ? No

    window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
        nums.forEach((num) => startCount(num));
        }
        started = true;
    }
    };

    function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
        clearInterval(count);
        }
    }, 2000 / goal);
    }
typewriter =()=>{
    document.querySelector(".diff").innerHTML = type[0].substring(0,textPosition) + "<span class= \"rec\"> \u25ae </span>";
    if(textPosition++ != type[0].length){
        setTimeout(typewriter,speed);
    }
}

window.addEventListener("load",typewriter);

// // Progress bars effect
// let section1 = document.querySelector(".skills .container");
// let progress = document.querySelectorAll(".progress-bar");

// //active section effect
// let PageSections = document.querySelectorAll(".page")
// let tabs = document.querySelectorAll(".nav-link");

// window.onscroll=function(){

//     if(window.scrollY>=section1.offsetTop -150){
//         progress.forEach((prog) =>{
//             prog.style.width = prog.dataset.width;
//         })
//     }
// }



