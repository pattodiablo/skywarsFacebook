
// -- user code here --
	var musicEnabled = true;
	var fxEnabled = true;
/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Level.
 */
function Level() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level_proto = Object.create(Phaser.State.prototype);
Level.prototype = Level_proto;
Level.prototype.constructor = Level;

Level.prototype.init = function () {
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.game.renderer.renderSession.roundPixels = true;
	this.stage.backgroundColor = '#80ffff';
	
	this.myInit();
	
};

Level.prototype.preload = function () {
	
};

Level.prototype.create = function () {
	var _background = this.add.sprite(0.0, 0.0, 'background');
	_background.fixedToCamera = true;
	
	var _middleBG = this.add.group();
	
	var _buildings = new BgBuildings(this.game, 0.0, 69.0);
	_middleBG.add(_buildings);
	
	var _platforms = this.add.physicsGroup(Phaser.Physics.ARCADE);
	
	var _building = new building1(this.game, 0.0, 634.0);
	_platforms.add(_building);
	
	var _building2Tower = new building2(this.game, 3302.0, 590.0);
	_platforms.add(_building2Tower);
	
	var _building3Tower = new building3(this.game, 2293.0, 785.0);
	_platforms.add(_building3Tower);
	
	var _lifeBar = new barraSalva(this.game, 474.0, 1304.0);
	_platforms.add(_lifeBar);
	
	var _build2 = new building1(this.game, 4604.0, 659.0);
	_platforms.add(_build2);
	
	var _powerLabel = this.add.group();
	_powerLabel.position.set(0.0, -595.0);
	
	var _powerText = this.add.text(64.0, 456.0, 'Double Jump', {"font":"bold 120px Arial","fill":"#ffffff","stroke":"#ffffff"}, _powerLabel);
	
	this.add.text(87.0, 397.0, 'You got', {"font":"bold 60px Arial","fill":"#ffffff","stroke":"#ffffff"}, _powerLabel);
	
	var _enemies = this.add.physicsGroup(Phaser.Physics.ARCADE);
	
	var _powerUps = this.add.group();
	
	var _coins = this.add.physicsGroup(Phaser.Physics.ARCADE);
	
	var _bullets = this.add.physicsGroup(Phaser.Physics.ARCADE);
	
	var _bossGroup = this.add.group();
	
	var _comboText = this.add.group();
	
	var _enemyShots = this.add.group();
	
	var _enemyBullet = this.add.group();
	
	var _menu = new menuBg(this.game);
	_menu.position.set(9.0, -947.0);
	
	var _player = new player(this.game, 350.0, -63.0);
	this.add.existing(_player);
	
	var _musicBtn = new musicBtn(this.game, 79.0, 1005.0);
	this.add.existing(_musicBtn);
	
	var _FxBtn = new FxBtn(this.game, 219.0, 1005.0);
	this.add.existing(_FxBtn);
	
	
	
	// fields
	
	this.fBackground = _background;
	this.fMiddleBG = _middleBG;
	this.fPlatforms = _platforms;
	this.fLifeBar = _lifeBar;
	this.fPowerLabel = _powerLabel;
	this.fPowerText = _powerText;
	this.fEnemies = _enemies;
	this.fPowerUps = _powerUps;
	this.fCoins = _coins;
	this.fBullets = _bullets;
	this.fBossGroup = _bossGroup;
	this.fComboText = _comboText;
	this.fEnemyShots = _enemyShots;
	this.fEnemyBullet = _enemyBullet;
	this.fMenu = _menu;
	this.fPlayer = _player;
	this.myCreate();
	
	
};

/* --- end generated code --- */
// -- user code here --


Level.prototype.myInit = function () {
	this.stageSpeed = 300;
	this.maximunStageSpeed = 600;

};




