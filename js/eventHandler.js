document.addEventListener("DOMContentLoaded", () => {
  observeHeaderSection();
});

function observeHeaderSection() {
  const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        const headerSection = document.querySelector("#mainpage-header");
        if (headerSection) {
          observer.disconnect();
          playHeaderAnimation();
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  const existingHeaderSection = document.querySelector("#mainpage-header");
  if (existingHeaderSection) {
    observer.disconnect();
    playHeaderAnimation();
  }
}

function playHeaderAnimation() {
  const textContainer = document.querySelector("#mainpage-header .text-container");
  if (textContainer) {
    textContainer.classList.remove("hidden");
    textContainer.style.opacity = 0;
    textContainer.style.transition = "opacity 1s";
    setTimeout(() => {
      textContainer.style.opacity = 1;
    }, 100);
  }
}