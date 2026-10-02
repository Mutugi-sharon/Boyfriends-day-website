// =========================================
// WELCOME SCREEN
// =========================================

function enterWebsite() {
    const welcomeScreen = document.querySelector(".welcome-screen");

    if (welcomeScreen) {
        welcomeScreen.classList.add("hide");
    }
}


// =========================================
// SCROLL TO SECTION
// =========================================

function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
}


// =========================================
// OPEN MODAL
// =========================================

function openModal(modalId) {

    const modal = document.getElementById(modalId);

    if (modal) {

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    }
}


// =========================================
// CLOSE MODAL
// =========================================

function closeModal(modalId) {

    const modal = document.getElementById(modalId);

    if (modal) {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }
}


// =========================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// =========================================

document.addEventListener("click", function (event) {

    if (event.target.classList.contains("modal")) {

        event.target.classList.remove("active");

        document.body.style.overflow = "";

    }

});


// =========================================
// SECRET NICKNAME
// =========================================

function unlockSurprise() {

    const input = document.getElementById("nickname");
    const wrongAnswer = document.getElementById("wrong-answer");
    const unlockedMessage = document.getElementById("unlocked-message");

    if (!input || !wrongAnswer || !unlockedMessage) {
        return;
    }

    const answer = input.value.trim().toLowerCase();

    if (answer === "kababa") {

        unlockedMessage.classList.add("show");

        wrongAnswer.textContent = "";

    } else {

        unlockedMessage.classList.remove("show");

        wrongAnswer.textContent =
            "Hmm... that's not what I call you 👀💙";

    }
}


// =========================================
// SECRET MESSAGE
// =========================================

function showSecret() {

    const secretMessage =
        document.getElementById("secret-message");

    if (secretMessage) {

        secretMessage.classList.toggle("show");

    }
}


// =========================================
// ESC KEY CLOSES MODALS
// =========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        const activeModal =
            document.querySelector(".modal.active");

        if (activeModal) {

            activeModal.classList.remove("active");

            document.body.style.overflow = "";

        }

    }

});
