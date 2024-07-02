// slide show otomatis
let currentIndex = 0;
const images = document.querySelectorAll('.slideshow img');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].classList.add('hidden');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.remove('hidden');
}

setInterval(showNextImage, 2000); // Ganti gambar setiap 3 detik
