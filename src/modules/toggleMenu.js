const toggleMenu = () => {

  const menu = document.querySelector('menu'),
   li = document.querySelectorAll('li a');
   for (let i=0; i < li.length; i++) {
    li[i].classList.add('li');
   }
  
    document.addEventListener('click', (event) => {
      let target = event.target;
        if(target.classList.contains('menu')) {
          menu.classList.add('active-menu');
        } 
        else if(target.classList.contains('close-btn')) {
          menu.classList.remove('active-menu');
        } 
        else if(target.classList.contains('li')) {
          menu.classList.remove('active-menu');
        } 
          else {
            target = target.closest('menu');
            if(!target) {
            menu.classList.remove('active-menu');
            }
          }
    });
    
    const links = document.querySelectorAll('a[href*="#"]');

for (let link of links) {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    
    const block = link.getAttribute('href').substr(1);
    
    document.getElementById(block).scrollIntoView({
      behavior: 'smooth',
      // block: 'start'
    });
  });
}
  };

export default toggleMenu;