window.addEventListener('load', function() {
   var elementos = document.querySelectorAll('.tamaño');
   elementos.forEach(function(elemento) {
     elemento.style.visibility = 'visible';
   });
 });
 



window.sr = ScrollReveal();
 sr.reveal(' .site-header-primary-section-right' , {
    duration:3000,
    origin:'bottom',
    distance:'-100px'
 })
 
 sr.reveal(' .site-branding' , {
    duration:3000,
    origin:'bottom',
    distance:'-100px'
 })
 
 sr.reveal(' .st-builder-layout-element' , {
    duration:3000,
    origin:'bottom',
    distance:'-100px'
 })
 sr.reveal(' .efecto' , {
    duration:4000,
    origin:'left',
    distance:'400px'
 })