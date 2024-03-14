const overlay = document.querySelector('.overlay');
const text = document.querySelector('.text-overlay')
const sound = document.querySelector('audio')
text.addEventListener('click', () => {
    sound.play();
    overlay.style.display = 'none';
})