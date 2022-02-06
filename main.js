let hours = document.querySelector(".select_hours");
let minuts =  document.querySelector(".select_minuts");
let seconds =  document.querySelector(".select_seconds");
let start = document.querySelector(".start");
let divTime = document.querySelector(".time");
let reset = document.querySelector(".reset");
let stop = document.querySelector(".stop");
let continues = document.querySelector(".continue");

let clear  =null;
let allSec = 0;

function timer(){


    let hour = Math.floor(allSec / 3600);
    let min = Math.floor((allSec % 3600) / 60 );
    let sec = Math.floor((allSec % 3600) % 60 );

    if (hour<10){
        hour = `0${hour}`

    }
    if (min<10){
        min = `0${min}`


    }
    if (sec<10){
        sec = `0${sec}`


    }
    divTime.innerHTML = `${hour}:${min}:${sec}`;



        if(allSec === 0){
            clearTime();
        }else {
            allSec-- ;
        }
}
start.addEventListener("click" , function(){
   allSec =  Number(hours.value)*60*60 +(Number(minuts.value)*60) +Number(seconds.value)
    
    setIntervall();
})
function setIntervall() {
    clear = setInterval(() => {
       timer();
   }, 1000);
}

function clearTime(){
    clearInterval(clear)
}
reset.addEventListener("click", ()=>{
    
    hour =0;
    min =0;
    sec=0;
    divTime.innerHTML = `0${hour}:0${min}:0${sec}`;
    clearTime();



})
stop.addEventListener("click" ,()=>{
    clearTime();

})

continues.addEventListener ("click" ,()=>{
    if( allSec !== 0){
    arr = divTime.innerHTML.split(":").map( e => Number(e));
    allSec = ( arr[0]*60*60 +(arr[1])*60 +arr[2]) - 1;
    
    setIntervall();}
    

   
    
})
