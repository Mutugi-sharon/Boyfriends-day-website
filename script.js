// =========================================
// WELCOME SCREEN
// =========================================

function enterWebsite() {
    const welcome = document.querySelector(".welcome-screen");

    welcome.classList.add("hide");
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
// CLOSE MODAL WITH ESCAPE KEY
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


// =========================================
// OPEN ENVELOPE
// =========================================

function openEnvelope() {

    const envelope =
        document.querySelector("#envelope");

    const button =
        document.querySelector("#openEnvelopeButton");


    envelope.classList.toggle("open");


    if (envelope.classList.contains("open")) {

        button.textContent =
            "My Heart Is Open 💙";

    } else {

        button.textContent =
            "click me 💌";
    }
}


// =========================================
// KABABA SURPRISE
// =========================================

function unlockSurprise() {

    const input =
        document.querySelector("#nickname");

    const wrongAnswer =
        document.querySelector("#wrong-answer");

    const surprise =
        document.querySelector("#unlocked-message");

    const button =
        document.querySelector(".password-box button");


    const answer =
        input.value.trim().toLowerCase();


    if (answer === "kababa") {

        surprise.classList.add("show");

        wrongAnswer.textContent =
            "You got it! 🥹💙";

        input.disabled = true;

        button.disabled = true;

        button.textContent =
            "Unlocked 💙";


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

    const message =
        document.querySelector("#secret-message");


    message.classList.toggle("show");
}
