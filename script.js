function checkAnswers() {
    let correct = 0;
    const answers = {
        q1: "Otto Hahn",
        q2: "Uranium-235",
        q3: "More fissions occur",
        q4: "Radiation leaks",
        q5: "E=mc²"
    };

    for (let key in answers) {
        const radios = document.getElementsByName(key);
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked && radios[i].value === answers[key]) {
                correct++;
            }
        }
    }

    const result = document.getElementById('result');

    if (correct === 5) {
        result.innerHTML = `🎉 Perfect! You got ${correct}/5 correct! 🎉`;
        result.style.color = "lightgreen";
        animateSuccess();
    } else {
        result.innerHTML = `❌ You got ${correct}/5 correct. Try again! ❌`;
        result.style.color = "red";
        animateFail();
    }
}

function animateSuccess() {
    document.body.style.backgroundColor = "#003300"; // Deep green glow
    setTimeout(() => {
        document.body.style.backgroundColor = "#0d1117"; // Back to dark
    }, 2000);
    alert("🌟 Well done! You mastered Nuclear Fission!");
}

function animateFail() {
    document.body.style.backgroundColor = "#330000"; // Red background flash
    setTimeout(() => {
        document.body.style.backgroundColor = "#0d1117"; // Back to dark
    }, 2000);
    alert("⚡ Incorrect! Review the material and try again!");
}

