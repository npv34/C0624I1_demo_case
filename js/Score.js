class Score {
    constructor() {
        this.score = 0;
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.font = "20px Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Score: " + this.score, canvas.width - 100, 50);
        this.ctx.closePath();
    }

    increment() {
        this.score++;
    }
}