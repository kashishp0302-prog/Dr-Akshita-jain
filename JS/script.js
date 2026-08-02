console.log("Website Loaded Successfully");/*=========================================
  Dr. Akshita Jain Website
=========================================*/

// Lucide Icons

lucide.createIcons();


// AOS

AOS.init({

    duration:1000,

    once:true,

    offset:120

});


// ==============================
// Scroll To Top
// ==============================

const scrollTop=document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollTop.classList.add("show");

    }else{

        scrollTop.classList.remove("show");

    }

});

scrollTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ==============================
// Navbar Shadow
// ==============================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>20){

        navbar.style.boxShadow="0 20px 45px rgba(0,0,0,.12)";

    }

    else{

        navbar.style.boxShadow="0 15px 40px rgba(0,0,0,.08)";

    }

});


// ==============================
// FAQ
// ==============================

const questions=document.querySelectorAll(".faq-question");

questions.forEach(question=>{

    question.addEventListener("click",()=>{

        const answer=question.nextElementSibling;

        answer.classList.toggle("open");

    });

});
/*=============================
 Mobile Menu
=============================*/

const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

    nav.classList.toggle("active");

});