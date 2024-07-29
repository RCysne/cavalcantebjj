const segunda = document.getElementById('segunda')
const terca = document.getElementById('terca');
const quarta = document.getElementById('quarta');
const quinta = document.getElementById('quinta');
const sexta = document.getElementById('sexta');



segunda.addEventListener('mouseover', () => {

  segunda.style.color = "#BE0000"
  
  let monday = document.querySelectorAll('.monday');
  
  monday.forEach(day => {
    day.style.color = "#BE0000";
    day.style.textShadow = ".5px .5px .5px #ff0000, 1px 1px 1px #000";
  })
})

segunda.addEventListener('mouseout', () => {

  segunda.style.color = "#fff";

  let monday = document.querySelectorAll('.monday');

  monday.forEach(day => {
    day.style.color = "#fff";
    day.style.textShadow = "initial";
  })
})



terca.addEventListener('mouseover', () => {

  terca.style.color = "#BE0000"

  let tuesday = document.querySelectorAll('.tuesday');

  tuesday.forEach(day => {
    day.style.color = "#BE0000";
    day.style.textShadow = ".5px .5px .5px #ff0000, 1px 1px 1px #000";
  })
})

terca.addEventListener('mouseout', () => {

  terca.style.color = "#fff";

  let tuesday = document.querySelectorAll('.tuesday');

  tuesday.forEach(day => {
    day.style.color = "#fff";
    day.style.textShadow = "initial";
  })
})




quarta.addEventListener('mouseover', () => {

  quarta.style.color = "#BE0000"

  let wednesday = document.querySelectorAll('.wednesday');

wednesday.forEach(day => {
    day.style.color = "#BE0000";
    day.style.textShadow = ".5px .5px .5px #ff0000, 1px 1px 1px #000";
  })
})

quarta.addEventListener('mouseout', () => {

  quarta.style.color = "#fff";

  let wednesday = document.querySelectorAll('.wednesday');

wednesday.forEach(day => {
    day.style.color = "#fff";
    day.style.textShadow = "initial";
  })
})

quinta.addEventListener('mouseover', () => {

  quinta.style.color = "#BE0000"
  
  let thursday = document.querySelectorAll('.thursday');
  
  thursday.forEach(day => {
    day.style.color = "#BE0000";
    day.style.textShadow = ".5px .5px .5px #ff0000, 1px 1px 1px #000";
  })
})

quinta.addEventListener('mouseout', () => {

  quinta.style.color = "#fff";

  let thursday = document.querySelectorAll('.thursday');

  thursday.forEach(day => {
    day.style.color = "#fff";
    day.style.textShadow = "initial";
  })
})

sexta.addEventListener('mouseover', () => {

  sexta.style.color = "#BE0000"
  
  let friday = document.querySelectorAll('.friday');
  
  friday.forEach(day => {
    day.style.color = "#BE0000";
    day.style.textShadow = ".5px .5px .5px #ff0000, 1px 1px 1px #000";
  })
})

sexta.addEventListener('mouseout', () => {

  sexta.style.color = "#fff";

  let friday = document.querySelectorAll('.friday');

  friday.forEach(day => {
    day.style.color = "#fff";
    day.style.textShadow = "initial";
  })
})

