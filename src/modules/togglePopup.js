const togglePopup = () => {
  const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupContent = document.querySelector('.popup-content');

  
    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        let width=document.body.clientWidth;
        if(width > 768) {
        let count = 0;
        let timer = setInterval(function() {
          popup.style.display = 'block';
          popupContent.style.position = 'relative';
          count++;
          let position = popup.offsetWidth / 10;
          if(count <= position) {
            popupContent.style.left = count * 4 + 'px';
          } else {
            clearInterval(timer);
          }
          
        }, 10);
      } else {
        popup.style.display = 'block';
      }
      });
    });

    popup.addEventListener('click', () => {
      let target = event.target;
      if(target.classList.contains('popup-close')) {
        popup.style.display = 'none';
      } else{
      target = target.closest('.popup-content');
      if(!target) {
        popup.style.display = 'none';
      }
    }
    });
};

export default togglePopup;