window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky" ,window.scrollY > 0);
});
var menu = document.querySelector ('.menu');
var menuBtn  = document.querySelector('.menu-icon');
var closeBtn  = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
  menu.classList.add('active');

});

 closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');

 });

 let valueDisplays = document.querySelectorAll(".number1")
let interval = 4000;

// console.log(valueDisplays);

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute 
        ("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, (duration)
        )

    // console.log(endValue);

})