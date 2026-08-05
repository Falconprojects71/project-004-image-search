(() => {
  const overlay = document.createElement("div");
  overlay.id = "project004-preview";

  overlay.innerHTML = `
    <button id="project004-close" class="project004-button">✕</button>

    <button id="project004-prev" class="project004-button">←</button>

    <img id="project004-image" alt="Image Preview">

    <button id="project004-next" class="project004-button">→</button>

    <button id="project004-original" class="project004-button">
      Original Page
    </button>
  `;

  document.body.appendChild(overlay);

  console.log("Project 004 preview system loaded");
})();
