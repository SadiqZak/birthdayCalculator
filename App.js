// const birthdayInput = "14feB2022";
const birthInput = document.getElementById("userInput");
const btnTranslate = document.querySelector("#btn-translate");

const daysE = document.getElementById("days");
const hoursE = document.getElementById("hours");
const minsE = document.getElementById("mins");
const secsE = document.getElementById("seconds");

function countdown(){
    const finalBirthInput = birthInput.value;
    const currentDate = new Date();
    const birthDate = new Date(finalBirthInput);
    
    const totalSeconds = (birthDate - currentDate) / 1000;

    console.log(totalSeconds);

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const mins = Math.floor(totalSeconds/60) % 60;
    const secs = Math.floor(totalSeconds) % 60;

    daysE.innerHTML = formatTime(days);
    hoursE.innerHTML = formatTime(hours);
    minsE.innerHTML = formatTime(mins);
    secsE.innerHTML = formatTime(secs);

};

function formatTime(time){
    return time < 10 ?  `0${time}` : time;
};

// function errorHandler(error){
//     console.log("error occured");
// }

function clickHandler(){
    
    countdown();
    setInterval(countdown,1000);
    // console.log(birthInput);

}

btnTranslate.addEventListener("click",clickHandler);

