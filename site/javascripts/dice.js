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
    $("#rhyme-topic").empty();
    for (i=0;i<RhymeDice.topicCount;i++) {
        $("#rhyme-topic").append(RhymeDice.randomTopic().html());
    }
}

RhymeDice.randomPhoneme = function () {
    var l = $("#data #phonemes .choice").length;
    return $("#data #phonemes .choice:eq(" + RhymeDice.nextInt(l) + ")");
}

RhymeDice.randomTopic = function () {
    var l = $("#data #topics .choice").length;
    return $("#data #topics .choice:eq(" + RhymeDice.nextInt(l) + ")");
}

RhymeDice.nextInt = function (choices) {
    return Math.floor(Math.random() * choices);
}

$(function () {
    $("#roll input").click(RhymeDice.roll).click();
});
