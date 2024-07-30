let canvas = document.getElementById('gameCanvas');
let score = new Score();

let beers = [];

function randomPositionX() {
    return Math.floor(Math.random() * (Number(canvas.width) - 20));
}

function randomPositionY() {
    return -Math.floor(Math.random() * 1000 + 50);
}

function createBeer() {
    for (let i = 0; i < 10; i++) {
        let beer = new Beer(randomPositionX(), randomPositionY() * i, 20, 30, 3, "red");
        beers.push(beer);
    }
}


createBeer();

function moveBeerList() {
    beers.forEach(beer => beer.move());
}

function play() {
    moveBeerList();
    score.draw();
    requestAnimationFrame(play);
}

play();