Level.prototype.myCreate = function () {

this.getProgress();
this.timerPowers = [];
this.timerPowers2 = [];
this.timerPowers3 = [];
this.comboHit =  0;
this.speedAnimations = [];
this.jumpAnimations = [];

  this.isBosstime =  false;
  this.isBossShow =  false;
 
//this.fBackground.filters = [filter];

	this.createCoins(this.fPlayer.x,this.fPlayer.y,300,false);
	this.kickLevel = 0;
	this.initSound = false;
	this.game.input.onDown.add(this.swipeDownAction, this);
	this.game.input.onUp.add(this.swipeUpAction, this);
	this.game.world.setBounds(0, 0, 1920, 1100);
	this.game.camera.follow(this.fPlayer, Phaser.Camera.FOLLOW_LOCKON,0.01, 0.01,0,0);
	this.jumpPower = -900;


if(!this.initSound){

	  this.bgMusicPlay();
	  this.initSound=true;
}


    enemyDeployTimer = this.game.time.create(false);
    enemyDeployTimer.loop(1250, this.deployItems, this);
    enemyDeployTimer.start();

  		
	//this.setupCoinEmitter();

   	this.myTimer = this.game.time.create(false);
    this.myTimer.loop(200, this.timerUpdate, this);
    this.myTimer.start();

};

Level.prototype.bgMusicPlay = function () {

	BgMusic = this.game.add.audio('bgmusic1', 0.3); //agregar musica y volumen
	BgMusic.allowMultiple = false;
	BgMusic.loop = true;


	BgMusic2 = this.game.add.audio('bgmusic2', 0.3); //agregar musica y volumen
	BgMusic2.allowMultiple = false;
	BgMusic2.loop = true;
	
	
	if(this.game.musicOption>2){
	this.game.musicOption = 1;
	}
	this.game.musicOption++;

	this.randomSong = Math.round(Math.random(1 - 2 ) + 1);


	switch (this.randomSong){

		case 1:
			console.log('rola 1 selected!');
			this.BgMusic = 1;
			BgMusic.play();
		break;
			

		case 2:
			console.log('rola 2 selected!');
			this.BgMusic = 2;
			BgMusic2.play();
		break;

		default:
			console.log('no rola selected');
		break;

	}
	

	baseCall = this.game.add.audio('baseCall', 0.2);
	baseCall.allowMultiple = false;
	baseCall.addMarker('baseCall', 0, 0.35	);

	bossCome = this.game.add.audio('bossCome', 0.2);
	bossCome.allowMultiple = false;
	bossCome.addMarker('bossCome', 0, 2.2	);

	bossCome2 = this.game.add.audio('bossCome2', 0.2);
	bossCome2.allowMultiple = true;
	bossCome2.addMarker('bossCome2', 0, 2.2	);

	die = this.game.add.audio('die', 0.2);
	die.allowMultiple = true;
	die.addMarker('die', 0, 1.6	);

	getCoins = this.game.add.audio('getCoins', 0.2);
	getCoins.allowMultiple = false;
	getCoins.addMarker('getCoins', 0, 0.52	);


	laserShot = this.game.add.audio('laserShot', 0.2);
	laserShot.allowMultiple = true;
	laserShot.addMarker('laserShot', 0, 0.38);

	powerup1 = this.game.add.audio('powerup1', 0.2);
	powerup1.allowMultiple = true;
	powerup1.addMarker('powerup1', 0, 0.5	);

	punch1 = this.game.add.audio('punch1', 0.05);
	punch1.allowMultiple = true;
	punch1.addMarker('punch1', 0, 0.3	);

	punch2 = this.game.add.audio('punch2', 0.05);
	punch2.allowMultiple = true;
	punch2.addMarker('punch2', 0, 0.45	);

	punch3 = this.game.add.audio('punch3', 0.05);
	punch3.allowMultiple = true;
	punch3.addMarker('punch3', 0, 0.7	);


	levelUp = this.game.add.audio('levelUp', 0.05);
	levelUp.allowMultiple = true;
	levelUp.addMarker('levelUp', 0, 4.3	);

	upgrade = this.game.add.audio('upgrade', 0.05);
	upgrade.allowMultiple = true;
	upgrade.addMarker('upgrade', 0, 0.9	);



	this.fxSounds = [baseCall,bossCome,bossCome2,die,getCoins,laserShot,powerup1,punch1,punch2,punch3,levelUp,upgrade]; //agreagar aqui todos los sound fx que se necesita adminstrar

	if(!fxEnabled){
		this.fxSounds.forEach(function(soundFx) { 	 //en caso de que se deshabilite los sonidos fxs
		soundFx.mute = true;
	},this);
	}

}
Level.prototype.getCoinSound = function (game) {

	getCoins.play('getCoins');
}
Level.prototype.switchMusic = function () {


	if(musicEnabled){

		BgMusic.pause();
		BgMusic2.pause();
		musicEnabled = false;
		console.log('musica disabled');
		

	}else{
	
console.log(this.randomSong);
		if(this.randomSong == 1){

			BgMusic.play();

		}else{

			BgMusic2.play();

		}
		
		musicEnabled = true;
			console.log('musica musicEnabled');
	}


	};

