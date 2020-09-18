
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * upgradeBtn
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function upgradeBtn(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'buttons', aFrame == undefined || aFrame == null? 'buttonMenu instance 10000' : aFrame);
	this.anchor.set(0.5, 0.5);
	this.animations.add('glow', ['buttonMenu instance 10000', 'buttonMenu instance 10001', 'buttonMenu instance 10002', 'buttonMenu instance 10003', 'buttonMenu instance 10004', 'buttonMenu instance 10005', 'buttonMenu instance 10006', 'buttonMenu instance 10007', 'buttonMenu instance 10008', 'buttonMenu instance 10009', 'buttonMenu instance 10010', 'buttonMenu instance 10011', 'buttonMenu instance 10012', 'buttonMenu instance 10013', 'buttonMenu instance 10014', 'buttonMenu instance 10015', 'buttonMenu instance 10016', 'buttonMenu instance 10017', 'buttonMenu instance 10018', 'buttonMenu instance 10019', 'buttonMenu instance 10020', 'buttonMenu instance 10021', 'buttonMenu instance 10022', 'buttonMenu instance 10023', 'buttonMenu instance 10024', 'buttonMenu instance 10025', 'buttonMenu instance 10026', 'buttonMenu instance 10027', 'buttonMenu instance 10028', 'buttonMenu instance 10029'], 30, false);
	this.animations.add('over', ['menuOver instance 10000', 'menuOver instance 10001', 'menuOver instance 10002', 'menuOver instance 10003'], 15, false);
	
	this.myCreate();
	
}

/** @type Phaser.Sprite */
var upgradeBtn_proto = Object.create(Phaser.Sprite.prototype);
upgradeBtn.prototype = upgradeBtn_proto;
upgradeBtn.prototype.constructor = upgradeBtn;

/* --- end generated code --- */
// -- user code here --
upgradeBtn.prototype.myCreate = function () {

	this.MyY =  this.y;
	this.enableMenuOnce =  true;
	this.inputEnabled = true;
	this.menuOn =  false;
    this.timer = this.game.time.create(false);
    this.timer.loop(6000, function(){
    	 this.enableMenuOnce = true;
    	this.animations.play('glow');
    }, this);
    this.timer.start();
    
    this.events.onInputDown.add(this.pullMenu, this);
    
    
};


upgradeBtn.prototype.pullMenu = function () {
	
	var coins = this.game.state.getCurrentState().fPlayer.coins;
	var level =  this.game.state.getCurrentState().fPlayer.myLevel;
	var core1Level = this.game.state.getCurrentState().fPlayer.core1Level;
	var core2Level = this.game.state.getCurrentState().fPlayer.core2Level;
	var core3Level = this.game.state.getCurrentState().fPlayer.core3Level;
	
	this.game.state.getCurrentState().saveProgress(coins,level,core1Level,core2Level,core3Level,this.game);
	
	if(!this.menuOn){
		console.log('core1Level ' + this.game.state.getCurrentState().fPlayer.core1Level);
		this.playerPos = -100;
		this.menuPos = 30;
		this.BtnPos=  860;
		this.textPos = 840;
		this.menuOn = true;
		this.game.state.getCurrentState().fPlayer.body.enable = false;
		this.game.state.getCurrentState().maximunStageSpeed=300;
		this.game.state.getCurrentState().fMenu.fReturnText.text = 'READY & DEPLOY';
		this.game.state.getCurrentState().fMenu.menuIsOpen =  true;
		this.game.state.getCurrentState().fMenu.updateMenu();
		this.game.state.getCurrentState().fMenu.getCoreStats();
		this.game.state.getCurrentState().fMenu.firstTimeRstBtn = false;	
		
	}else{
			
		this.menuPos = -947;
		this.BtnPos=  this.MyY;
		this.textPos = 1018;
		this.menuOn = false;
		this.game.state.getCurrentState().fPlayer.body.enable = true;
		//this.game.state.getCurrentState().fPlayer.x = this.game.width/2;
		this.game.state.getCurrentState().maximunStageSpeed=600;
		this.game.state.getCurrentState().fMenu.fReturnText.text = 'RETURN TO BASE';
		this.game.state.getCurrentState().fMenu.menuIsOpen =  false;

		this.game.state.getCurrentState().fMenu.stopUpdateMenu();
		this.game.state.getCurrentState().fMenu.firstTimeRstBtn = false;	
		this.game.state.getCurrentState().fLifeBar.callBarra();
	}
	
	
	
	retreavePlayer = this.game.add.tween(this.game.state.getCurrentState().fPlayer);		
	retreavePlayer.to({y:this.playerPos}, 500, Phaser.Easing.Linear.None);
	retreavePlayer.onComplete.add(function(){
		
		bajaLetrero = this.game.add.tween(this.game.state.getCurrentState().fMenu);		
	    bajaLetrero.to({y:this.menuPos}, 500, Phaser.Easing.Bounce.Out);
	    bajaLetrero.start();
	    
	    bajaBoton = this.game.add.tween(this);		
	    bajaBoton.to({y:this.BtnPos}, 500, Phaser.Easing.Bounce.Out);
	    bajaBoton.start();
	    
	   
	    bajaBoton = this.game.add.tween(this.game.state.getCurrentState().fMenu.fReturnText);		
	    bajaBoton.to({y:this.textPos}, 500, Phaser.Easing.Bounce.Out);
	    bajaBoton.start();
		
	}, this);
	retreavePlayer.start();
	
};

upgradeBtn.prototype.update = function () {
	
	if (this.input.pointerOver() && this.enableMenuOnce)
    {
	    this.enableMenuOnce = false;
        this.animations.play('over', 15, false);
    
    }
	if (this.input.pointerOut()){
		 this.animations.play('glow', 30, false);
	};
};