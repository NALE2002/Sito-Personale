var c = document.getElementById("particelle");
var ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

window.addEventListener('resize', () => {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
});

const particles = [];

const particlesConfig = {
    count: 150,
    size: 2,
};

class Particle {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.size = Math.random() * particlesConfig.size;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
    }

    draw(){
        ctx.fillStyle = "lightblue";
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }

    update(){
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;

        if(this.x < 0 || this.x > c.width)
            this.speedX = this.speedX * -1;

        if(this.y < 0 || this.y > c.height)
            this.speedY = this.speedY * -1;
    }
}

for(let i = 0; i < particlesConfig.count; i++){
    particles.push(new Particle(Math.random() * c.width, Math.random() * c.height));
}

function animate(){
    ctx.clearRect(0,0,c.width,c.height);

    particles.forEach((particle) => {
        particle.draw();
        particle.update();
    });

    requestAnimationFrame(animate);
}

animate();