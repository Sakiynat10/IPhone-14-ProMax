const appSlideFirst =document.querySelector(".slide_1");
const appSlideNext =document.querySelector(".slide_2");
const applicationsSpan1 =document.querySelector(".span1");
const applicationsSpan2 =document.querySelector(".span2");
const applicationMenu = document.querySelector(".application-menu");
const openBtn = document.querySelector(".open-button");
const lockScreen = document.querySelector(".lock-screen");
const rightSideBtn = document.querySelector(".rightSideBtn");
const innerScreen = document.querySelector(".inner");
const iphoneFrame = document.querySelector('.iphone-frame');
const screenScroll = document.querySelector('.button');
const screenTime = document.querySelector('.screen-time');
const screenMonthDay = document.querySelector('.screen-month-day');
const appTime = document.querySelector(".app-time");
const clockApp = document.querySelector('.clock-app');
const wrapperClockApp = document.querySelector(".wrapper");
const backMenu = document.querySelector(".back-menu") 

function leftSide() {
    appSlideFirst.classList.toggle('active-slide');
    appSlideNext.classList.toggle('active-slide');
    applicationsSpan1.classList.toggle('active-screen');
    applicationsSpan2.classList.toggle('active-screen');
}

function rightSide() {
    appSlideFirst.classList.toggle('active-slide');
    appSlideNext.classList.toggle('active-slide');
    applicationsSpan1.classList.toggle('active-screen');
    applicationsSpan2.classList.toggle('active-screen');
}

openBtn.addEventListener('click' , function(){
    applicationMenu.classList.remove("hidden");
    lockScreen.classList.remove('active');
})

rightSideBtn.addEventListener('click' , function(){
    innerScreen.classList.toggle("close-screen")
})

iphoneFrame.addEventListener('dblclick', function(){
    innerScreen.classList.remove("close-screen")
});

screenScroll.addEventListener('click' , function(){
    applicationMenu.classList.add("hidden");
    lockScreen.classList.add('active');
})

let date = new Date();


let currentTime = date.toLocaleTimeString("it-IT").slice(0 , 5);
let monthDay  = date.toDateString().replace(" " , " ,  ").slice(0 , 13);

console.log(currentTime); 

function getScreenTime(){
    screenTime.innerHTML += currentTime;
}
getScreenTime();

appTime.innerHTML += currentTime;
screenMonthDay.innerHTML += monthDay;




let batteryPromise = navigator.getBattery();

batteryPromise.then((batteryObject) => {
  console.log("IsCharging", batteryObject.charging);
  console.log("Percentage", batteryObject.level);

  console.log("charging Time", batteryObject.chargingTime);
  console.log("DisCharging Time", batteryObject.dischargingTime);
});

clockApp.addEventListener('click' , function(){
    wrapperClockApp.classList.remove("hidden")
})

backMenu.addEventListener('click' , function(){
    wrapperClockApp.classList.add("hidden")
})



const pauseAlarm = document.querySelector(".pause-alarm");
const playAlarm = document.querySelector(".play-alarm");
const audio = document.querySelector("audio");
const setAlarm = document.querySelector(".set-alarm");
const setAlarmBtn = document.querySelector(".set-alarm-btn");
const alarmProgram = document.querySelector(".alarm-program");
const alarmApp = document.querySelector(".alarm-app");
const backAlarmMenu = document.querySelector(".back-alarm-menu");
const audioDiv = document.querySelector(".audios-2");
const audioBtn = document.querySelector("audio");
const backTuneApp = document.querySelector(".back-tune-app");
const musicApp = document.querySelector(".itune");
const musicAppProgram = document.querySelector(".tune");



// console.log(setAlarm.value);

setInterval(() => {
  let date = new Date();
  let time = date.toLocaleTimeString("it-IT");
  console.log(time);
  if (time.slice() === setAlarm.value + ":00"){
    audio.play();
  }
}, 1000);

playAlarm.addEventListener("click", () => {
  audio.play();
  pauseAlarm.classList.toggle("hidden");
  playAlarm.classList.toggle("hidden");
});

pauseAlarm .addEventListener("click", () => {
    pauseAlarm.classList.toggle("hidden");
    playAlarm.classList.toggle("hidden");
    audio.pause();
});

alarmApp.addEventListener('click' , function(){
    alarmProgram.classList.remove("hidden")
})

backAlarmMenu.addEventListener("click" , function(){
    alarmProgram.classList.add("hidden")
})

musicApp.addEventListener('click' , function(){
    musicAppProgram.classList.remove("hidden");
});

backTuneApp.addEventListener('click' , function(){
    musicAppProgram.classList.add("hidden");
})

