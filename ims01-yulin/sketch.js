// credit to The CodingTrain
// source: https://www.youtube.com/watch?v=YqVbuMPIRwY
// this is a sketch on making slit-scan in p5. So basically it's tracking a single column of the video and draw that column for every frame.

var video;
var x= 0;

function setup() {
  createCanvas(800, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320,240);
    background(220);
}

function draw() {

  video.loadPixels();
  
  image(video);
  var w = video.width;
  var h = video.height;
    //copy function right here is going to copy the center column (1 pixel by video.height) of each frame of the live videos
  copy(video, w/2,0, 1, h, x, 0, 1, h);
  x= x+1;
  if (x > width){
    x = 0;
  } 
}