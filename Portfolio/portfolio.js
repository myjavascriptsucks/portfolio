window.addEventListener("load", function() {
    const portraitContainer = document.querySelector(".portrait-container");
    const portraitImage = portraitContainer.querySelector(".portrait");
    const contentContainer = document.querySelector(".container");

    portraitImage.addEventListener("click", function() {
        portraitImage.classList.add("portrait-clicked");

        setTimeout(() => {
            portraitImage.classList.remove("portrait-clicked");
            contentContainer.classList.add("show-content");
            portraitContainer.style.display = "none";
        }, 200);
    });
});
