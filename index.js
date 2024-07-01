let counter = document.getElementById("counter")
let counterPrev = document.getElementById("counterPrev")

function increment(){
    counter.innerText = parseInt(counter.innerText) + 1
}

function reset(){
    counter.innerText = 0
}

function save(){
    if(counterPrev.innerText == "-")
        counterPrev.innerText = counter.innerText
    else
        counterPrev.innerText = counterPrev.innerText + ", "+counter.innerText
    
    counter.innerText = 0
}