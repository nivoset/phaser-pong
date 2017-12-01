
//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class Paddle extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, frame) {
    super(game, x, y, 'paddle', frame);
    this.anchor.setTo(0.5,0.5);
    game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;

    this.paddleSpeed = 1000;
    this.body.immovable = true;
    this.body.allowGravity = false;
    this.scale.set(0.55);

    //game.add.exsisting(this);
  }

  //Code ran on each frame of game
  update() {

     var absDif = Math.floor(Math.abs(this.y - this.game.input.mousePointer.y));
     var speed = this.paddleSpeed;
     if (absDif < 50) {
       speed *= (absDif/50);
       //console.log(speed +"\t" + absDif + "\t" + (absDif/100));
     }

     if (this.y < this.game.input.mousePointer.y)
     {
       this.body.velocity.setTo(0,speed);
     }
     else if (this.y > this.game.input.mousePointer.y)
     {
       this.body.velocity.setTo(0,-speed);
     }
     else {
        this.body.velocity.setTo(0,0);
     }
    // this.game.arcade.physics.collide(this);
    /*
    this.y = this.game.input.mousePointer.y;
    if (this.y > this.game.world.height - (this.height/2)) {
      this.y = this.game.world.height - (this.height/2);
    }
    else if (this.y < this.height/2) {
      this.y = (this.height/2);
   } //*/
  }

}

export default Paddle;
