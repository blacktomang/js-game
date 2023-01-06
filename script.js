window.addEventListener("load", function () {
  console.log("start game onload");
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 1500;
  canvas.height = 500;

  class InputHandler {}

  class ProjectTile {}

  class Particle {}

  class Player {
    constructor(game) {
      this.game = game;
      this.width = 120;
      this.height = 190;
      this.x = 20;
      this.y = 100;
      this.speedY = 0;
    }

    update() {
      this.y += this.speedY;
    }

    draw(ctx) {
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  class Enemy {}

  class Layer {}

  class Background {}

  class UI {}

  class Game {
    constructor(width, height) {
      this.height = height;
      this.width = width;

      this.player = new Player(this);
    }

    update() {
      this.player.update();
    }
    draw(ctx) {
      this.player.draw(ctx);
    }
  }

  const game = new Game(canvas.width, canvas.height);

  // animate loop
  function animate() {
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);
  }

  animate();
});
