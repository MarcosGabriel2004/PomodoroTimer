const decreaseBtn = document.querySelector('#decrease');
const increaseBtn = document.querySelector('#increase');
const counter = document.querySelector('#count');
let count = 0;

counter.innerHTML = count;

increaseBtn.addEventListener('click', () => {
    console.log('Increased');
    count++;
    counter.innerHTML = count;
});

decreaseBtn.addEventListener('click', () => {
    console.log('Decreased');
    count--;
    counter.innerHTML = count;
});