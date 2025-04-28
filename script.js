// Scroll animations
window.addEventListener('scroll', () => {
  document.querySelectorAll('.animate-text').forEach(element => {
    const position = element.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      element.classList.add('show-text');
    }
  });

  document.querySelectorAll('.animate-image').forEach(element => {
    const position = element.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      element.classList.add('show-image');
    }
  });
});

// Quiz checking
function checkAnswers() {
  let correct = 0;
  const answers = {q1: "Otto Hahn", q2: "Uranium-235"};

  for (let key in answers) {
    const radios = document.getElementsByName(key);
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked && radios[i].value === answers[key]) {
        correct++;
      }
    }
  }

  const result = document.getElementById('result');
  if (correct === 2) {
    result.textContent = `🎉 Bravo! Ai răspuns corect la toate întrebările!`;
    result.style.color = "lightgreen";
  } else {
    result.textContent = `❌ Ai răspuns corect la ${correct}/2 întrebări. Încearcă din nou!`;
    result.style.color = "red";
  }
}

// JavaScript for Background Transition with Loop
const hero = document.querySelector('.hero');
const images = [
  'https://i.imgur.com/25zhbI2_d.webp?maxwidth=520&shape=thumb&fidelity=high', // Replace with your image URLs
  'https://i.imgur.com/4kKGX9P_d.webp?maxwidth=520&shape=thumb&fidelity=high',
  'https://i.imgur.com/4kKGX9P_d.webp?maxwidth=520&shape=thumb&fidelity=high'
];
let index = 0;

function changeBackground() {
  hero.classList.add('fade-out'); // Start fade-out effect

  setTimeout(() => {
    // Change the background image after fade-out
    hero.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length; // Cycle back to the first image
    hero.classList.remove('fade-out'); // Remove fade-out effect
    hero.classList.add('fade-in'); // Start fade-in effect
  }, 1000); // Match the CSS transition duration
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Handle video trigger button
document.getElementById('video-trigger').addEventListener('click', () => {
  const overlay = document.getElementById('video-overlay');
  overlay.classList.add('show'); // Show the video overlay
  document.body.classList.add('grayscale'); // Apply grayscale effect
});

// Close overlay when the video ends
document.getElementById('overlay-video').addEventListener('ended', () => {
  const overlay = document.getElementById('video-overlay');
  overlay.classList.remove('show'); // Hide the video overlay
  document.body.classList.remove('grayscale'); // Remove grayscale effect
});

