
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * finalScreen.
 */
function finalScreen() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var finalScreen_proto = Object.create(Phaser.State.prototype);
finalScreen.prototype = finalScreen_proto;
finalScreen.prototype.constructor = finalScreen;

finalScreen.prototype.init = function () {
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.game.renderer.renderSession.roundPixels = true;
	this.physics.startSystem(Phaser.Physics.ARCADE);
	
};

finalScreen.prototype.preload = function () {
	
};

finalScreen.prototype.create = function () {
	this.add.sprite(0.0, 0.0, 'finalBg');
	
	this.add.sprite(0.0, 0.0, 'finalBuildings');
	
	var _finalHero = this.add.sprite(990.0, 1232.0, 'finalHero');
	_finalHero.anchor.set(0.5, 0.5);
	
	var _finalPlayBtn = this.add.sprite(1535.0, -191.0, 'finalPlayBtn');
	_finalPlayBtn.anchor.set(0.5, 0.5);
	
	this.add.sprite(0.0, 0.0, 'finalRoof');
	
	this.add.sprite(0.0, 0.0, 'finalRedLine');
	
	var _finalMessage = this.add.sprite(0.0, -577.0, 'finalMessage');
	
	var _finalScore = this.add.text(698.0, 430.0, '0000000', {"font":"bold 100px Arial","fill":"#ffffff","stroke":"#ffffff"});
	
	
	
	// fields
	
	this.fFinalHero = _finalHero;
	this.fFinalPlayBtn = _finalPlayBtn;
	this.fFinalMessage = _finalMessage;
	this.fFinalScore = _finalScore;
	this.myCreate();
	
};

/* --- end generated code --- */
// -- user code here --
finalScreen.prototype.myCreate = function () {

			
			
			this.fFinalScore.text =  this.game.finalScore;
			this.fFinalPlayBtn.inputEnabled =  true;
			this.fFinalPlayBtn.events.onInputDown.add(this.gameStart, this);

			this.showHero = this.game.add.tween(this.fFinalHero);
			this.showHero.to({y:540}, 1000, Phaser.Easing.Bounce.Out);
			this.showHero.onComplete.add(this.showButton,this)
			this.showHero.start();

			this.showMessage = this.game.add.tween(this.fFinalMessage);
			this.showMessage.to({y:0}, 1000, Phaser.Easing.Bounce.Out);
			this.showMessage.start();


	
}

finalScreen.prototype.shakeAndFlash = function () {
		this.game.camera.shake(0.02, 120);
  		this.game.camera.flash(0xffffff, 250)
};

finalScreen.prototype.gameStart = function () {


		FBInstant.player
		  .getStatsAsync(['coins','level','core1','core2','core3','timesDefeated'])
		  .then(function(data) {

	
		    var coins = data['coins'];
		    var level = data['level'];
		    var core1 = data['core1'];
		    var core2 = data['core2'];
		    var core3 = data['core3'];
		    var timesDefeated = data['timesDefeated'];

			FBInstant.game.playerCoins = coins;
			FBInstant.game.playerLevel = level;
			FBInstant.game.playerCore1 = core1;
			FBInstant.game.playerCore2 = core2;
			FBInstant.game.playerCore3 = core3;
			FBInstant.game.timesDefeated = timesDefeated;
		
			
			

		  }).then(function(data) {

			FBInstant.game.state.start("Level");
		  }).catch(function (e) {
		 	console.log(e);
		});


	
}

finalScreen.prototype.showButton = function () {
			this.shakeAndFlash();
			this.showMessage = this.game.add.tween(this.fFinalPlayBtn);
			this.showMessage.to({y:480}, 500, Phaser.Easing.Bounce.Out);
			this.showMessage.onComplete.add(this.bounceBtn,this)
			this.showMessage.start();
}

finalScreen.prototype.bounceBtn = function () {
	
	this.movePlayBtn = this.game.add.tween(this.fFinalPlayBtn.scale);
	this.movePlayBtn.to({x:1.05,y:1.05}, 500, Phaser.Easing.Linear.None);
	this.movePlayBtn2 = this.game.add.tween(this.fFinalPlayBtn.scale);
	this.movePlayBtn2.to({x:1,y:1}, 500, Phaser.Easing.Linear.None);
	this.movePlayBtn.chain(this.movePlayBtn2);
	this.movePlayBtn2.chain(this.movePlayBtn);
	this.movePlayBtn.start();
}