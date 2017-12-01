
//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class Ball extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, frame) { //Phaser.Physics.P2JS
    super(game, x, y, 'ball', frame);
    this.global = game.game.global;
    this.anchor.setTo(0.5,0.5);
    game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.body.bounce.setTo(1.25,1.30);
    this.body.maxVelocity.setTo(500,700);
    this.ballLaunched= false;
    this.ballVelocity = 350;
  }

  //Code ran on each frame of game
  update() {
     this.game.input.onDown.add(function () {
        if (!this.ballLaunched)
         this.LaunchBall();
     }, this);

    if (this.body.blocked.left) {
       this.global.score[1] ++;
       this.LaunchBall();
    }
    if (this.body.blocked.right) {
       this.global.score[0] ++;
       this.LaunchBall();
    }

    // this.LaunchBall();
  }

  LaunchBall () {
     if (this.ballLaunched) {
        this.x = this.game.world.centerX;
        this.y = this.game.world.centerY;
        this.body.velocity.setTo(0,0);
        this.ballLaunched = false;
     } else {
        var vertSpeed = (Math.random() >= 0.5?1:-1)*this.ballVelocity*Math.random();
        var horzSpeed = (Math.random() >= 0.5?1:-1)*(this.ballVelocity+this.ballVelocity/2)*Math.random();
        console.log(vertSpeed+"/"+horzSpeed);
        this.body.velocity.setTo(vertSpeed,horzSpeed);
        this.ballLaunched = true;
     }

  }

}

export default Ball;
