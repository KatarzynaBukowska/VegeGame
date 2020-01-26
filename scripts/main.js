window.onload = function() {
  let gameWrapperHeight = window.innerHeight;
  let gameWrapperWidth = window.innerWidth;

  const gameWrapper = document.querySelector(".game-wrapper");
  const gameCounterWrapper = document.querySelector(".counter-wrapper");
  const gameCounter = document.querySelector(".counter-wrapper > .counter");

  const vegetables = [
    "./assets/tomato.png",
    "./assets/cocumber.png",
    "./assets/apple.png",
    "./assets/pumpkin.png",
    "./assets/burger.png",
    "./assets/cherry.png",
    "./assets/orange.png",
    "./assets/pineapple.png",
    "./assets/pizza.png",
    "./assets/strawberry.png"
  ];

  let itemsDeleted = 0;

  function createNewGameItem() {
    let randomYposition = Math.floor(Math.random() * gameWrapperHeight);
    let randomXposition = Math.floor(Math.random() * gameWrapperWidth);

    let randomVege = Math.floor(Math.random() * vegetables.length);

    const createNewGameItem = document.createElement("div");
    createNewGameItem.style.left = randomXposition + "px";
    createNewGameItem.style.top = randomYposition + "px";
    createNewGameItem.style.backgroundImage = `url("${vegetables[randomVege]}")`;

    createNewGameItem.addEventListener("click", function(e) {
      if (e.target) {
        itemsDeleted++;
        gameCounterWrapper.classList.add("scale-up");
        gameCounter.textContent = itemsDeleted;

        setTimeout(function() {
          gameCounterWrapper.classList.remove("scale-up");
        }, 200);
      }
      e.target.classList.add("hidden");
      setTimeout(function() {
        e.target.remove();
      }, 1000);
    });
    gameWrapper.appendChild(createNewGameItem).classList.add("game-item");
  }

  const addInterval = setInterval(function() {
    createNewGameItem();
  }, 1000);
};
