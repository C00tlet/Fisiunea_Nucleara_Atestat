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

