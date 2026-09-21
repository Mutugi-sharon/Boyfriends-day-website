// Open the website

function enterWebsite() {
  const welcomeScreen = document.querySelector(".welcome-screen");

  welcomeScreen.classList.add("hide");
}

// Scroll to the love letter

function openLetter() {
  const letter = document.querySelector("#letter");

  letter.scrollIntoView({
    behavior: "smooth",
  });
}
