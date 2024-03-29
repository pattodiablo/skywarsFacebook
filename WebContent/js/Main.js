
FBInstant.initializeAsync().then(function() {
		
		FBInstant.setLoadingProgress(100);
		FBInstant.startGameAsync().then(function() {
	
		var playerPhoto = FBInstant.player.getPhoto();
		var playerName= FBInstant.player.getName();
	

		function loadGame(coins,level,core1,core2,core3,timesDefeated){

		    var game = new Phaser.Game(1920, 1080, Phaser.AUTO, 'skywarsGame',false);
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

		}

	function getProgress(){ //obtiene datos guardados de fbplayer
		
		console.log("trato de conseguir el progress")
	
	
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

			var preloadedInterstitial = null;
			loadGame(coins,level,core1,core2,core3,timesDefeated);


		  }).catch(function (e) {
			 console.log('error loading stats');
			

			 FBInstant.player
				.setStatsAsync({

				coins: 30,
				level: 1,
				core1: 0,
				core2: 0,
				core3: 0,
			

				})
				.then(function() {

					loadGame(30,1,0,0,0,0,0);
					


				}).catch(function (e) {

				console.log(e);
				});
				
		});



	}

	function getAads(){

		
		FBInstant.getRewardedVideoAsync(
			'3006013049505434_3099765166796888' // Your Ad Placement Id
		  ).then(function(rewarded) {
			// Load the Ad asynchronously
			preloadedRewardedVideo = rewarded;
			return preloadedRewardedVideo.loadAsync();
		  }).then(function() {
			console.log('Rewarded video preloaded');
		  }).catch(function(err){
			console.error('Rewarded video failed to preload: ' + err.message);
		  });

		preloadedRewardedVideo.showAsync()
			.then(function() {
			// Perform post-ad success operation
			console.log('Rewarded video watched successfully');        
			})
			.catch(function(e) {
			console.error(e.message);
			});

	}



	function getAads2(){

		

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

	 getAads();
 

  })
		var contextID = FBInstant.context.getID();
		

		if(contextID !== null){

			FBInstant.getLeaderboardAsync('goldCollected.'+contextID)
		    .then(function(leaderboard) {
		        return leaderboard.getEntriesAsync(count, start);
		    }).then(function(entries) {
		        // Score entries are returned in the entries array
		    }).catch(function(error) {
		    	
		    	console.log('Error retrieving scores');
		        // Error retrieving scores
		    });
		}

	});


