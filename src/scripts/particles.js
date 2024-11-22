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

// const mouse = {x: null, y: null};

const particlesConfig = {
    count: 150,
    size: 2,
};

const meteorsConfig = {
    minSize: 2,
    maxSize: 4,
    minSpeedX: 0.3,
    maxSpeedX: 0.5,
};

class Meteor {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.color = randomColor();
        this.size = Math.random() * (meteorsConfig.minSize - meteorsConfig.maxSize) + meteorsConfig.maxSize; 
        this.speedX = Math.random() * (meteorsConfig.minSpeedX - meteorsConfig.maxSpeedX) + meteorsConfig.maxSpeedX;

    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.closePath();
        ctx.fill();
    }

    update(){
        this.x = this.x + this.speedX;
        

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


        // console.log("numero random: ", Math.random() * (1 - 5) + 5);

        // const dx = mouse.x - this.x;
        // const dy = mouse.y - this.y;

        // const distance = Math.sqrt(dx * dx + dy * dy);

        // if (distance < 40) {
        //   this.x -= dx / 10;
        //   this.y -= dy / 10;
        // }

    }
}

function randomColor(){
    const colors = ["lightgreen","red","lightblue","yellow","purple","green"];
    const i = Math.floor(Math.random() * colors.length);

    return colors[i];
}

for(let i = 0; i < particlesConfig.count; i++){
    particles.push(new Particle(Math.random() * c.width, Math.random() * c.height));
}

//rileva movimento del mouse
// window.addEventListener("mousemove", (e) => {
//     mouse.x = e.x;
//     mouse.y = e.y;
// });

function animate(){
    ctx.clearRect(0,0,c.width,c.height);

    if (Math.random() < 0.0002){  // Probabilità 2%
        meteors.push(new Meteor(0, Math.random() * c.height));
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

animate();