Level.prototype.switchFX = function () {
	

	if(fxEnabled){


	this.fxSounds.forEach(function(soundFx) { 	

		soundFx.mute = true;


	},this);

		fxEnabled = false;
		console.log('fx disabled');
		

	}else{
	
	this.fxSounds.forEach(function(soundFx) { 	

	soundFx.mute = false;


	},this);
	
		
		fxEnabled = true;
		console.log('fx enabled');
	}


	};

Level.prototype.deployItems = function() {

var itemAppearChance = (this.fPlayer.core1Level + this.fPlayer.core2Level + this.fPlayer.core3Level)/10;

const enemyXDeploy = Math.random()  * (550 - 200) + 200; //este es en realidad el Y donde aparece el power o el enemy

if(itemAppearChance>=0.5){
	itemAppearChance = 0.5;
}

const salen =  Math.random() < itemAppearChance;

if(salen){

	const wichSale =  Math.round(Math.random() * 3);


	if(this.fPlayer.core1Level>=1 && wichSale<=1){
		const item1Cap = this.fPlayer.core1Level/10;
		const isItem1Able =  Math.random() < (0.5+item1Cap);

		if(isItem1Able){
			var _itemPowerUp = new powerUp1(this.game, this.game.width+50, enemyXDeploy);
			this.fPowerUps.add(_itemPowerUp);
		}
	}

	if(this.fPlayer.core2Level>=1 && wichSale==2){
		const item2Cap = this.fPlayer.core2Level/10;
		const isItem2Able =  Math.random() < (0.5+item2Cap);

		if(isItem2Able){
			var _itemPowerUp = new powerUp2(this.game, this.game.width+50, enemyXDeploy);
			this.fPowerUps.add(_itemPowerUp);
		}
	}

	if(this.fPlayer.core3Level>=1 && wichSale==3){
		const item3Cap = this.fPlayer.core3Level/10;
		const isItem3Able =  Math.random() < (0.5+item3Cap);

		if(isItem3Able){
			var _itemPowerUp = new powerUp3(this.game, this.game.width+50, enemyXDeploy);
			this.fPowerUps.add(_itemPowerUp);
		}
	}
}




var _BirdEnemy = new wisherEnemy(this.game, this.game.width+50, enemyXDeploy);
var isRedEnemy=Math.random()<0.1;
	if(isRedEnemy){
		_BirdEnemy.turnRed();
	}

	this.fEnemies.add(_BirdEnemy);

};

Level.prototype.swipeUpAction = function(pointer) { 
this.fPlayer.isKicking = false;
this.jumpPower=0;
};


Level.prototype.swipeDownAction = function(pointer) { //manejo de swipe control de pantalla
	


	
	if(!this.fPlayer.canJump && this.fPlayer.canKick){
		const wichKick = Math.random()*10;
		if(wichKick>=5){
			this.fPlayer.animations.stop('down');
			this.fPlayer.animations.play('kick');
		}else{
			this.fPlayer.animations.stop('down');
			this.fPlayer.animations.play('kick2');
		}
		
		this.fPlayer.isKicking = true;
	}

	if(this.fPlayer.canJump){
		this.comboHit =  0;
		this.fPlayer.body.velocity.x =  50;
		this.fPlayer.body.velocity.y=-900;
		this.fPlayer.animations.play('up');
		this.fPlayer.canJump =  false;
		this.fPlayer.canKick = true;
		this.fPlayer.isKicking = false;

		
	}else if(this.fPlayer.canDoubleJump && this.fPlayer.isFalling){
		this.fPlayer.body.velocity.y=-1000;
			//this.fPlayer.canDoubleJump = false;
			this.fPlayer.myDoubleJump--;
	}
	

				};


