let currentIndex = 0;

const images = document.querySelectorAll('.carousel-container img');
const totalImages = images.length;

function moveSlide(direction) {
    currentIndex += direction;

    // Si on atteint la fin ou le début, on recommence
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    // Déplacer le carrousel
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}