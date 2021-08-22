// const birthdayInput = "14feB2022";
const birthInput = document.getElementById("userInput");
const btnTranslate = document.querySelector("#btn-translate");
const output = document.querySelector(".output-area")

const daysE = document.getElementById("days");
const hoursE = document.getElementById("hours");
const minsE = document.getElementById("mins");
const secsE = document.getElementById("seconds");

const allMonths = ["Jan","Feb","Mar","Apr", "May","Jun", "Jul", "Aug","Sep","Oct","Nov","Dec"];

btnTranslate.addEventListener("click",function clickHandler(){
    
    countdown();
    setInterval(countdown,1000);
    // console.log(birthInput);

})

function dateFormat(){
    const newDate = birthInput.value.split("-");
    let date = {
        day: newDate[2].toString(),
        month: newDate[1].toString(),
        year: newDate[0].toString()
    }

    date.month = allMonths[date.month-1];

    return date.day + date.month + date.year;
}

 function convertStr(dateObj){
    let day = ("0"+ dateObj.getDate()).slice(-2);
    let month = ("0"+(dateObj.getMonth()+1)).slice(-2);
    let year = dateObj.getFullYear();

    month = allMonths[month-1]

    return [day , month, year]   
    
 }
 

function countdown(){
    // const finalBirthInput = birthInput.value;
    output.style.display ="none"
    if(birthInput.value !=""){

        const DOB = dateFormat();
        const finalBirthInput = DOB;
        const currentDate = new Date();
        const birthDate = new Date(finalBirthInput);
        
        if(birthDate > currentDate ){
            const totalSeconds = (birthDate - currentDate) / 1000;
    
            const days = Math.floor(totalSeconds/3600/24);
            const hours = Math.floor(totalSeconds/3600) % 24;
            const mins = Math.floor(totalSeconds/60) % 60;
            const secs = Math.floor(totalSeconds) % 60;
        
            daysE.innerHTML = formatTime(days);
            hoursE.innerHTML = formatTime(hours);
            minsE.innerHTML = formatTime(mins);
            secsE.innerHTML = formatTime(secs);
        }else{
            daysE.innerHTML = "00";
            hoursE.innerHTML = "00";
            minsE.innerHTML = "00";
            secsE.innerHTML = "00";
            output.style.display ="block"
            output.innerText = `Please enter date greater than today's date i.e, ${convertStr(currentDate)[0]} ${convertStr(currentDate)[1]} ${convertStr(currentDate)[2]}`
        }
        
    }else{
        output.style.display ="block"
        output.innerText = "Please input valid date"
    }
   

};

function formatTime(time){
    // if(time<10){
    //     return  time:`0${time}`;
    // }
    return time < 10 ?  `0${time}` : time;
};

