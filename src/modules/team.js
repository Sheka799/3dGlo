const team = () => {

  const command = document.querySelector('.command');
  
  command.onmouseover = (event) => {
  let target = event.target; 
  target.dataset.newsrc = target.src;
  target.src = target.dataset.img;
  };
  command.onmouseout = (event) => {
  let target = event.target; 
  target.src =  target.dataset.newsrc;
  };
  };

  export default team;