console.log("in")
function onTimerInput(obj){
    console.log("yes")
   obj.value=obj.value.slice(0,obj.maxLength)
}
let hour=document.querySelector(".hour_input");
let minute=document.querySelector(".minute_input");
let second=document.querySelector(".second_input");

let start=document.querySelector(".start");
let reset=document.querySelector(".reset");


function stopInterval(){
    start.innerHTML="Start";
    start.style.backgroundColor="green"
    clearInterval(interval);
}
let checkIfEmpty=()=>{
    if(hour.value==0 && second.value ==0 && minute.value==0){
        hour.value="";
        second.value="";
        minute.value="";
        stopInterval();
        return;
      }


}
reset.addEventListener("click",()=>{
    hour.value="";
    minute.value="";
    second.value="";
    stopInterval();
})


start.addEventListener("click",()=>{
//1min-60s
//?-185s
if(start.innerHTML=="Pause"){
    start.innerHTML="Continue";
    start.style.backgroundColor="yellow"
    return;
}
    checkIfEmpty();
  start.innerHTML="Pause";
  start.style.backgroundColor="orange"
  if(second.value>60 || minute.value>59){
    const totalSeconds = Number(minute.value) * 60 + Number(second.value) + Number(hour.value)*3600;
    hour.value=Math.floor(totalSeconds/3600);
    hour.value=hour.value<10?`0${hour.value}`:`${hour.value}`;
    minute.value=Math.floor((totalSeconds % 3600) / 60);
    minute.value=minute.value<10?`0${minute.value}`:`${minute.value}`;
    second.value=totalSeconds%60;
  }

  interval=setInterval(timer,1000);
})

function timer(){
    if(start.innerHTML=="Continue"){
        return;
    }
    checkIfEmpty();
    if(second.value!=0){
        second.value=Number(second.value)-1;
        second.value=second.value<10?`0${second.value}`:second.value;

    }
    if(minute.value!=0 && second.value==0){
      second.value=59;
        minute.value=Number(minute.value)-1;
        minute.value=minute.value<10?`0${minute.value}`:minute.value;

    }
    if(hour.value!=0 && minute.value==0){
        minute.value=60;
        hour.value=Number(hour.value)-1;
        hour.value=hour.value<10?`0${hour.value}`:hour.value;

    }

}
