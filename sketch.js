function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
 
  background(15, 15, 30);

  
  let posX, posY, tamanhoBase;

  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    
    posX = map(rotationY, -90, 90, 0, width);
    posY = map(rotationX, -90, 90, 0, height);
    tamanhoBase = map(abs(rotationX), 0, 90, 400, 50);
  } else {

    posX = mouseX;
    posY = mouseY;
    tamanhoBase = map(abs(mouseX - width / 2), 0, width / 2, 400, 50);
  }

  posX = constrain(posX, 0, width);
  posY = constrain(posY, 0, height);

  push();
  translate(width / 2, height / 2); 

  
  let numElipses = 6;
  
  for (let i = 0; i < numElipses; i++) {
    let desvio = i * 45; 
    
    
    stroke(60 + i * 35, 170, 255, 130);
    noFill();
    strokeWeight(2);
    
    
    ellipse(posX - width / 2, posY - height / 2, tamanhoBase + desvio, tamanhoBase / (i + 1));
  }
  
  pop();

  
  fill(255, 180);
  noStroke();
  textSize(14);
  text(isMobile ? "Modo: Acelerómetro (Telemóvel)" : "Modo: Rato (PC)", 30, 40);
}

function mousePressed() {
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission()
      .then(response => {
        if (response == 'granted') {
          
        }
      })
      .catch(console.error);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
