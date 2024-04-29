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
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            // Here you can handle form submission
            // For example, send data to server using AJAX
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || subject === '' || message === '') {
            alert('Please fill out all fields.');
            return false;
        }

        return true;
    }


    //   menu icon

var menu = document.querySelector ('.menu');
var menuBtn  = document.querySelector('.menu-icon');
var closeBtn  = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
  menu.classList.add('active');

});

 closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');

 });


    

