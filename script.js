//toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar')

menuIcon.onclick=()=>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

//scroll sections active link

let sections =document.querySelectorAll('section')
let navlinks =document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top=window.scrollY;
    let offset=sec.offsetTop-150;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id');
    if(top >= offset && top < offset +height){
      navlinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*='+id+']').classList.add('active');
      });
    };
  });
  //sticky navbar
  let header=document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY > 100);

  //remove toggle icon and navbar when click navbar link(scroll)

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

//scroll reveal

ScrollReveal({
  reset:true,
  distance:'80px',
  duration:2000,
  delay:200
});

ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .sevices-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-comtent',{origin:'right'});

//typed js

const typed=new Typed('.multiple-text',{
  strings:['Full-Stack Web Developer','Photo-Video Editor',"Gamer"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});

const themeToggle=document.querySelector("input[id=ckbox]");
var root = document.querySelector(':root');

function dark() {
  root.style.setProperty('--bg-color', '#0a062d');
  root.style.setProperty('--second-bg-color', '#1c1830');
  root.style.setProperty('--text-color', '#cceeff');
  root.style.setProperty('--main-color', '#00dbeb');

}
function light() {
  root.style.setProperty('--bg-color', '#F5F5F5');
  root.style.setProperty('--second-bg-color', '#F2EAD3');
  root.style.setProperty('--text-color', '#3F2305');
  root.style.setProperty('--main-color', '#6C3428');

}
themeToggle.addEventListener("change",function(){
  if(this.checked){
    console.log("checked")
    light()
  }else{
    dark()
  }
})

