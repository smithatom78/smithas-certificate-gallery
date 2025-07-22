const scrollDisplay = document.getElementById('imgScroll');
const displayImg = document.getElementById('imgMain');

const images = [
  'https://raw.githubusercontent.com/smithatom78/smithas-certificate-gallery/main/certificate1.png', 
  'https://raw.githubusercontent.com/smithatom78/smithas-certificate-gallery/main/certificate2.png', 
  'https://raw.githubusercontent.com/smithatom78/smithas-certificate-gallery/main/certificate3.png',
  'https://raw.githubusercontent.com/smithatom78/smithas-certificate-gallery/main/certificate4.png',
  'https://raw.githubusercontent.com/smithatom78/smithas-certificate-gallery/main/certificate5.png'
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
