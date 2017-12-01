import Paddle from '../prefabs/paddle';
import Npcpaddle from '../prefabs/npcpaddle';
import Ball from '../prefabs/ball';
import Score from '../prefabs/score'

class Game extends Phaser.State {

  constructor() {
    super();
  }

  create() {

    this.paddle = new Paddle(this, 32, this.world.centerY);
    this.game.add.existing(this.paddle);

    this.ball = new Ball(this, this.world.centerX, this.world.centerY);
    this.game.add.existing(this.ball);

    this.npcPlayer = new Npcpaddle(this, this.world.width -32, this.world.centerY);
    this.game.add.existing(this.npcPlayer);

    this.score = this.add.text(this.game.width * 0.5, 32, '00 - 00', {
      font: '42px Arial', fill: '#ffffff', align: 'center'
    });
    this.score.anchor.set(0.5);

    this.game.global.score = [ 0, 0 ];
    //this.score = new Score(this);

    //this.playerGroup = this.game.physics.createCollisionGroup();
    //this.input.onDown.add(this.endGame, this);
  }
  reflect(a, ball) {
     console.log(a.body.velocity.y);
     ball.body.velocity.y += a.body.velocity.y;
  }

  update() {
     this.game.physics.arcade.collide(this.paddle, this.ball, null, this.reflect);
     this.game.physics.arcade.collide(this.npcPlayer, this.ball, null, this.reflect);
     this.score.text = this.game.global.score.join(" - ");
  }

  endGame() {
    this.game.state.start('gameover');
  }

}

export default Game;
