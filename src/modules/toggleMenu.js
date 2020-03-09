const toggleMenu = () => {

  const menu = document.querySelector('menu'),
   li = document.querySelectorAll('li a');
   for (let i=0; i < li.length; i++) {
    li[i].classList.add('li');
   }
   const btnMenu = document.querySelector('.menu');
   btnMenu.addEventListener('click', () => {
     menu.classList.toggle('active-menu');
   });
   
   menu.addEventListener('click', () => {
     let target = event.target;
     if(target.classList.contains('close-btn')) {
       menu.classList.toggle('active-menu');
     } 
     else if(target.classList.contains('li')) {
        menu.classList.remove('active-menu');
      } 
    //  else {
    //    target = target.closest('document');
    //    if(!target) {
    //      menu.classList.toggle('active-menu');
    //    }
    //  }
   });
  };

export default toggleMenu;