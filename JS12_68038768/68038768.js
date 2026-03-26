// นี่คือ JavaScript (JS) ตามโจทย์หน้า 7
function changeSrc() {
    const images = ["cake1.jpg", "cake2.jpg", "cake3.jpg", "cake4.jpg"];
    const randomIndex = Math.floor(Math.random() * images.length);
    document.getElementById("cake").setAttribute("src", images[randomIndex]);
}