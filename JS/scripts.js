const navLinks = document.querySelectorAll('nav div div ul li a');

navLinks.forEach(function(eachlink){
  eachlink.addEventListener('click', scrollTo);
});

function scrollTo(event){
  event.preventDefault();
  const targetID = event.target.getAttribute('href');
  const targetSection = document.querySelector(targetID);
  const originalTop = Math.floor(targetSection.getBoundingClientRect().top) - 120 ;
  window.scrollBy({top: originalTop, left: 0, behavior: 'smooth'});
}
