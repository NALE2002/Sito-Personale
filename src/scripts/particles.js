var c = document.getElementById("particelle");
var ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

window.addEventListener('resize', () => {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
});

const particles = [];
const meteors = [];
var lastMeteor = Date.now();
// let animationFrameId;

const particlesConfig = {
    count: 150,
    size: 2,
};

const meteorsConfig = {
    minSize: 4,
    maxSize: 7,
    minSpeedX: 0.7,
    maxSpeedX: 1,
    minSpeedY: -0.4,
    maxSpeedY: 0.4,
};

class Meteor {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.color = randomColor();
        this.size = Math.random() * (meteorsConfig.minSize - meteorsConfig.maxSize) + meteorsConfig.maxSize; 
        this.speedX = Math.random() * (meteorsConfig.minSpeedX - meteorsConfig.maxSpeedX) + meteorsConfig.maxSpeedX;
        this.speedY = Math.random() * (meteorsConfig.minSpeedY - meteorsConfig.maxSpeedY) + meteorsConfig.maxSpeedY;
    }

    draw(){
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

    }

    update(){
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;

    }

}

class Particle {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.size = Math.random() * particlesConfig.size;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
    }

    draw(){

        ctx.shadowBlur = 0; 
        ctx.shadowColor = "transparent";

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

function randomColor(){
    const colors = ["lightgreen","lightred","lightblue","yellow","lightpurple","lightgreen"];
    const i = Math.floor(Math.random() * colors.length);

    return colors[i];
}

for(let i = 0; i < particlesConfig.count; i++){
    particles.push(new Particle(Math.random() * c.width, Math.random() * c.height));
}

function animate(){
    ctx.clearRect(0,0,c.width,c.height);

        if (Date.now() - lastMeteor >= Math.random() * (25000 - 50000) + 50000){ //genera una meteora con l'intervallo tra 25 e 50 secondi 
            meteors.push(new Meteor(0, Math.random() * c.height));
            lastMeteor = Date.now();
        }

    particles.forEach((particle) => {
        particle.draw();
        particle.update();
    }); 

    meteors.forEach((meteor) => {
        meteor.draw();
        meteor.update();
    });

    requestAnimationFrame(animate);
}

// document.addEventListener("visibilitychange", () => {
//     if (document.visibilityState === "visible") {
//         lastMeteor = Date.now();
//         animate();
//     } else {
//         cancelAnimationFrame(animationFrameId);
//     }
// });

animate();