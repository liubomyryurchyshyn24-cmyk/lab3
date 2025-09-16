let images = ["photo.img/123.jpg",
              "photo.img/download.jpg",
              "photo.img/ovca.jpg",
              "photo.img/images.jpg"];
let index = 0;

function showImg(){ document.getElementById("galleryImg").src = images[index]; }
function nextImg(){ index = (index+1)%images.length; showImg(); }
function prevImg(){ index = (index-1+images.length)%images.length; showImg(); }

window.onload = showImg;