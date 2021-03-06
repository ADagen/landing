const snow = [];
const speed = [];
for (let i = 0; i < 50; i += 1){
    let div = document.createElement('div');
    div.className = "snowflake";
    document.body.insertBefore(div, document.body.firstChild);
    snow[i] = div;
    speed[i] = Math.random() * (4 - 1) + 1;
}

let max = snow.length;

for (let i = 0; i < max; i += 1){
    let x_position = Math.round(Math.random() * (document.body.offsetWidth - 50));
    // 50 - это размер картинки, чтобы не смещалась за пределы body
    let y_position = Math.round(Math.random() * (document.body.offsetHeight - 50));
    snow[i].style.left = x_position;
    snow[i].style.top = y_position;
}

let timer = setInterval(function() {
    // вычислить сколько времени прошло с начала анимации
    // рисует состояние анимации, соответствующее времени timePassed
    draw();
}, 20);

function draw() {
    for (let i = 0; i < max; i += 1){
    snow[i].style.top = parseInt(snow[i].style.top) + speed[i];
    if (parseInt(snow[i].style.top) > document.body.clientHeight - 50){
        snow[i].style.top = -50;
    }
    }
}