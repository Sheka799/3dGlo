function coundTimer(deadline) {
  let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds'),
      colonOne = document.querySelector('#colonOne'),
      colonTwo = document.querySelector('#colonTwo');
  
      const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);
        if (hours < 10) { 
          hours = '0' + hours;
        }
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
        if (seconds < 10) {
          seconds = '0' + seconds;
        }
        return {timeRemaining, hours, minutes, seconds};
      };
     let idInterval = () => {
      let timer = getTimeRemaining();

      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;
      if(timer.timeRemaining < 0) {
        clearInterval(idInterval);
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
        timerHours.style.color = 'red';
        timerMinutes.style.color = 'red';
        timerSeconds.style.color = 'red';
        colonOne.style.color = 'red';
        colonTwo.style.color = 'red';
      }
     };
     
     setInterval(idInterval, 1000);
}

export default coundTimer;