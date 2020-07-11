const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

let currSlide = 1;
showSlide(currSlide);

function button_click(num){
    showSlide((currSlide += num ))
}

function showSlide(num){
    const slides = document.querySelectorAll(".slide");
    if(num > slides.length){
        currSlide = 1;
    }if(num < 1){
        currSlide = slides.length;
    }
    for( let i = 0; i < slides.length; i++){
        slides[i].style.display="none";
    }slides[currSlide - 1].style.display="block"
}