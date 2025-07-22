const scrollDisplay = document.getElementById('imgScroll');
const displayImg = document.getElementById('imgMain');

// Array of image paths (images are now in the root folder)
const images = [
  'certificate1.png', 
  'certificate2.png', 
  'certificate3.png',
  'certificate4.png',
  'certificate5.png'
];

// Loop through the images and create <img> elements
for (let i = 0; i < images.length; i++) {
  const newImg = document.createElement('img');
  newImg.src = images[i];  // Path is now relative to the root folder
  newImg.alt = 'Certificate ' + (i + 1);

  // Add an event listener to change the main image when clicked
  newImg.addEventListener('click', () => {
    displayImg.src = newImg.src;
    displayImg.alt = newImg.alt;
  });

  // Append the new image to the scrollable container
  scrollDisplay.appendChild(newImg);
}