Level.prototype.onPlatform = function (player, platform) {

if(platform.x>this.game.width/3){

player.body.velocity.x = platform.body.velocity.x;	
}else{

	player.body.velocity.x = -30;	
}
	
	player.canJump =  true;
	player.canKick = false;
	player.isKicking= false;

	this.fPlayer.animations.play('run');

	if(platform.body.touching.left){
		player.canJump =  false;
			
	}

	};	

Level.prototype.coinOnPlatform = function (coin, platform) {



coin.body.velocity.x = platform.body.velocity.x;	


	};	
Level.prototype.getExperience = function (enemy,comboHit) {	

this.fPlayer.getExp(comboHit);
if(this.fPlayer.currentFillLevel*10>8 && !this.isBosstime && !this.isBossShow){
	
	bossCome.play('bossCome');
	var _bigEnemy = new alienEnemy(this.game);
	_bigEnemy.position.set(1382.0, -483.0);
	this.fBossGroup.add(_bigEnemy);
	this.isBosstime = true;
}

if(this.fPlayer.ExpPoints>=this.kickLevel){

	
	this.kickLevel++;
}




}

Level.prototype.destroyEnemy = function (player, enemy) {	
//estas haciendo combo kick... 
	
	if(player.isKicking){
		if(!enemy.isKicked){
		
		if(!enemy.isCombo){

			var _kickPower = new kickPower(this.game, enemy.x, enemy.y);
			_kickPower.alpha = 0.5;
			this.add.existing(_kickPower);
			enemy.animations.play('kicked');
			enemy.tweenBtn.stop();
			enemy.tween2Btn.stop();
			enemy.body.velocity.x=800;
			enemy.body.gravity.y=1200;
			enemy.body.enabled = false;
			enemy.body.checkCollision.none = false;

			wichKick  = Math.round(Math.random()*3);
			
			switch(wichKick){
				case 1:
				punch1.play('punch1');
				break;
				case 2:
				punch2.play('punch2');
				break;
				case 3:
				punch3.play('punch3');
				break;
				default:
				punch1.play('punch1');
				break;

			}

		//	this.shakeAndFlash();
			enemy.isKicked =  true;
			this.comboHit++;
		

		if(this.comboHit>=2){

			var comboText = this.add.text(enemy.x, enemy.y, 'x' + this.comboHit , {"font":"bold 120px Arial","fill":"#ffffff","stroke":"#ffffff"});
			this.fComboText.add(comboText);
			
			this.showLevel = this.game.add.tween(comboText);
			this.showLevel.to({alpha:0}, 500, Phaser.Easing.Linear.None);
			this.showLevel.onComplete.add(function(){
			this.fComboText.forEach(function(comboText){
				comboText.destroy();
			})
			//this.showLevel.stop();
			}, this);
			this.showLevel.start();

			this.showLevel2 = this.game.add.tween(comboText);
			this.showLevel2.to({y:comboText.y-50}, 500, Phaser.Easing.Linear.None);

			this.showLevel2.onComplete.add(function(){	
			//this.showLevel2.stop();
			}, this);

			this.showLevel2.start();
		}
		}
}
			
			this.createCoins(enemy.x,enemy.y,300,false);
			
			
			this.getExperience(enemy,this.comboHit);
	}
	
};

Level.prototype.destroyEnemyWithLevel = function (player, enemy) {	

			//this.shakeAndFlash();
			for(var i=0; i<=10; i++){

			this.createCoins(enemy.x,enemy.y,300,true);	
			}
			
			
			enemy.animations.play('kicked');
			enemy.tweenBtn.stop();
			if(enemy.x>this.fPlayer.x){
				enemy.body.velocity.x=800;
			}else{
				enemy.body.velocity.x=-800;
			}
			
			enemy.body.gravity.y=1200;
			this.getExperience(enemy);

	
};

