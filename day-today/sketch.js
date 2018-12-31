let date = new DateCounter();
let size = 200;
let recOffset = 50;
let barWidth;
let buttonTweet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonTweet = createButton('Tweet it! 🕊');
  buttonTweet.addClass('btnTweet');
  buttonTweet.mousePressed(tweet);
  textAlign(CENTER);
}

function draw() {
  buttonTweet.position((windowWidth / 2) - recOffset - 40, (windowHeight - 80));
  background(0);
  fill(255);
  textSize(size);
  text(`${date.getPercent()}%`, windowWidth / 2, windowHeight / 2);
  barWidth = map(date.getPercent(), 0, 100, recOffset, windowWidth - (2 * recOffset));
  fill(0, 255, 0);
  stroke(255);
  strokeWeight(3);
  rect(recOffset, (windowHeight / 2) + recOffset, barWidth, 50);
  noFill();
  stroke(255);
  strokeWeight(3);
  rect(recOffset + barWidth, (windowHeight / 2) + recOffset, windowWidth - (2 * recOffset) - barWidth, 50);
}

//TODO, tweetear la imagen
/**
 * https://twittercommunity.com/t/tweet-with-image-using-javascript/82555
 * https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview
 * https://stackoverflow.com/questions/15181861/how-do-i-let-a-user-tweet-an-image
 * https://developer.twitter.com/en/docs/api-reference-index
 * https://www.youtube.com/watch?v=mUoIPmZ4KwA
 */


function tweet() {
  save(`${date.getPercent()}.png`);
}