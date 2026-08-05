(() => {
  const overlay = document.createElement("div");
  overlay.id = "project004-preview";

  overlay.innerHTML = `
    <button id="project004-close" class="project004-button">✕</button>

    <button id="project004-prev" class="project004-button">←</button>

    <div style="color:white;font-size:24px;">
      Project 004 Preview Test
    </div>

    <button id="project004-next" class="project004-button">→</button>

    <button id="project004-original" class="project004-button">
      Original Page
    </button>
  `;

  document.body.appendChild(overlay);

  const testButton = document.createElement("button");
  testButton.textContent = "🖼️ Project 004 Test";
  testButton.style.position = "fixed";
  testButton.style.bottom = "20px";
  testButton.style.right = "20px";
  testButton.style.zIndex = "999998";
  testButton.style.padding = "12px";
  testButton.style.borderRadius = "8px";
  testButton.style.border = "1px solid #333";
  testButton.style.background = "white";
  testButton.style.color = "black";

  document.body.appendChild(testButton);

  testButton.addEventListener("click", () => {
    overlay.classList.add("active");
  });

  document
    .getElementById("project004-close")
    .addEventListener("click", () => {
      overlay.classList.remove("active");
    });

  console.log("Project 004 test system loaded");
})();