Level.prototype.destroyEnemyWithBullet = function (bullet, enemy) {	

		if(!enemy.isKicked){
			bullet.myTimer.destroy();
			this.fBullets.remove(bullet);
			enemy.setKicked();
			
			enemy.animations.play('kicked');
			enemy.tweenBtn.stop();
			enemy.tween2Btn.stop();
			enemy.body.velocity.x= 1200;
			enemy.body.gravity.y=1200;
			enemy.body.checkCollision.none = false;
			enemy.body.enabled = false;
			
			for (var i = 0; i < 10; i++) {
				this.getExperience(enemy);
			this.createCoins(enemy.x,enemy.y,-800,true);
			}
			
			
	}
	
};

Level.prototype.createCoins = function (x,y,velo,killedByBullet,noRetrieve) {

	var _coin = new coin(this.game, x, y);
	if(!noRetrieve ){
		if(typeof _coin !== "undefined"){
			_coin.startRetrieve();
			}
		}else{

			_coin.tint = 0x9e9e9e;
		}

	_coin.killedByBullet = killedByBullet;
	_coin.body.velocity.y=Math.random()*velo;
	_coin.body.velocity.x=Math.random()*velo;
	this.fCoins.add(_coin);

}

Level.prototype.shakeAndFlash = function () {
		this.game.camera.shake(0.02, 120);
  		this.game.camera.flash(0xffffff, 250)
};

