FBInstant.initializeAsync().then(function() {
		
		FBInstant.setLoadingProgress(100);
		FBInstant.startGameAsync().then(function() {
		

	var playerPhoto = FBInstant.player.getPhoto();
	var playerName= FBInstant.player.getName();
	

	function getProgress(){

		

		FBInstant.player
		  .getStatsAsync(['coins','level','core1','core2','core3'])
		  .then(function(data) {

	
		    var coins = data['coins'];
		    var level = data['level'];
		    var core1 = data['core1'];
		    var core2 = data['core2'];
		    var core3 = data['core3'];

	

		    		var game = new Phaser.Game(1920, 1080, Phaser.AUTO);
					// Add the States your game has.
					// game.state.add("Boot", Boot);
					// game.state.add("Menu", Menu);
					// game.state.add("Preload", Preload);
					game.musicOption=1;
					game.finalScore = 0;
					game.currentLevel = 1;
					game.playerCoins = coins;
					game.playerLevel = level;
					game.playerCore1 = core1;
					game.playerCore2 = core2;
					game.playerCore3 = core3;
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
//	console.log(FBInstant);
	getProgress();

  })
	});


