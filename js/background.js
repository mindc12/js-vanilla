const imgs = ["0.gif","1.gif","2.gif","3.gif"];

const randomImg = imgs[Math.floor(Math.random()* imgs.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${randomImg}`;

document.body.appendChild(bgImg);