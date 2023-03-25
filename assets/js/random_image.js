window.onload = displayImage;

var imagesArray = [
    "another.jpg", 
    "anothercoffee.png", 
    "gaming.gif", 
    "gun5.jpg", 
    "gun6.jpg", 
    "megumin.png", 
    "ok.png", 
    "phone.jpg", 
    "dexnew.jpeg",
    "dexneww.gif"
];

function displayImage(){
    var num = Math.floor(Math.random() * (imagesArray.length));
    document.getElementById("main_image1").src = "assets/img/animes/" + imagesArray[num];
}
