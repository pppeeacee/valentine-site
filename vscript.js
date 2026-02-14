const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.getElementById("container");

// "Жоқ" батырмасы — контейнердің ішінде ғана қашады
noBtn.addEventListener("mouseenter", () => {
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// "Иә" батырмасы
yesBtn.addEventListener("click", () => {
    container.innerHTML = `
      <div class="message">
        Сенің қолыңнан бәрі келеді.<br>
        Саған сенемін, алтыным! 💖
      </div>
  
      <img src="love.GIF" alt="Жүрек гиф" class="gif">
    `;
  });
  