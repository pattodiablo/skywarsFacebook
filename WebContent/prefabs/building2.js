
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * building2
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function building2(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'building2', aFrame == undefined || aFrame == null? null : aFrame);
	this.game.physics.arcade.enable(this);
	this.body.immovable = true;
	this.body.velocity.x = -500.0;
	this.body.friction.x = 0.0;
	
	this.myCreate();
	
}

/** @type Phaser.Sprite */
var building2_proto = Object.create(Phaser.Sprite.prototype);
building2.prototype = building2_proto;
building2.prototype.constructor = building2;

/* --- end generated code --- */
// -- user code here --
building2.prototype.myCreate = function() {
	
	this.body.velocity.x = -this.game.state.getCurrentState﻿().stageSpeed;
};

building2.prototype.update = function() {
	this.body.velocity.x = -this.game.state.getCurrentState﻿().stageSpeed;
if(this.x <= -this.width){
	const variableDistance = Math.random()* (500 - 300) + 300;
	this.x = this.game.state.getCurrentState﻿().fPlatforms.width-variableDistance;
	
	
	const variableDistance2 = Math.random()* (800 - 650) + 650;
	this.y = variableDistance2;

	}

};