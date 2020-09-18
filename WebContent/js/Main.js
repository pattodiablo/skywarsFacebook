FBInstant.initializeAsync().then(function() {
		
		FBInstant.setLoadingProgress(100);
		FBInstant.startGameAsync().then(function() {
		

	var playerPhoto = FBInstant.player.getPhoto();
	var playerName= FBInstant.player.getName();
	

	function getProgress(){ //obtiene datos guardados de fbplayer
		

		FBInstant.player
		  .getStatsAsync(['coins','level','core1','core2','core3','timesDefeated'])
		  .then(function(data) {

	
		    var coins = data['coins'];
		    var level = data['level'];
		    var core1 = data['core1'];
		    var core2 = data['core2'];
		    var core3 = data['core3'];
		    var timesDefeated = data['timesDefeated'];

	

		    var game = new Phaser.Game(1920, 1080, Phaser.AUTO);
		    FBInstant.game =  game;
			game.musicOption=1;
			game.finalScore = 0;
			game.playerCoins = coins;
			game.playerLevel = level;
			game.playerCore1 = core1;
			game.playerCore2 = core2;
			game.playerCore3 = core3;
			game.timesDefeated = timesDefeated;
			game.playerPhoto = playerPhoto
			game.playerName = playerName;
			game.state.add("homeScreen", homeScreen);
			game.state.add("finalScreen", finalScreen);
			game.state.add("Level", Level);
			game.state.start("homeScreen");

		  }).catch(function (e) {
		 	console.log(e);
		});



	}
	
	getProgress();

  })
	});


