let plus = document.querySelector("#plus")
let minus = document.querySelector("#minus")
let counter = document.querySelector("#count")
let reset = document.querySelector("#re")

let count = 0

plus.addEventListener("click",increment);
minus.addEventListener("click",decrement);
reset.addEventListener("click",re);

function increment(){
    count++;
    counter.innerText = count;
}

function decrement(){
    count--;
    counter.innerText = count;
}

function re(){
    counter.innerText = "0";
}