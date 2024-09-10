let banner = document.querySelector('.zeal');
let canvas = document.getElementById('dotCanvas');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let ctx = canvas.getContext('2d');

let dots = [];
let arrayColors = ["#FF5733", "#33FF57", "#3357FF",
                   "#FF33A1", "#FFEB33"
                  ];

for (let index = 0; index < 50; index++) {
    dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        color: arrayColors[Math.floor(Math.random() * arrayColors.length)]
    });
}

banner.addEventListener("mousemove", (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas
    let mouse = {
        x: event.pageX - banner.getBoundingClientRect().left,
        y: event.pageY - banner.getBoundingClientRect().top
    };
    dots.forEach(dot => {
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if (distance < 300) {
            ctx.strokeStyle = dot.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    });
});

banner.addEventListener('mouseout', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas on mouse out
});
