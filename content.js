(() => {
  let images = [];
  let currentIndex = 0;

  const overlay = document.createElement("div");
  overlay.id = "project004-preview";

  overlay.innerHTML = `
    <button id="project004-close" class="project004-button">✕</button>
    <button id="project004-prev" class="project004-button">←</button>

    <img id="project004-image" />

    <button id="project004-next" class="project004-button">→</button>

    <button id="project004-original" class="project004-button">
      Original Page
    </button>
  `;

  document.body.appendChild(overlay);

  const image = overlay.querySelector("#project004-image");

  function collectImages() {
    images = [...document.querySelectorAll("img")]
      .filter(img => img.src && img.width > 100 && img.height > 100);
  }

  function showImage(index) {
    if (!images.length) return;

    currentIndex = (index + images.length) % images.length;
    image.src = images[currentIndex].src;
  }

  document.addEventListener("click", event => {
    const clickedImage = event.target.closest("img");

    if (!clickedImage) return;
    if (overlay.contains(clickedImage)) return;

    collectImages();

    const index = images.indexOf(clickedImage);

    if (index !== -1) {
  originalUrl =
  clickedImage.closest("a")?.href || 
  clickedImage.src;
      showImage(index);
      overlay.classList.add("active");
    }
  });

  document
    .getElementById("project004-close")
    .addEventListener("click", () => {
      overlay.classList.remove("active");
    });

  document
    .getElementById("project004-prev")
    .addEventListener("click", event => {
      event.stopPropagation();
      showImage(currentIndex - 1);
    });

  document
    .getElementById("project004-next")
    .addEventListener("click", event => {
      event.stopPropagation();
      showImage(currentIndex + 1);
    });

  document
  .getElementById("project004-original")
  .addEventListener("click", event => {
    event.stopPropagation();

    if (originalUrl) {
      window.open(originalUrl, "_blank");
    }
  });
  console.log("Project 004 image viewer loaded");
})();
