
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * wisherEnemy
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function wisherEnemy(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'wisherEnemy', aFrame == undefined || aFrame == null? 'BirdEnemy0000' : aFrame);
	this.scale.set(0.7, 0.7);
	this.anchor.set(0.5, 0.5);
	var _anim_fly = this.animations.add('fly', ['BirdEnemy0000', 'BirdEnemy0001', 'BirdEnemy0002', 'BirdEnemy0003', 'BirdEnemy0004', 'BirdEnemy0005', 'BirdEnemy0006', 'BirdEnemy0007', 'BirdEnemy0008'], 30, true);
	this.animations.add('kicked', ['BirdEnemyKicked0000'], 1, false);
	_anim_fly.play();
	this.game.physics.arcade.enable(this);
	this.body.setCircle(51.5);
	
	this.myCreate();
	
}

/** @type Phaser.Sprite */
var wisherEnemy_proto = Object.create(Phaser.Sprite.prototype);
wisherEnemy.prototype = wisherEnemy_proto;
wisherEnemy.prototype.constructor = wisherEnemy;

/* --- end generated code --- */
// -- user code here --
wisherEnemy.prototype.myCreate = function() {
	
	this.MyY = this.y + 30;
	this.tweenBtn = this.game.add.tween(this).to( {y:this.MyY}, 200, Phaser.Easing.Sinusoidal.InOut, true);
	this.tween2Btn = this.game.add.tween(this).to(  {y:this.y}, 200, Phaser.Easing.Sinusoidal.InOut, true);
	
	this.tweenBtn.chain(this.tween2Btn);
	this.tween2Btn.chain(this.tweenBtn);
	this.tweenBtn.start();
	this.body.velocity.x =   Math.random()  * (500 - 300) - 300;
	this.speedKill =  false;
	this.isKicked =  false;
	this.isCombo =  false;
	this.isRed = false;

	this.myTimer = this.game.time.create(false);
    this.myTimer.loop(200, this.timerUpdate, this);
    this.myTimer.start();
	
};

wisherEnemy.prototype.turnRed = function() {
	this.tint=0xffa4a4;
	this.ShootTimer = this.game.time.create(false);
    this.ShootTimer.loop(2000, this.shoot, this);
    this.ShootTimer.start();

}

wisherEnemy.prototype.setKicked = function() {

	this.isKicked =  true;
}

wisherEnemy.prototype.shoot = function() {

		var _Fireshot = new shot(this.game, this.x-this.width/2, this.y);
		_Fireshot.tint = 0xffa4a4;
    	_Fireshot.body.velocity.x*=-1;
    	_Fireshot.scale.setTo(-1,0.3);
    	this.game.state.getCurrentState﻿().fEnemyBullet.add(_Fireshot)
};

wisherEnemy.prototype.killedBySpeed = function() {
	
	const enemyPoint = new Phaser.Point(this.x,this.y);
		if(enemyPoint.distance(this.game.state.getCurrentState﻿().fPlayer)<=500){
			this.game.state.getCurrentState﻿().destroyEnemy(this.game.state.getCurrentState﻿().fPlayer,this);
			
		}
};

wisherEnemy.prototype.timerUpdate = function() {
	
	if(this.y<=-100){ //elimina al enmigo al salir a la arriba de la pantalla por -100 px
		 if(typeof this.ShootTimer !== "undefined"){

			this.ShootTimer.destroy();
		 }
		 this.myTimer.destroy();
		this.destroy();
	}
	
	if(this.x<=-100){ //elimina al enmigo al salir a la izquierda de la pantalla por 100 px
		 if(typeof this.ShootTimer !== "undefined"){

			this.ShootTimer.destroy();
		 }
		 this.myTimer.destroy();
		this.destroy();
	}

	if(this.x>=2200){ //elimina al enmigo al salir a la derecha de la pantalla por 500 px
		 if(typeof this.ShootTimer !== "undefined"){

			this.ShootTimer.destroy();
		 }	
		 this.myTimer.destroy();	
		this.destroy();
	}
	
	if(this.y>=1180){
		 if(typeof this.ShootTimer !== "undefined"){

			this.ShootTimer.destroy();
		 }
		this.myTimer.destroy();
		this.destroy();
	}
	
}

wisherEnemy.prototype.update = function() {

	if(this.isKicked){

		this.isCombo = true;
		this.isKicked = false;
		
	}
	
	if(this.speedKill){ //elimna al enemigo al usar speedforce
		this.killedBySpeed();
	}


};