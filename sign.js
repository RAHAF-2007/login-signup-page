document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");
    const messageBox = document.getElementById("messageBox");
    const card = document.querySelector(".card");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission

        // Simulate successful signup
        showMessage("Sign-up successful!");

        // Hide the form card
        card.style.display = "none";
    });

    function showMessage(message) {
        messageBox.textContent = message;
        messageBox.classList.remove("hidden");
        messageBox.classList.add("show");

        // Optional: auto-redirect or reset after a delay
        setTimeout(() => {
            messageBox.classList.add("hidden");
        }, 3000);
    }
});
