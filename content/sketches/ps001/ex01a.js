let song;
let fft;
let isPause = false;
let isMute = false;

function preload() {
  song = loadSound("/visualcomputing/sketches/ps001/song.mp3");
}

function setup() {
  createCanvas(windowWidth - 15, windowHeight - 25);
  fft = new p5.FFT();
  song.play();
}

function draw() {
  background(0);
  let spectrum = fft.analyze();
  noStroke();
  for (let i = 0; i < spectrum.length; i++) {
    let amp = spectrum[i];
    let x = map(i, 0, spectrum.length, 0, width);
    let y = map(amp, 0, 255, height, 0);
    fill(amp, 255, 255);
    rect(x, y, width / spectrum.length, height - y);
  }
}

function keyPressed() {
    if (key === 'p' || key === 'P') {
        isPause = !isPause;
        if (isPause) {
            song.pause();
        } else {
            song.play();
        }
    }
}
