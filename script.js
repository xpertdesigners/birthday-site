// script.js
function startCard() {
  const name = document.getElementById("yourName").value.trim();
  const msg = document.getElementById("yourMsg").value.trim();

  if (!name || !msg) {
    alert("Please enter both your name and a birthday message.");
    return;
  }

  document.getElementById("nameOutput").textContent = name;
  document.getElementById("msgOutput").textContent = msg;

  document.getElementById("inputCard").classList.add("hidden");
  document.getElementById("wishCard").classList.remove("hidden");

  const music = document.getElementById("music");
  music.play().catch(() => {
    alert("Click anywhere on the page to enable birthday music.");
  });

  createHearts();
}

function revealWish() {
  document.getElementById("flame").style.display = "none";
  document.getElementById("finalWish").classList.remove("hidden");
}

function createHearts() {
  const heartsContainer = document.getElementById("heartsContainer");

  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "🎈"; // Changed to birthday balloon
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }

  setInterval(() => createHearts(), 5000);
}

function toggleMusic() {
  const music = document.getElementById("music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
