// Globales

const start=document.getElementById("start")
const stop= document.getElementById("stop");
const reset= document.getElementById("reset");
const timer=document.getElementById("timer")


let interval;
let timerLeft=1500;

// Fonction -> de mise à jours.
const updateTimer=()=>{
    let minutes= Math.floor(timerLeft/60);
    let seconds= timerLeft%60;
    let formattedTime=`${minutes.toString().padStart(2, "0")}:${seconds.toString()
        .padStart(2,"0")}`;

    timer.innerHTML=formattedTime;

    
}
 updateTimer();

//Fonction -> lancer le pomo...
const startTimer=()=>{
    interval=setInterval(() => {
        timerLeft--;
        updateTimer();
        if(timerLeft===0){
            alert("temps écoulé !");
            timerLeft=1500;
            updateTimer()
        }
        
    }, 1000);
}

//Fonction-> Stop le compte à rebours.
const stopTimer=()=>{
    clearInterval(interval);
}

// Fonction => reset le compteur.
const resetTimer=()=>{
    clearInterval(interval);
    timerLeft=1500;
    updateTimer()
}



// Lancé le pomodoro
start.addEventListener('click', startTimer);

// stoppé le compteur.
stop.addEventListener('click', stopTimer);

// reset le compteur.
reset.addEventListener('click', resetTimer)