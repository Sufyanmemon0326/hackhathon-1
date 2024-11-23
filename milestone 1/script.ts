document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleButton") as HTMLButtonElement;
    const skillsList = document.getElementById("skillsList") as HTMLElement;

    toggleButton.addEventListener("click", () => {
        if (skillsList.style.display === "none") {
            skillsList.style.display = "block";
            toggleButton.textContent = "Hide Skills";
        } else {
            skillsList.style.display = "none";
            toggleButton.textContent = "Show Skills";
        }
    });
});
