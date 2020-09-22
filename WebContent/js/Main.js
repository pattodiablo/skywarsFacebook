FBInstant.initializeAsync().then(function() {
		
		FBInstant.setLoadingProgress(100);
		FBInstant.startGameAsync().then(function() {

		var playerPhoto = FBInstant.player.getPhoto();
		var playerName= FBInstant.player.getName();
	

	function getProgress(){ //obtiene datos guardados de fbplayer
		
	FBInstant.player
	.canSubscribeBotAsync()
	.then(function(can_subscribe){
		if (can_subscribe) {
			 FBInstant.player.subscribeBotAsync()
			 .then(function () {

                       console.log('suscribed');

                    })
			 .catch(function (e) {

                        console.log('not suscribed');

                    })

		}
		
	})
	.catch(function (e) {

                 console.log('cant suscribe');

            });


var connectedPlayers = FBInstant.player.getConnectedPlayersAsync()
  .then(function(players) {
    console.log(players.map(function(player) {
      return {
        id: player.getID(),
        name: player.getName(),
      }
    }));
  });

  FBInstant.payments.getCatalogAsync().then(function (catalog) {
  console.log(catalog); // [{productID: '12345', ...}, ...]
});

  console.log(FBInstant.getSupportedAPIs());
const entryPointData = FBInstant.getEntryPointData();
 console.log(entryPointData);

 

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



		var preloadedInterstitial = null;



		  }).catch(function (e) {
		 	console.log(e);
		});



	}

	function getAads(){

		FBInstant.getInterstitialAdAsync(
		  '3006013049505434_3099765166796888' // Your Ad Placement Id
		).then(function(interstitial) {
		  // Load the Ad asynchronously
		  preloadedInterstitial = interstitial;
		  return preloadedInterstitial.loadAsync();
		}).then(function() {
		 

			preloadedInterstitial.showAsync()
		.then(function() {
		  // Perform post-ad success operation
		  console.log('Interstitial ad finished successfully');        
		})
		.catch(function(e) {
		  console.error(e.message);
		});


		}).catch(function(err){
		  console.error('Interstitial failed to preload: ' + err.message);
		});
		
	}
 getProgress();

	// getAads();
 

  })
	});


