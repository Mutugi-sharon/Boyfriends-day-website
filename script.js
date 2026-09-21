// =========================================
// WELCOME SCREEN
// =========================================

function enterWebsite() {
  const welcome = document.querySelector(".welcome-screen");

  welcome.classList.add("hide");
}

// =========================================
// SCROLL TO LOVE LETTER
// =========================================

function openLetter() {
  const letter = document.querySelector("#letter");

  letter.scrollIntoView({
    behavior: "smooth",
  });
}

// =========================================
// OPEN ENVELOPE
// =========================================

function openEnvelope() {
  const envelope = document.querySelector("#envelope");

  const button = document.querySelector("#openEnvelopeButton");

  envelope.classList.toggle("open");

  if (envelope.classList.contains("open")) {
    button.textContent = "My Heart Is Open 💙";
  } else {
    button.textContent = "Open My Letter 💌";
  }
}

// =========================================
// KABABA SURPRISE
// =========================================

function unlockSurprise() {
  const input = document.querySelector("#nickname");

  const wrongAnswer = document.querySelector("#wrong-answer");

  const surprise = document.querySelector("#unlocked-message");

  const button = document.querySelector(".password-box button");

  const answer = input.value.trim().toLowerCase();

  if (answer === "kababa") {
    surprise.classList.add("show");

    wrongAnswer.textContent = "You got it! 🥹💙";

    input.disabled = true;

    button.disabled = true;

    button.textContent = "Unlocked 💙";

    surprise.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  } else {
    wrongAnswer.textContent =
      "Hmmmm... that's not what I call you 😭 Try again, my love. 💙";

    input.value = "";

    input.focus();
  }
}

// =========================================
// SECRET MESSAGE
// =========================================

function showSecret() {
  const message = document.querySelector("#secret-message");

  message.classList.toggle("show");
}
