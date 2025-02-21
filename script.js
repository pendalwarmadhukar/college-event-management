let currentIndex = 0;

const images = document.querySelectorAll('.carousel-images a');
const totalImages = images.length;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselImages = document.querySelector('.carousel-images');

function showImage(index) {
  // Ensure the index is within the image range
  if (index < 0) {
    currentIndex = totalImages - 1;
  } else if (index >= totalImages) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Move the carousel to the correct image position
  const offset = -currentIndex * 100;
  carouselImages.style.transform = `translateX(${offset}%)`;
}

// Previous button event
prevButton.addEventListener('click', () => {
  showImage(currentIndex - 1);
});

// Next button event
nextButton.addEventListener('click', () => {
  showImage(currentIndex + 1);
});

// Initially show the first image
showImage(currentIndex);

// Event Data
const events = [
    { name: "TechFest 2025", date: "March 15, 2025", description: "A technology festival with workshops and hackathons." },
    { name: "Cultural Day", date: "April 10, 2025", description: "A day to celebrate cultural diversity with performances and food." },
    { name: "Sports Meet", date: "May 5, 2025", description: "A sports event featuring various competitions and activities." }
];

const eventList = document.getElementById('eventList');

events.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
        <h3>${event.name}</h3>
        <p>${event.date}</p>
        <p>${event.description}</p>
    `;
    eventList.appendChild(card);
});


