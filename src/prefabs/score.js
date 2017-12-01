
//Documentation for Phaser's (2.6.2) text:: phaser.io/docs/2.6.2/Phaser.Text.html
class Score extends Phaser.Text {

  //initialization code in the constructor
  constructor(game) {

     var x = game.world.centerX;
     var y = 55;
     var text = '00 - 00';
     var style = {
        font: '42px Arial',
        fill: '#ffffff',
        align: 'center'
     };
     super(game, x, y, text, style);
     this.anchor.setTo(0.5,0.5);
  }

  //Code ran on each frame of game
  update() {

  }

}

export default Score;
