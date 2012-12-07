"use strict";
/*global RhymeDice*/
var RhymeDice = {};

RhymeDice.phonemeWordMap = {
	"i":["Fleece", "Neece", "East", "Priest"],
	"u":["Goose", "Loose", "Moose", "Shoe"],
	"ɪ":["Kit", "Spit", "Knit", "Win"],
	"ʊ":["Foot", "Book", "Crook", "Shook"],
	"e":["Face", "Mace", "Place", "Taste"],
	"ɚ":["Nurse", "Verse", "Purse", "First"],
	"o":["Goat", "Throat", "Gloat", "Wrote"],
	"ɛ":["Dress", "Press", "Flesh", "Stretch"],
	"ʌ":["Strut", "Cut", "What", "Rust"],
	"ɔ":["Thought", "Caught", "Bought", "Mock"],	
	"æ":["Trap", "Slap", "Gap", "Map"],
	"ɑ":["Lot", "Spot", "Not", "Trot", "Hot"]};

RhymeDice.topics = ["Physics", "Chemistry", "Biology", "Regions", "Theories", "Hopes", "Fears", "Gender", "Relationships", "Sex", "Romance", "Language", "Politics", "Leaders", "Artists", "Painters", "Musicians", "Poets", "Ecosystems", "Climates", "Plants", "Animals", "Time", "Past", "Future", "Religeon", "Superstition", "Rituals", "Fanbase", "Skills", "Medicine", "Pain", "Death"];

RhymeDice.roll = function () {
    $("#rhyme-scheme .phoneme").each(function() {
 		var phoneme = RhymeDice.randomPhoneme()
        $(this).find(".symbol").text(phoneme);
		$(this).find(".word").text(RhymeDice.randomElement(RhymeDice.phonemeWordMap[phoneme]));
    });
    $("#rhyme-topic").text(RhymeDice.randomElement(RhymeDice.topics));
}

RhymeDice.randomPhoneme = function() {
	return RhymeDice.randomElement(Object.keys(RhymeDice.phonemeWordMap));
}

RhymeDice.randomElement = function (arr) {
    return  arr[RhymeDice.nextInt(arr.length)];
}

RhymeDice.nextInt = function (choices) {
    return Math.floor(Math.random() * choices);
}

RhymeDice.autoRollInterval = null;

$(function () {
    $(".beatToggle").click(function() {$("#beat").toggleClass("hidden");});
    $("#roll input").click(function() {
      var bpm = $("#bpmInput").val();
      var bars = $("#barsInput").val();
      if (null != RhymeDice.autoRollInterval) {
        window.clearInterval(RhymeDice.autoRollInterval);
      }
      if ($("#autoRollCheckbox").is(':checked')) {
        RhymeDice.autoRollInterval=setInterval(RhymeDice.roll, (60*1000*4*bars)/bpm);
      }
      RhymeDice.roll();

    }).click();
});
