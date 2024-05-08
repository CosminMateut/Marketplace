var index = 0;
var images = document.getElementsByTagName('img');
setInterval(function () {
    images[index].style.display = 'none';
    index = (index + 1) % images.length;
    images[index].style.display = 'block';
}, 5000);