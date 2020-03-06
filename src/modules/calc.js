const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block'),
  calcType = document.querySelector('.calc-type'),
  calcSquare = document.querySelector('.calc-square'),
  calcDay = document.querySelector('.calc-day'),
  calcCount = document.querySelector('.calc-count'),
  totalValue = document.getElementById('total');

  const countSum = () => {
    let total = 0,
    countValue = 1,
    dayValue = 1;
    const typeValue = calcType.options[calcType.selectedIndex].value,
    squareValue = +calcSquare.value;

    if(calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }

    if(typeValue && squareValue) {
      total = price * typeValue * squareValue * countValue * dayValue;
    }
    
    let setValue = (total, value) => {
      if(total.textContent < value) {
        let interval = setInterval(() => {
        if (total.textContent*1 + 10 >= value) {
          total.textContent = value;
          clearInterval(interval);
        } else {
          total.textContent = total.textContent*1 + 300;
        }
      }, 10);
    } else if (total.textContent > value) {
      let interval = setInterval(() => {
        if (total.textContent*1 - 10 <= value) {
          total.textContent = value;
          clearInterval(interval);
        } else {
          total.textContent = total.textContent*1 - 300;
        }
      }, 10);
    }
  };
    setValue(totalValue, total);
    
  };

  calcBlock.addEventListener('change', (event) => {
    const target = event.target;

    // if(target.mathes('.calc-type') || target.mathes('.calc-square') ||        //Первый вариант выполнения
    // target.mathes('.calc-day') || target.mathes('.calc-count')) {
    //   countSum();
    // }

    // Второй вариант: 
    
    if(target === calcType || target === calcSquare || target === calcDay || target === calcCount) {
      countSum();
    }
  });

  let inputs = document.querySelectorAll('.calc-item');
  
  calcBlock.addEventListener('input', () => {
  
  for (let i = 0; i < inputs.length; i++) {
  inputs[i].value = inputs[i].value.replace (/[^\+\d]/g, '');
  }
  });
};

export default calc;