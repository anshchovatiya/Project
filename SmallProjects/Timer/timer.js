let time = document.getElementById("Time");
let count = 0;


let checkTimerRun = false;
let intervalId;

function startTimer(){  
    intervalId = setInterval(() => {
        time.innerText = ++count;
    }, 1000);
}


function stopTimer(){
    clearInterval(intervalId);
    checkTimerRun = false;
}




document.getElementById("Start").addEventListener("click", () => {
    if(checkTimerRun===false){
        checkTimerRun = true;
        startTimer();
    }
})


document.getElementById("Reset").addEventListener("click", () => {
    stopTimer();
    count = 0;
    time.innerText = count;
});
document.getElementById("Stop").addEventListener("click", () => {
    stopTimer();
});



document.getElementById("GetTime").addEventListener("click", () => {
    
    let newPara = document.createElement("p");
    newPara.innerText =  `the stop time is ${count} seconds`;

    document.getElementById("output").append(newPara);
});

document.getElementById("ClearTime").addEventListener("click", () => {
    
    document.getElementById("output").lastChild.remove();
});