// ================= TYPING ANIMATION =================


const typingText = document.getElementById("typing");


const words = [

"AI & Data Science Student",

"Aspiring Data Analyst",

"Future AI Engineer",

"Python Developer",

"Problem Solver"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;



function typingAnimation(){


let currentWord = words[wordIndex];



if(!deleting){


typingText.textContent =
currentWord.substring(0,charIndex++);



if(charIndex > currentWord.length){

deleting = true;

setTimeout(typingAnimation,1000);

return;

}


}

else{


typingText.textContent =
currentWord.substring(0,charIndex--);



if(charIndex < 0){

deleting=false;

wordIndex++;



if(wordIndex >= words.length){

wordIndex=0;

}

}

}


setTimeout(typingAnimation,100);

}



typingAnimation();









// ================= MOBILE MENU =================


const menuIcon =
document.querySelector(".menu-icon");


const navLinks =
document.querySelector(".nav-links");



menuIcon.addEventListener("click",()=>{


navLinks.classList.toggle("active");


});










// ================= SCROLL ANIMATION =================



const cards =
document.querySelectorAll(

".skill-card, .project-card, .certificate-card, .achievement-card, .goal-card"

);



window.addEventListener("scroll",()=>{


cards.forEach(card=>{


const cardPosition =
card.getBoundingClientRect().top;


const screenPosition =
window.innerHeight - 100;



if(cardPosition < screenPosition){


card.style.opacity="1";

card.style.transform="translateY(0)";


}



});


});









// Initial card animation setup


cards.forEach(card=>{


card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="0.6s";


});











// ================= ACTIVE NAVBAR =================


const sections =
document.querySelectorAll("section");


const navItems =
document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


const sectionTop =
section.offsetTop - 100;


if(scrollY >= sectionTop){

current = section.getAttribute("id");

}


});



navItems.forEach(link=>{


link.classList.remove("active");



if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}


});


});











// ================= CONTACT FORM =================


const form =
document.querySelector(".contact-form");



form.addEventListener("submit",(event)=>{


event.preventDefault();



alert(

"Thank you for contacting me! I will get back to you soon."

);



form.reset();



});











// ================= CURRENT YEAR =================



const year =
new Date().getFullYear();



const footer =
document.querySelector("footer p:last-child");



footer.innerHTML =

`© ${year} Akash. All Rights Reserved.`;










