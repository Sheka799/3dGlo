
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

    const timerDelete = () => {
      statusMessage.textContent = '';
      statusMessage.textContent = '';
    };


  // //  Форма в HEADER
  form.addEventListener('submit', (event) => {
    event.preventDefault();  //  для того, чтобы страница не перезагружалась
    form.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });
  
    postData(body)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('status network not 200');
      }
      statusMessage.textContent = successMessage;
      statusMessage.style.cssText = 'color: white';
      form.reset();
      setTimeout(timerDelete, 5000);
    })
    .catch((error) => {
      statusMessage.textContent = errorMessage;
      statusMessage.style.cssText = 'color: white';
      form.reset();
      console.error(error);
      setTimeout(timerDelete, 5000);
  });
  });

  //  Форма в Footer
   formFooter.addEventListener('submit', (event) => {
    event.preventDefault();  //  для того, чтобы страница не перезагружалась
    formFooter.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formDataFooter = new FormData(formFooter);
    let body = {};
    formDataFooter.forEach((val, key) => {
      body[key] = val;
    });
   
    postData(body)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('status network not 200');
      }
      statusMessage.textContent = successMessage;
      statusMessage.style.cssText = 'color: white';
      formFooter.reset();
      setTimeout(timerDelete, 5000);
    })
    .catch((error) => {
      statusMessage.textContent = errorMessage;
      statusMessage.style.cssText = 'color: white';
      formFooter.reset();
      console.error(error);
      setTimeout(timerDelete, 5000);
  });
  });

   //  Форма в Modal
   formModal.addEventListener('submit', (event) => {
    event.preventDefault();  //  для того, чтобы страница не перезагружалась
    formModal.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    statusMessage.style.cssText = 'color: white';
    const formDataModal = new FormData(formModal);
    let body = {};
    formDataModal.forEach((val, key) => {
      body[key] = val;
    });
    
    postData(body)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('status network not 200');
      }
      statusMessage.textContent = successMessage;
      statusMessage.style.cssText = 'color: white';
      formModal.reset();
      setTimeout(timerDelete, 5000);
    })
    .catch((error) => {
      statusMessage.textContent = errorMessage;
      statusMessage.style.cssText = 'color: white';
      formModal.reset();
      console.error(error);
      setTimeout(timerDelete, 5000);
  });
  
  
});
const postData = (body) => {
  return fetch('./server.php', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
 };
};

export default sendForm;