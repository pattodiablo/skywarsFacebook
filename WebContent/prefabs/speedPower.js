
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * speedPower
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function speedPower(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'powerUps', aFrame == undefined || aFrame == null? 'speedPower instance 10014' : aFrame);
	this.anchor.set(0.5, 0.5);
	var _anim_power = this.animations.add('power', ['speedPower instance 10000', 'speedPower instance 10001', 'speedPower instance 10002', 'speedPower instance 10003', 'speedPower instance 10004', 'speedPower instance 10005', 'speedPower instance 10006', 'speedPower instance 10007', 'speedPower instance 10008', 'speedPower instance 10009', 'speedPower instance 10010', 'speedPower instance 10011', 'speedPower instance 10012', 'speedPower instance 10013', 'speedPower instance 10014'], 30, true);
	_anim_power.play();
	
}

/** @type Phaser.Sprite */
var speedPower_proto = Object.create(Phaser.Sprite.prototype);
speedPower.prototype = speedPower_proto;
speedPower.prototype.constructor = speedPower;

/* --- end generated code --- */
// -- user code here --
speedPower.prototype.update = function() {
	this.x = this.game.state.getCurrentState﻿().fPlayer.x;
	this.y = this.game.state.getCurrentState﻿().fPlayer.y;
};