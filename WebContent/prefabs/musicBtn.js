
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * musicBtn
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function musicBtn(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'buttons', aFrame == undefined || aFrame == null? 'musicBtn0000' : aFrame);
	this.anchor.set(0.5, 0.5);
	this.animations.add('off', ['musicBtn0001'], 1, false);
	this.animations.add('on', ['musicBtn0000'], 1, false);
	
	this.myCreate();
	
}

/** @type Phaser.Sprite */
var musicBtn_proto = Object.create(Phaser.Sprite.prototype);
musicBtn.prototype = musicBtn_proto;
musicBtn.prototype.constructor = musicBtn;

/* --- end generated code --- */
// -- user code here --
musicBtn.prototype.myCreate = function () {

this.inputEnabled = true;
this.isOn = true;
 this.events.onInputDown.add(this.turnOffOn, this);

}	
musicBtn.prototype.turnOffOn = function () {
	if(this.isOn){
		this.animations.play('off');
		this.isOn =  false;
		musicEnabled = true;
		this.game.state.getCurrentState().switchMusic();
	}else{
		this.animations.play('on');
		this.isOn =  true;
		musicEnabled = false;
		this.game.state.getCurrentState().switchMusic();
	}
}