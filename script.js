class MainScene {
  preload() {
    // Load sprites
    this.load.image('player', 'assets/balon.png');
    this.load.image('coin', 'assets/moneda.png');
  }

  create() {
    // Initialize player and coin
    this.player = this.physics.add.sprite(100, 100, 'player');
    this.player.setDisplaySize(50, 50);

    this.coin = this.physics.add.sprite(300, 300, 'coin');
    this.coin.setDisplaySize(75, 75);

    // Scoring system
    this.score = 0;
    const style = { font: '15px Fantasy', fill: '#FFF' };
    this.scoreText = this.add.text(20, 20, 'Points: ' + this.score, style);

    // Keyboard input
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    // Keyboard movement system
    if (this.cursors.right.isDown) {
      this.player.x += 3;
    } else if (this.cursors.left.isDown) {
      this.player.x -= 3;
    }

    if (this.cursors.down.isDown) {
      this.player.y += 3;
    } else if (this.cursors.up.isDown) {
      this.player.y -= 3;
    }

    // Check for coin collection
    if (this.physics.overlap(this.player, this.coin)) {
      this.getCoin();
    }
  }

  getCoin() {
    // Move the coin to a new random position
    this.coin.x = Phaser.Math.Between(100, 600);
    this.coin.y = Phaser.Math.Between(100, 300);

    // Increase the score by 10
    this.score += 10;

    // Update the score display
    this.scoreText.setText('Points: ' + this.score);
  }
}

// Phaser game configuration
new Phaser.Game({
  width: 700,
  height: 400,
  backgroundColor: '#12164d',
  scene: MainScene,
  physics: { default: 'arcade' },
  parent: 'game',
});
