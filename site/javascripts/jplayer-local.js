function demoInstanceInfo(myPlayer, myInfo) {
	var jPlayerInfo = "<p>This jPlayer instance is running in your browser using ";

	if(myPlayer.jPlayer("getData", "usingFlash")) {
		jPlayerInfo += "<strong>Flash</strong> with ";
	} else {
		jPlayerInfo += "<strong>HTML5</strong> with ";
	}
	
	if(myPlayer.jPlayer("getData", "usingMP3")) {
		jPlayerInfo += "<strong>MP3</strong>";
	} else {
		jPlayerInfo += "<strong>OGG</strong>";
	}
	
	
	jPlayerInfo += " files.<br />This instance is using the constructor options:<br /><code>$(\"#" + myPlayer.jPlayer("getData", "id") + "\").jPlayer({<br />";
	
	jPlayerInfo += "&nbsp;&nbsp;&nbsp;nativeSupport: " + myPlayer.jPlayer("getData", "nativeSupport");
	jPlayerInfo += ", oggSupport: " + myPlayer.jPlayer("getData", "oggSupport");
	jPlayerInfo += ", customCssIds: " + myPlayer.jPlayer("getData", "customCssIds");
	
	jPlayerInfo += "<br />});</code></p>";
	myInfo.html(jPlayerInfo);
}

function demoStatusInfo(myPlayer, myInfo) {
	var jPlayerStatus = "<p>jPlayer is ";
	jPlayerStatus += (myPlayer.jPlayer("getData", "diag.isPlaying") ? "playing" : "stopped");
	jPlayerStatus += " at time: " + Math.floor(myPlayer.jPlayer("getData", "diag.playedTime")) + "ms.";
	jPlayerStatus += " (tt: " + Math.floor(myPlayer.jPlayer("getData", "diag.totalTime")) + "ms";
	jPlayerStatus += ", lp: " + Math.floor(myPlayer.jPlayer("getData", "diag.loadPercent")) + "%";
	jPlayerStatus += ", ppr: " + Math.floor(myPlayer.jPlayer("getData", "diag.playedPercentRelative")) + "%";
	jPlayerStatus += ", ppa: " + Math.floor(myPlayer.jPlayer("getData", "diag.playedPercentAbsolute")) + "%)</p>"
	myInfo.html(jPlayerStatus);
}

$(document).ready(function(){
 
	var playItem = 0;
 
	var myPlayList = [
		//{name:"Tempered Song",mp3:"http://www.miaowmusic.com/mp3/Miaow-01-Tempered-song.mp3",ogg:"http://www.miaowmusic.com/ogg/Miaow-01-Tempered-song.ogg"},
		{name:"dB - Larry David", mp3:"http://rhymedice.cadrlife.com/audio/Larry%20David%20Beat.mp3", ogg:"http://rhymedice.cadrlife.com/audio/Larry%20David%20Beat.ogg"
}
	];
 
	// Local copy of jQuery selectors, for performance.
	var jpPlayTime = $("#jplayer_play_time");
	var jpTotalTime = $("#jplayer_total_time");
	var jpStatus = $("#demo_status"); // For displaying information about jPlayer's status in the demo page
 
	$("#jquery_jplayer").jPlayer({
		ready: function() {
			displayPlayList();
			playListInit(false); // Parameter is a boolean for autoplay.
			demoInstanceInfo(this.element, $("#demo_info")); // This displays information about jPlayer's configuration in the demo page
		},
		oggSupport: true
	})
	.jPlayer("onProgressChange", function(loadPercent, playedPercentRelative, playedPercentAbsolute, playedTime, totalTime) {
		jpPlayTime.text($.jPlayer.convertTime(playedTime));
		jpTotalTime.text($.jPlayer.convertTime(totalTime));
 
		demoStatusInfo(this.element, jpStatus); // This displays information about jPlayer's status in the demo page
	})
	.jPlayer("onSoundComplete", function() {
		playListNext();
	});
 
	$("#jplayer_previous").click( function() {
		playListPrev();
		$(this).blur();
		return false;
	});
 
	$("#jplayer_next").click( function() {
		playListNext();
		$(this).blur();
		return false;
	});
 
	function displayPlayList() {
		$("#jplayer_playlist ul").empty();
		for (i=0; i < myPlayList.length; i++) {
			var listItem = (i == myPlayList.length-1) ? "<li class='jplayer_playlist_item_last'>" : "<li>";
			listItem += "<a href='#' id='jplayer_playlist_item_"+i+"' tabindex='1'>"+ myPlayList[i].name +"</a></li>";
			$("#jplayer_playlist ul").append(listItem);
			$("#jplayer_playlist_item_"+i).data( "index", i ).click( function() {
				var index = $(this).data("index");
				if (playItem != index) {
					playListChange( index );
				} else {
					$("#jquery_jplayer").jPlayer("play");
				}
				$(this).blur();
				return false;
			});
		}
	}
 
	function playListInit(autoplay) {
		if(autoplay) {
			playListChange( playItem );
		} else {
			playListConfig( playItem );
		}
	}
 
	function playListConfig( index ) {
		$("#jplayer_playlist_item_"+playItem).removeClass("jplayer_playlist_current").parent().removeClass("jplayer_playlist_current");
		$("#jplayer_playlist_item_"+index).addClass("jplayer_playlist_current").parent().addClass("jplayer_playlist_current");
		playItem = index;
		$("#jquery_jplayer").jPlayer("setFile", myPlayList[playItem].mp3, myPlayList[playItem].ogg);
	}
 
	function playListChange( index ) {
		playListConfig( index );
		$("#jquery_jplayer").jPlayer("play");
	}
 
	function playListNext() {
		var index = (playItem+1 < myPlayList.length) ? playItem+1 : 0;
		playListChange( index );
	}
 
	function playListPrev() {
		var index = (playItem-1 >= 0) ? playItem-1 : myPlayList.length-1;
		playListChange( index );
	}
});
