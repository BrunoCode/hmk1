window.onload = function() {

    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

    function preload () {

        game.load.image('back', 'back.jpg');
        game.load.spritesheet('scottrun','scott.png',280, 385, 10);
    }
    var back;
    var scott;
    var anim;
    var loopText;

    function create () {

  //      var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    //    logo.anchor.setTo(0.5, 0.5);
      back = game.add.image(0,0, 'back')
      //back.smoothed = false;
      scott = game.add.sprite(200, 0, 'scottrun');
      anim  = scott.animations.add('run');
      anim.play('2',true);
    }

};
