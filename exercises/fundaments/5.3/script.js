function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // Exercicio 01
  function createDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysList = document.querySelector('#days');
    const holiday = [24, 25, 31];
    const fridays = [4, 11, 18, 25];

    for (let index in dezDaysList) {
      const days = dezDaysList[index];
      const daysCreate = document.createElement('li');
      daysCreate.innerText = days;
      daysCreate.className = 'day';

      if (holiday.includes(days)) {
        daysCreate.className += ' holiday';
      }

      if (fridays.includes(days)) {
        daysCreate.className += ' friday';
      }       

      daysList.appendChild(daysCreate);
    }
  }

  createDays();

  // Exercicio 02
  function holiday(string) {
    const button = document.createElement('button');
    button.id = 'btn-holiday';
    button.innerText = string;
    const buttonDiv = document.querySelector('.buttons-container');
    buttonDiv.appendChild(button);
  }
  holiday('Feriado');

  // Exercicio 03
  let buttonP = document.querySelector('#btn-holiday');
  buttonP.addEventListener('click', clickChangeColor);

  function clickChangeColor() {
    const holidayB = document.querySelectorAll('.holiday')
    for (let index = 0; index < holidayB.length; index += 1) {
      if (holidayB[index].style.backgroundColor !== 'green') {
        holidayB[index].style.backgroundColor = 'green';
        holidayB[index].style.color = 'white';
      } else {
        holidayB[index].style.backgroundColor = 'rgb(238, 238, 238)';
        holidayB[index].style.color = 'rgb(119, 119, 119)';
      }
    }
  }

  // Exercicio 04
  function createButtonSexta(string) {
    const button = document.createElement('button');
    button.id = 'btn-friday';
    button.innerText = string;
    const buttonDiv = document.querySelector('.buttons-container');
    buttonDiv.appendChild(button);
  }

  createButtonSexta('Sexta-Feira');

  // Exercicio 05
  let buttonSexta = document.querySelector('#btn-friday')
  buttonSexta.addEventListener('click', clickChangeDay)

  function clickChangeDay() {
    const fridays = [4, 11, 18, 25];
    const fridayB = document.querySelectorAll('.friday');
    for (let index in fridayB) {
      if (fridayB[index].innerText == 'SEXTOUU') {
        fridayB[index].innerText = fridays[index];
      } else {
        fridayB[index].innerText = 'SEXTOUU';
      }
    }
  }
  // Exercicio 06
  function DaysLoop(){
    let zoomDays = document.querySelectorAll('.day');
    for (let index = 0; index < zoomDays.length; index += 1){
      zoomDays[index].addEventListener('mouseover', zoom);
      zoomDays[index].addEventListener('mouseleave', zoomLeave);
      zoomDays[index].addEventListener('click', colorDaysChange);
    }
  }
  DaysLoop();

  function zoom(origin) {
    origin.target.style.fontSize = '25px';
  }

  function zoomLeave(origin) {
    origin.target.style.fontSize = '20px';
  }
  
  // Exercicio 07
  let buttonAddTasks = document.querySelector('#btn-add');
  buttonAddTasks.addEventListener('click', createTask);

  function createTask() {
    const text = document.querySelector('#task-input');
    const textSpan = document.createElement('span');
    textSpan.innerText = text.value;
    const finalDiv = document.querySelector('.my-tasks');
    finalDiv.appendChild(textSpan);
  }

  // Exercicio 09
  function taskDivLoop() {
    const divTasks = document.querySelectorAll('.task');
    for (let index = 0; index < divTasks.length; index += 1) {
      divTasks[index].addEventListener('click', selecteTask)
    }
  }

  function selecteTask(origin) {
    if (origin.target.className != 'task selected') {
      origin.target.className = 'task selected';
    } else {
      origin.target.className = 'task';
    }
  }

  // Exercicio 08
  // Referencia do gerador de cor Random:
  // https://stackoverflow.com/questions/1484506/random-color-generator
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  buttonAddTasks.addEventListener('click', changeColorTask);

  function changeColorTask() {
    const colorDiv = document.createElement('div');
    colorDiv.className = 'task';
    colorDiv.style.backgroundColor = getRandomColor();
    const finalDiv = document.querySelector('.my-tasks');
    finalDiv.appendChild(colorDiv);
    taskDivLoop();

  }

  // Exercicio 10
  function colorDaysChange(origin) {
    const taskColor = document.querySelector('.task.selected')
    if (origin.target.style.color == taskColor.style.backgroundColor) {
      origin.target.style.color = taskColor.style.backgroundColor;
      console.log(myColor);
    } else {
      origin.target.style.color = rgb(119, 119, 119);
    }
  }
  