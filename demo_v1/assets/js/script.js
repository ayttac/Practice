const title = document.querySelector(".titleMenuClick");
const menu = document.querySelector(".btnMenu");
const lang = document.querySelector(".lang");
const lang_list = document.querySelector(".lang_list");

let titleView = false;

menu.addEventListener("click", function() {
  if (!titleView) {
    title.style.display = "block";
    titleView = true;
  } else {
    title.style.display = "none";
    titleView = false;
  }
});

let titleLang = false;

lang.addEventListener("click", function() {
  if (!titleLang) {
    lang_list.style.display = "block";
    titleLang = true;
  } else {
    lang_list.style.display = "none";
    titleLang = false;
  }
});

// slick slider 
$('.cardList').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // prevArrow:``
});
$(".slick-next").text(">");
//or
$(".slick-next").html(">");

$(".slick-prev").text("<");
//or
$(".slick-prev").html("<"); 

const slick_arrow=document.querySelectorAll(".slick-arrow")
slick_arrow.innerText="";



// form 
const signUp = document.querySelector(".signUp");
const signIn = document.querySelector(".signIn");
const btnSignUP = document.querySelector(".btnSignUP");
const btnSignIN = document.querySelector(".btnSignIN");

// btnSignUP.addEventListener("click", () => {
//   signIn.style.display = signIn.style.display === 'none' ? 'block' : 'none';
//   signUp.style.display = signUp.style.display === 'none' ? 'block' : 'block';
// });

btnSignUP.addEventListener("click", () => {
  if (signIn.style.display === 'block') {
    signIn.style.display = 'none'; 
  }
  signUp.style.display = 'block'; 
});


btnSignIN.addEventListener("click", () => {
  if (signIn.style.display === 'none') {
    signIn.style.display = 'block'; 
  }
  signUp.style.display = 'none'; 
});


const signInBox = document.querySelector(".signInBox");
const sing_in = document.querySelector(".sing_in");
let viewAcoount = false;

sing_in.addEventListener("click", function() {
  if (!viewAcoount) {
    signInBox.style.display = "block";
    viewAcoount = true;
  } else {
    signInBox.style.display = "none";
    viewAcoount = false;
  }
});