
const sendForm = () => {
  const errorMessage = 'Что то пошло не так...',
  loadMessage = 'Загрузка...',
  successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

  const form = document.getElementById('form1'),
  formFooter = document.getElementById('form2'),
  formModal = document.getElementById('form3');

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem';
 
  const formOne = document.getElementById('form1-phone');
  const formTwo = document.getElementById('form2-phone');
  const formThree = document.getElementById('form3-phone');

  form.addEventListener('input', () => {
      formOne.value = formOne.value.replace (/[^\+\d]/g, '');
    });
  formFooter.addEventListener('input', () => {
      formTwo.value = formTwo.value.replace (/[^\+\d]/g, '');
    });
  formModal.addEventListener('input', () => {
      formThree.value = formThree.value.replace (/[^\+\d]/g, '');
    });

    const formName = document.querySelectorAll('.form-name');
   
    document.addEventListener('input', () => {
      for (let i = 0; i < formName.length; i++) {
        formName[i].value = formName[i].value.replace(/[^А-Яа-яЁё\s]/gi, '');
      }
    });



  // //  Форма в HEADER
  form.addEventListener('submit', (event) => {
    event.preventDefault();  //  для того, чтобы страница не перезагружалась
    form.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form);
  
    postData(formData)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('status network not 200');
      }
      statusMessage.textContent = successMessage;
      statusMessage.style.cssText = 'color: white';
      form.reset();
    })
    .catch((error) => {
      statusMessage.textContent = errorMessage;
      statusMessage.style.cssText = 'color: white';
      form.reset();
      console.error(error);
  });
  });

  //  Форма в Footer
   formFooter.addEventListener('submit', (event) => {
    event.preventDefault();  //  для того, чтобы страница не перезагружалась
    formFooter.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formDataFooter = new FormData(formFooter);
   
    postData(formDataFooter)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('status network not 200');
      }
      statusMessage.textContent = successMessage;
      statusMessage.style.cssText = 'color: white';
      formFooter.reset();
    })
    .catch((error) => {
      statusMessage.textContent = errorMessage;
      statusMessage.style.cssText = 'color: white';
      formFooter.reset();
      console.error(error);
  });
  });

   //  Форма в Modal
   formModal.addEventListener('submit', (event) => {
    event.preventDefault();  //  для того, чтобы страница не перезагружалась
    formModal.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    statusMessage.style.cssText = 'color: white';
    const formDataModal = new FormData(formModal);
    
    postData(formDataModal)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('status network not 200');
      }
      statusMessage.textContent = successMessage;
      statusMessage.style.cssText = 'color: white';
      formModal.reset();
    })
    .catch((error) => {
      statusMessage.textContent = errorMessage;
      statusMessage.style.cssText = 'color: white';
      formModal.reset();
      console.error(error);
  });
  
  
});
const postData = (formDataModal, formDataFooter, formData) => {
  return fetch('./server.php', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(formDataModal, formDataFooter, formData)
  });
 };
};

export default sendForm;