Level.prototype.getPowerUp = function (player,powerUp) {
	
	if(!this.fPlayer.usingDoubleJump || !this.fPlayer.usingSpeedForce || !this.fPlayer.canShot){
		powerup1.play('powerup1');
	this.shakeAndFlash();
		if(powerUp.myPower == 'SuperShot'){
		if(this.timerPowers.length>0){

				this.timerPowers.forEach(function(timer){
					timer.destroy();

				});
			}
			console.log('i got superShot');
			this.fPowerText.text = 'Super Shot';
			player.canShot=true;

			switch(player.core3Level){

				case 1:
					powerUpTimer3 = 2000;
				break;

				case 2:
					powerUpTimer3 = 3000;
				break;

				case 3:
					powerUpTimer3 = 4000;
				break;

				case 4:
					powerUpTimer3 = 4500;
				break;

				default:
					powerUpTimer3 = 1000;
				break;
			}
		

			this.timerPower3 = this.game.time.create(false);
	    	this.timerPower3.loop(powerUpTimer3, quitSuperShot, this);
	   		this.timerPower3.start();

	   		this.timerPowers.push(this.timerPower3);

   			function quitSuperShot(){
   				player.canShot=false;
				player.enableShootOnce =true;
				this.timerPower3.destroy();
   			}
			
		}

	if(powerUp.myPower == 'doubleJump'){

		if(!this.fPlayer.usingDoubleJump){
			if(this.timerPowers2.length>0){

				this.timerPowers2.forEach(function(timer){
					timer.destroy();

				});
			}
			this._jumpPower_instance_ = new jumpPower(this.game, this.fPlayer.x, this.fPlayer.y);
			this.add.existing(this._jumpPower_instance_);
			this.jumpAnimations.push(this._jumpPower_instance_);
			player.usingDoubleJump=true;
			player.myDoubleJump++;
			player.canDoubleJump=true;
		
			this.fPowerText.text = 'Multi Jump';
		
			switch(player.core1Level){

				case 1:
					powerUpTimer2 = 3000;
				break;

				case 2:
					powerUpTimer2 = 4000;
				break;

				case 3:
					powerUpTimer2 = 5000;
				break;

				case 4:
					powerUpTimer2 = 6000;
				break;

				default:
					powerUpTimer2 = 2000;
				break;
			}
		

			this.timerPower4 = this.game.time.create(false);
	    	this.timerPower4.loop(powerUpTimer2, quitDoubleJump, this);
	   		this.timerPower4.start();

	   		this.timerPowers2.push(this.timerPower4);

   			function quitDoubleJump(){

   			
   				this.jumpAnimations.forEach(function(animation){

   					animation.destroy();
   				});
   				this.jumpAnimations = [];	

   				this._jumpPower_instance_.destroy();
   				this.fPlayer.usingDoubleJump =  false;
				player.canDoubleJump=false;
	   			this.timerPower4.destroy();

   			}
		}
	}

	if(powerUp.myPower == 'speedForce'){
	
	if(this.timerPowers3.length>0){

				this.timerPowers3.forEach(function(timer){
					timer.destroy();

				});
			}


	/*	fly = this.game.add.tween(this.fPlayer);
		fly.to({x:this.game.width/2 , y:this.game.height/3}, 500, Phaser.Easing.Linear.None);
		fly.start();*/

		this.fPlayer.usingSpeedForce =  true;
		this.fPowerText.text = 'Speed Force';
		this.fPlayer.body.moves = true;
		this.maximunStageSpeed=1500;
		this.stageSpeed=1500;

		switch(player.core2Level){

				case 1:
					powerUpTimer1 = 1500;
				break;

				case 2:
					powerUpTimer1 = 2000;
				break;

				case 3:
					powerUpTimer1 = 2500;
				break;

				case 4:
					powerUpTimer1 = 3000;
				break;


				default:
					powerUpTimer1 = 1500;
				break;
			}

		

   		this.speedPowerInstance = new speedPower(this.game, this.fPlayer.x, this.fPlayer.y);
		this.add.existing(this.speedPowerInstance);
		this.speedAnimations.push(this.speedPowerInstance);

		this.timerPower = this.game.time.create(false);
    	this.timerPower.loop(powerUpTimer1, slowAgain, this);
   		this.timerPower.start();
		this.timerPowers3.push(this.timerPower);


   		this.fEnemies.forEach(function(enemy){
  			enemy.speedKill =  true;
		});

   		function slowAgain(){
   	
				if(this.speedAnimations.length>0){
						this.speedAnimations.forEach(function(animation){
		  				
		  				animation.destroy();

				});
					this.speedAnimations = [];	
				}
	
   			this.fEnemies.forEach(function(enemy){
  			enemy.speedKill =  false;
			});
			this.fPlayer.usingSpeedForce =  false;
   			this.fPlayer.body.moves = true;
   			this.maximunStageSpeed=600;
   			this.timerPower.destroy();
   		};
		


			
}
	this.showLabel();
}
			
			
			powerUp.destroy();

};

Level.prototype.newLevelAnim = function () {

		

	

   		this.speedPowerInstance = new jumpPower(this.game, this.fPlayer.x, this.fPlayer.y);
   		this.powerAnim = this.speedPowerInstance.animations.play('power');
   		this.powerAnim.killOnComplete=true;
   		this.powerAnim.loop=false;
		this.add.existing(this.speedPowerInstance);

		explode = this.game.add.tween(this.speedPowerInstance.scale);
		explode.to({x:20 , y:20}, 500, Phaser.Easing.Linear.None);
	
		explode.start();


   		this.fEnemies.forEach(function(enemy){
  			enemy.game.state.getCurrentState().destroyEnemyWithLevel(this.fPlayer,enemy);
		});


}

Level.prototype.showLabel = function () {
			bajaLetrero = this.game.add.tween(this.fPowerLabel);		
		    bajaLetrero.to({y:-240}, 1200, Phaser.Easing.Bounce.Out);
		    bajaLetrero.onComplete.add(theEnd, this);
		    bajaLetrero.start();
		    
		    function theEnd() {
		    
		    e = this.game.add.tween(this.fPowerLabel);
		    
		    e.to({ y: -600 }, 500, Phaser.Easing.Bounce.Out);
		    e.start();

			}
}



Level.prototype.hitEnemyShot = function (player,shot) {

	player.body.velocity.x = -500;	
	
	if(player.isKicking){
		shot.tint = 0xd827d8;
		punch3.play('punch3');
		this.shakeAndFlash();
		player.body.velocity.x = -100;	
		this.createCoins(this.fPlayer.x, this.fPlayer.y,300,false);
		shot.body.velocity.x = 1000;	
		shot.body.gravity.y = 500;
		shot.isKicked = true;
	}
	
	
}

