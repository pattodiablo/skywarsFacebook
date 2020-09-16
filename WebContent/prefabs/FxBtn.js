
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * FxBtn
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function FxBtn(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'buttons', aFrame == undefined || aFrame == null? 'FxBtn0000' : aFrame);
	this.anchor.set(0.5, 0.5);
	this.animations.add('off', ['FxBtn0001'], 1, false);
	this.animations.add('on', ['FxBtn0000'], 1, false);
	
	this.myCreate();
	
}

/** @type Phaser.Sprite */
var FxBtn_proto = Object.create(Phaser.Sprite.prototype);
FxBtn.prototype = FxBtn_proto;
FxBtn.prototype.constructor = FxBtn;

/* --- end generated code --- */
// -- user code here --
FxBtn.prototype.myCreate = function () {

this.inputEnabled = true;
this.isOn = true;
 this.events.onInputDown.add(this.turnOffOn, this);

}	

FxBtn.prototype.turnOffOn = function () {
	if(this.isOn){
		this.animations.play('off');
		this.isOn =  false;
		fxEnabled = true;
		this.game.state.getCurrentState().switchFX();
	}else{
		this.animations.play('on');
		this.isOn =  true;
		fxEnabled = false;
		this.game.state.getCurrentState().switchFX();
	}


}