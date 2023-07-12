const box = document.getElementById("box")

let count = 0;

box.addEventListener('click', () => {
    if(count % 2 == 0){
        box.style.height = '600px'
        box.style.width = '600px'
        box.style.backgroundColor = 'yellow'
    }else{
        box.style.height = '300px'
        box.style.width = '300px'
        box.style.backgroundColor = '#f75858'
    }
    count++;
})