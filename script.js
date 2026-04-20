const lines = [
  "Do you feel it?",
  "Something doesn\u2019t quite settle.",
  "Everything is the same.",
  "But something is different.",
  "You\u2019re here.",
  "Reading this.",
  "And you know you are.",
  "But\u2014",
  "how?",
  "Something is quietly noticing.",
  "It has always been there.",
  "Don\u2019t rush it.",
  "Stay with it.",
  "It\u2019s closer than you think.",
  "Not somewhere else.",
  "Not later.",
  "Just here.",
  "You are what you were looking for."
];

const lineElement = document.getElementById("line");

const fadeDuration = 1400;
const firstLineDelay = 800;
const holdDuration = 2600;

function wait(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

async function playIntroSequence() {
  await wait(firstLineDelay);

  for (let index = 0; index < lines.length; index += 1) {
    lineElement.textContent = lines[index];
    lineElement.classList.add("visible");

    await wait(fadeDuration + holdDuration);

    if (index === lines.length - 1) {
      document.body.classList.add("finished");
      return;
    }

    lineElement.classList.remove("visible");
    await wait(fadeDuration);
  }
}

playIntroSequence();
