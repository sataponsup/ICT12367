// Cursor Glow
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e=>{
cursor.style.top = e.clientY + "px";
cursor.style.left = e.clientX + "px";
});

// Navbar Scroll Effect
window.addEventListener("scroll", ()=>{
document.getElementById("navbar").classList.toggle("scrolled", window.scrollY>50);
});

// Scroll Fade In
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll(".card, .contact").forEach(el=>{
observer.observe(el);
});

// Cart Counter
let count = 0;
document.querySelectorAll(".addCart").forEach(btn=>{
btn.addEventListener("click", ()=>{
count++;
document.getElementById("cartCount").textContent = count;
});
});

// Smooth Scroll Button
document.getElementById("shopBtn").addEventListener("click", ()=>{
document.getElementById("products").scrollIntoView({behavior:"smooth"});
});

// Simple Particles
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles=[];
for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-0.5),
dy:(Math.random()-0.5)
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
particles.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle="#00ffcc";
ctx.fill();
p.x+=p.dx;
p.y+=p.dy;
});
requestAnimationFrame(animate);
}
animate();