const images = [
  "./assets/images/1000111952.jpg", 
  "./assets/images/19.01.jpg", 
  "./assets/images/19.02.jpg",
  "./assets/images/c-adulto.jpg",
  "./assets/images/NoGi 01.jpeg"
]

const imageElement = document.getElementById('image-item');
let currentIndex = 0;

function imageCarousel() {
  currentIndex = (currentIndex + 1) % images.length;
  imageElement.src = images[currentIndex];
}

setInterval(imageCarousel, 5000);