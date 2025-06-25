document.addEventListener("DOMContentLoaded", () => {
    // Handle follow buttons
    const followButtons = document.querySelectorAll(".suggestions button");

    followButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.textContent === "Follow") {
                button.textContent = "Following";
                button.style.backgroundColor = "#ccc";
            } else {
                button.textContent = "Follow";
                button.style.backgroundColor = "#0095f6";
            }
        });
    });

    // Handle switch button
    const switchButton = document.querySelector(".switch-profile button");
    switchButton.addEventListener("click", () => {
        alert("Switched account!");
    });
});
