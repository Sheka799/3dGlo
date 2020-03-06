'use scrict';

window.addEventListener('DOMContentLoaded', function() {

let date = new Date(),
morning = 'Доброе утро', 
day = 'Добрый день', 
evening = 'Добрый вечер', 
night = 'Доброй ночи',
hours = date.getHours(),
week = date.getDay();
  
function timeOfDay() {
    if (hours >= 5 && hours < 11) {
      hours = morning;
    }
    if (hours >= 11 && hours < 16) {
      hours = day;
    }
    if (hours >= 16 && hours < 23) {
      hours = evening;
    }
    if (hours >= 23 && hours < 5) {
      hours = night;
    }
    return(hours);
    }
  
    function weekday() {
      let weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

      for(let i = 0; i < weekDays.length; i++) {
        return (weekDays[week]);
      }
    }

function newYear() {
   
  let dateStop = new Date(2021,0,1).getTime(),
    dateNow = new Date().getTime(),
    timeRemaining = (dateStop - dateNow) / 1000,
    timeNewYear = Math.floor(timeRemaining / 60 / 60 / 24);

    return timeNewYear;
}
  console.log(timeOfDay());
  console.log(`Сегодня: ${weekday()}`);
  console.log(`Текущее время: ${date.toLocaleTimeString('en')}`);
  console.log(`До нового года осталось ${newYear()} дней`);
});