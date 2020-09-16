
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * barraSalva
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function barraSalva(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'buttons', aFrame == undefined || aFrame == null? 'buttonMenu instance 10012' : aFrame);
	this.scale.set(0.3, 0.4);
	this.anchor.set(0.5, 0.5);
	this.game.physics.arcade.enable(this);
	this.body.setSize(614.0, 114.0);
	this.body.moves = false;
	this.body.immovable = true;
	this.body.bounce.y = 0.2;
	
	this.myCreate();
	
}

/** @type Phaser.Sprite */
var barraSalva_proto = Object.create(Phaser.Sprite.prototype);
barraSalva.prototype = barraSalva_proto;
barraSalva.prototype.constructor = barraSalva;

/* --- end generated code --- */
// -- user code here --
barraSalva.prototype.callBarra = function() {

			this.showUp = this.game.add.tween(this);
			this.showUp.to({y:600}, 300, Phaser.Easing.Linear.None);
			this.showUp.onComplete.add(function(){
					
				this.showUp.stop();
				 	this.blinking = this.game.time.create(false);
				    this.blinking.loop(2000, this.blink, this);
				    this.blinking.start();

			}, this);
			this.showUp.start();
}
barraSalva.prototype.blink = function() {

	this.blinking.destroy();
	this.blink1 = this.game.add.tween(this);
	this.blink1.to({alpha:0.5}, 100, Phaser.Easing.Linear.None);
	this.blink2 = this.game.add.tween(this);
	this.blink2.to({alpha:1}, 100, Phaser.Easing.Linear.None);
	this.blink1.chain(this.blink2);
	this.blink2.chain(this.blink1);
	this.blink1.start();

	 	this.dissapear = this.game.time.create(false);
		this.dissapear.loop(600, this.getOut, this);
		this.dissapear.start();


}
barraSalva.prototype.getOut = function() {

this.dissapear.destroy();
	this.leave = this.game.add.tween(this);
	this.leave.to({y:1300}, 300, Phaser.Easing.Linear.None);

	this.leave.start();
}

barraSalva.prototype.getOutWhenJump = function(player,barra) {
	if(!player.canJump){
		this.getOut();
	}
}

barraSalva.prototype.myCreate = function() {

this.myY =  this.y;
}

barraSalva.prototype.update = function() {
this.game.physics.arcade.collide(this.game.state.getCurrentState().fPlayer , this, this.getOutWhenJump);
this.x =  this.game.state.getCurrentState().fPlayer.x;
}