Level.prototype.hitPlayerWithBullet = function (player,bullet) {
	bullet.myTimer.destroy();
	bullet.destroy();
	this.shakeAndFlash();
	for(var i = 0 ; i<=5; i++){
		this.fPlayer.coins--;
			this.createCoins(player.x,player.y,1500,false,true);
		}
}

Level.prototype.timerUpdate = function() {

	this.fMenu.fLevelBar.fMoneyText.text = this.fPlayer.coins;
	if(this.fPlayer.myDoubleJump>0){
		this.fPlayer.canDoubleJump =  true;
	}
	if(this.stageSpeed>=this.maximunStageSpeed){

		this.stageSpeed = this.maximunStageSpeed;

	}else{
		this.stageSpeed+=10;
	}


		



}


Level.prototype.getProgress = function () {
console.log('gettingData');

	FBInstant.player
	  .getStatsAsync(['coins','level'])
	  .then(function(data) {

		console.log(data);
	    var coins = data['coins'];
	    var level = data['level'];
	    console.log('stats are loaded: coins ' +coins + ' level ' + level);

	  }).catch(function (e) {
	 	console.log(e);
	});

}

Level.prototype.saveProgress = function (coins,level,core1,core2,core3,game,isReset) {
console.log('salvando ' + coins + ' ' + level + ' ' + core1 + ' ' + core2 + ' ' + core3  );
	FBInstant.player
  	.setStatsAsync({

    coins: coins,
    level: level,
    core1: core1,
    core2: core2,
    core3: core3

  	})
  	.then(function() {

  		if(!isReset){
  			    console.log('data is set, coins ' +coins + 'level ' + level);
   				game.state.getCurrentState().getProgress();
		}else{
			BgMusic.stop();
			BgMusic2.stop();

			game.playerCoins = 29;
			game.playerLevel = 1;
			game.playerCore1 = 0;
			game.playerCore2 = 0;
			game.playerCore3 = 0;
			game.state.start("homeScreen");
	}



 	}).catch(function (e) {

 	console.log(e);
	});
}



Level.prototype.update = function () {

	//this.fPlayer.getExp(); //solo para pruebas habilitar para ganar experiencia rapidamente
	//console.log(this.fBossGroup.length);

	this.game.physics.arcade.overlap(this.fBullets , this.fEnemies, this.destroyEnemyWithBullet, null, this);
	this.game.physics.arcade.collide(this.fCoins , this.fPlatforms, this.coinOnPlatform, null, this);
	this.game.physics.arcade.collide(this.fPlayer , this.fPlatforms, this.onPlatform, null, this);
	this.game.physics.arcade.overlap(this.fPlayer , this.fEnemies, this.destroyEnemy, null, this);
	this.game.physics.arcade.overlap(this.fPlayer , this.fPowerUps, this.getPowerUp, null, this);
	this.game.physics.arcade.overlap(this.fPlayer , this.fEnemyShots, this.hitEnemyShot, null, this);
	this.game.physics.arcade.overlap(this.fPlayer , this.fEnemyBullet, this.hitPlayerWithBullet, null, this);
	if(this.fPlayer.y>=this.game.height+100 || this.fPlayer.x<=-100){ //muere die lost loose
		die.play('die');
		this.fPlayer.coins-=Math.round(10+this.fPlayer.coins*0.1);

		this.fPlayer.body.velocity.x=0;
		this.fPlayer.canJump = false;
		this.fPlayer.x = this.game.width/3.5;
		this.fPlayer.y = -50;
		
		
		for(var i = 0 ; i<=5; i++){
			this.createCoins(this.game.width/2,0,1500, false, true);
		}
		this.stageSpeed -= 20;
		if(this.stageSpeed<=100){

			this.stageSpeed=100
		}
		this.fLifeBar.callBarra();
		
		this.shakeAndFlash();
	}
	
};

