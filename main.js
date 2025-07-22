const scrollDisplay = document.getElementById('imgScroll');
const displayImg = document.getElementById('imgMain');

const images = [
  'https://raw.githubusercontent.com/smithatom78/smithas-certificate-gallery/main/certificate1.png', 
  'https://raw.githubusercontent.com/smithatom78/smithas-certificate-gallery/main/certificate2.png', 
  'https://raw.githubusercontent.com/smithatom78/smithas-certificate-gallery/main/certificate3.png',
  'https://raw.githubusercontent.com/smithatom78/smithas-certificate-gallery/main/certificate4.png',
  'https://raw.githubusercontent.com/smithatom78/smithas-certificate-gallery/main/certificate5.png'
];

// Loop through the image URLs to create image elements
for (let i = 0; i < images.length; i++) {
  const newImg = document.createElement('img');
  newImg.src = images[i];
  newImg.alt = 'Certificate ' + (i + 1);

  // Event listener to change the main image when a thumbnail is clicked
  newImg.addEventListener('click', () => {
    displayImg.src = newImg.src;
    displayImg.alt = newImg.alt;
  });

  // Append the new image to the scroll container
  scrollDisplay.appendChild(newImg);
}
