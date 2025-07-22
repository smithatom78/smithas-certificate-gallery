const scrollDisplay = document.getElementById('imgScroll');
const displayImg = document.getElementById('imgMain');

const images = [
  './images/certificate1.png', 
  './images/certificate2.png', 
  './images/certificate3.png',
  './images/certificate4.png',
  './images/certificate5.png'
];

for (let i = 0; i < images.length; i++) {
  const newImg = document.createElement('img');
  newImg.src = images[i];
  newImg.alt = 'Certificate ' + (i + 1);

  newImg.addEventListener('click', () => {
    displayImg.src = newImg.src;
    displayImg.alt = newImg.alt;
  });

  scrollDisplay.appendChild(newImg);
}
