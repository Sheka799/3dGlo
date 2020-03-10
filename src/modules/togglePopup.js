const togglePopup = () => {
  const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupContent = document.querySelector('.popup-content');

  
    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        let width=document.body.clientWidth;
        let top=document.body.clientTop;
        if(width > 768) {
        let count = 0;
        let timer = setInterval(function() {
          popup.style.display = 'block';
          popupContent.style.position = 'relative';
          count++; 
          let position = 100;
          if(count <= position) {
            popupContent.style.top = count + 'px';
          } else {
            clearInterval(timer);
          }
        }, 1);
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