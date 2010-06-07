var phonemeCount = 2;
var topicCount = 1;

function roll() {
  $("#rhyme-scheme").empty();
  var i;
  for (i=0;i<phonemeCount;i++) {
    $("#rhyme-scheme").append(randomPhoneme().html());
  }
  $("#rhyme-topic").empty();
  for (i=0;i<topicCount;i++) {
    $("#rhyme-topic").append(randomTopic().html());
  }
  
}

function randomPhoneme() {
  var l = $("#data #phonemes .choice").length
  return $("#data #phonemes .choice:eq(" + nextInt(l) + ")");
}
function randomTopic() {
  var l = $("#data #topics .choice").length
  return $("#data #topics .choice:eq(" + nextInt(l) + ")");
}

function nextInt(choices) {
  return Math.floor(Math.random() * choices);
}

$(function() {
  $("#roll input").click(roll).click();
});
