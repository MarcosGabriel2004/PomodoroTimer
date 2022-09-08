//Período de trabalho ou descanso
const period = document.querySelector('#period');
const periodArray = ['Hora de Trabalhar!', 'Hora de descansar!'];
period.innerHTML = periodArray[0];

//Botão para mudar entre trabalho e descanso
const workRestButton = document.querySelector('#work-rest');
const workRestArray = ['Ir para período de trabalho', 'Ir para período de descanso'];
workRestButton.innerHTML = workRestArray[1];

//Unidades de tempo
let min = 25;
let seg = 0;
let minp = min;
let ciclos = 0;

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

//Lista de ciclos
const list = document.querySelector('#cycle-list');

//Arquivo de áudio
const audio = new Audio('audio.mp3');

//Cronômetro
let intervalTimer;

window.addEventListener('load', () => {
    setInterval(() => {
        if(seg > 0 && startStopButton.innerHTML == startStopArray[1]){
            seg--;
            counter.innerHTML = `${min}:${seg}`;
        }else if(min > 0 && startStopButton.innerHTML == startStopArray[1]){
            seg = 59;
            min--;
            counter.innerHTML = `${min}:${seg}`;
        }else if(min == 0 && seg == 0){
            clearInterval();
            audio.play();

            if(period.innerHTML == periodArray[1]){
                list.innerHTML += `<li>${minp} minutos de descanso;</li><br>`;
                min = 25;
                seg = 0;
                minp = min;
                counter.innerHTML = `${min}:${seg}`;
                startStopButton.innerHTML = startStopArray[1];
                workRestButton.innerHTML = workRestArray[1];
                period.innerHTML = periodArray[0];

            }else if(period.innerHTML == periodArray[0] && ciclos < 3){
                list.innerHTML += `<li>${minp} minutos de trabalho;</li><br>`;
                min = 5;
                seg = 0;
                minp = min;
                ciclos++;
                counter.innerHTML = `${min}:${seg}`;
                startStopButton.innerHTML = startStopArray[1];
                workRestButton.innerHTML = workRestArray[0];
                period.innerHTML = periodArray[1];

            }else{
                list.innerHTML += `<li>${minp} minutos de trabalho;</li><br>`;
                min = 15;
                seg = 0;
                minp = min;
                ciclos = 0;
                counter.innerHTML = `${min}:${seg}`;
                startStopButton.innerHTML = startStopArray[1];
                workRestButton.innerHTML = workRestArray[0];
                period.innerHTML = periodArray[1];

            }
        }
    }, 1000)
})

window.addEventListener('load', () => {
    setInterval(() => {
        if(period.innerHTML == periodArray[0]){
            document.getElementById('body').style.backgroundColor = '#ff6666';
        }else{
            document.getElementById('body').style.backgroundColor = '#5cd65c';
        }
    }, 0)
})

//Funções para modificar minutos
increaseBtn.addEventListener('click', () => {
    console.log('Increased');
    clearInterval();
    min++;
    minp = min;
    seg = 0;
    counter.innerHTML = `${min}:${seg}`;
    startStopButton.innerHTML = startStopArray[0];
});

decreaseBtn.addEventListener('click', () => {
    if(min > 0){
        console.log('Decreased');
        clearInterval();
        min--;
        minp = min;
        seg = 0;
        counter.innerHTML = `${min}:${seg}`;
        startStopButton.innerHTML = startStopArray[0];
    }
});

//Iniciar e Pausar
startStopButton.addEventListener('click', () => {
    if(startStopButton.innerHTML == startStopArray[0]){
        startStopButton.innerHTML = startStopArray[1];
    }else{
        clearInterval();
        startStopButton.innerHTML = startStopArray[0];
    }
})

//Reset
resetButton.addEventListener('click', () => {
    if(period.innerHTML == periodArray[0]){
        clearInterval();
        min = 25;
        seg = 0;
        minp = min;
        counter.innerHTML = `${min}:${seg}`;
        startStopButton.innerHTML = startStopArray[0];
    }else{
        clearInterval();
        min = 5;
        seg = 0;
        minp = min;
        counter.innerHTML = `${min}:${seg}`;
        startStopButton.innerHTML = startStopArray[0];
    }
})

//Botão para mudar entre trabalho e descanso
workRestButton.addEventListener('click', () => {
    if(workRestButton.innerHTML == workRestArray[1]){
        clearInterval();
        min = 5;
        seg = 0;
        minp = min;
        counter.innerHTML = `${min}:${seg}`;
        startStopButton.innerHTML = startStopArray[0];
        workRestButton.innerHTML = workRestArray[0];
        period.innerHTML = periodArray[1];
    }else{
        clearInterval();
        min = 25;
        seg = 0;
        minp = min;
        counter.innerHTML = `${min}:${seg}`;
        startStopButton.innerHTML = startStopArray[0];
        workRestButton.innerHTML = workRestArray[1];
        period.innerHTML = periodArray[0];
    }
})