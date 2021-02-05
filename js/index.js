const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body"),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

  //console.log('colors.length: ', colors.length);   

const timer = {
  toggleColorId: null,
  isActive: false,   // щоб не накопичувати багаторазову активацію start
  start() {
        console.log('this - start', this, 'this.isActive', this.isActive);
    if (this.isActive) {
      return;
    }

    this.isActive = true; // якщо start вже активний 
    this.toggleColorId = setInterval(() => { // для метода вписую  Id

      const min = 0;
      const max = colors.length - 1;    

      /* генерация случайного числа (индекс элемента массива цветов) - функция randomIntegerFromInterval. */
      const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };          
        
      console.log('randomIntegerFromInterval(min, max): ', randomIntegerFromInterval(min, max));
      const randomNumber = randomIntegerFromInterval(min, max); 

      document.body.style.backgroundColor = colors[randomNumber];
      
    }, 1000);
  },

  stop() {
        console.log('this - stop', this);
    clearInterval(this.toggleColorId);
        this.toggleColorId = null;
    this.isActive = false;
  },
};

/* *** прив'язка таймера до інтерфейса */
refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

