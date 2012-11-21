"use strict";
/*global RhymeDice*/
var RhymeDice = {};

RhymeDice.phonemeCount = 2;
RhymeDice.topicCount = 1;

RhymeDice.roll = function () {
    $("#rhyme-scheme").empty();
    var i;
    for (i=0;i<RhymeDice.phonemeCount;i++) {
        $("#rhyme-scheme").append(RhymeDice.randomPhoneme().html());
    }
    $("#rhyme-scheme .words").each(function() {
 
        $(this).html(RhymeDice.randomWord($(this)).html())
    });
    $("#rhyme-topic").empty();
    for (i=0;i<RhymeDice.topicCount;i++) {
        $("#rhyme-topic").append(RhymeDice.randomTopic().html());
    }
}

RhymeDice.randomPhoneme = function() {
    var l = $("#data #phonemes .choice").length;
    return $("#data #phonemes .choice:eq(" + RhymeDice.nextInt(l) + ")");
}

RhymeDice.randomWord = function(words) {
    var l = words.find(".word").length;
    return words.find(".word:eq(" + RhymeDice.nextInt(l) + ")");
}

RhymeDice.randomTopic = function() {
    var l = $("#topics .choice").length;
    return $("#topics .choice:eq(" + RhymeDice.nextInt(l) + ")");
}

RhymeDice.nextInt = function (choices) {
    return Math.floor(Math.random() * choices);
}

RhymeDice.autoRollInterval = null;

$(function () {
    $(".beatToggle").click(function() {$("#beat").toggleClass("hidden");});
    $(".scheme-data").hide();
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
