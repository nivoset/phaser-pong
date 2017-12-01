
//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class Npcpaddle extends Phaser.Sprite {
  //initialization code in the constructor
  constructor(game, x, y) {
    super(game, x, y, 'paddle');
    this.anchor.setTo(0.5,0.5);
    game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;

    this.body.immovable = true;
    this.body.allowGravity = false;
    this.paddleSpeed = 250;
    this.scale.set(0.55);


    //game.add.exsisting(this);
  }

  //Code ran on each frame of game
  update() {
    // this.game.arcade.physics.collide(this);
    var absDif = Math.floor(Math.abs(this.y - this.game.ball.y));
    var speed = this.paddleSpeed;
    if (absDif < 50) {
      speed *= (absDif/50);
      //console.log(speed +"\t" + absDif + "\t" + (absDif/100));
    }

    if (this.y < this.game.ball.y)
    {
      this.body.velocity.setTo(0,speed);
    }
    else if (this.y > this.game.ball.y)
    {
      this.body.velocity.setTo(0,-speed);
    }
    else {
       this.body.velocity.setTo(0,0);
    }
    /*/
    this.y = this.game.ball.y;
    if (this.y > this.game.world.height - (this.height/2)) {
      this.y = this.game.world.height - (this.height/2);
    }
    else if (this.y < this.height/2) {
      this.y = (this.height/2);
   } //*/
  }

}

export default Npcpaddle;
