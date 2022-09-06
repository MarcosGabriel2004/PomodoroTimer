//Período de trabalho ou descanso
const period = document.querySelector('#period');
const periodArray = ['Hora de Trabalhar!', 'Hora de descansar!'];
period.innerHTML = periodArray[0];

//Unidades de tempo
let min = 25;
let seg = 0;

//Visualizador do tempo
const counter = document.querySelector('#count');
counter.innerHTML = `${min}:${seg}`;

//Botão para inicializar o timer
const startStopButton = document.querySelector('#start-stop');
const startStopArray = ['Iniciar', 'Pausar'];
startStopButton.innerHTML = startStopArray[0];

//Botão de reset
const resetButton = document.querySelector('#reset');

//Botões para aumentar ou diminuir tempo
const decreaseBtn = document.querySelector('#decrease');
const increaseBtn = document.querySelector('#increase');

//Funções para modificar minutos
increaseBtn.addEventListener('click', () => {
    console.log('Increased');
    min++;
    seg = 0;
    counter.innerHTML = `${min}:${seg}`;
});

decreaseBtn.addEventListener('click', () => {
    if(min > 0){
        console.log('Decreased');
        min--;
        seg = 0;
        counter.innerHTML = `${min}:${seg}`;
    }
});

//Cronômetro
let intervalTimer;

function timer(){
    window.addEventListener('load', () => {
        intervalTimer = setInterval(() => {
            if(seg > 0 && startStopButton.innerHTML == startStopArray[1]){
                seg--;
                counter.innerHTML = `${min}:${seg}`;
            }else{
                seg = 59;
                if(min > 0 && startStopButton.innerHTML == startStopArray[1]){
                    min--;
                    counter.innerHTML = `${min}:${seg}`;
                }else{
                    clearInterval(timer);
                }
            }
        }, 1000)
    })
}

//Iniciar e Pausar
startStopButton.addEventListener('click', () => {
    if(startStopButton.innerHTML == startStopArray[1]){
        clearInterval();
        startStopButton.innerHTML = startStopArray[0];
    }else{
        timer();
        startStopButton.innerHTML = startStopArray[1];
    }
})

//Reset
resetButton.addEventListener('click', () => {
    if(period.innerHTML == periodArray[0]){
        clearInterval();
        min = 25;
        seg = 0;
        counter.innerHTML = `${min}:${seg}`;
    }else{
        clearInterval();
        min = 5;
        seg = 0;
        counter.innerHTML = `${min}:${seg}`;
    }
})