const scrollDisplay = document.getElementById('imgScroll');
const displayImg = document.getElementById('imgMain');

const images = [
  './images/certificate1.jpeg', 
  './images/certificate2.jpeg', 
  './images/certificate3.jpeg',
  './images/certificate4.jpeg',
  './images/certificate5.jpeg'
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
