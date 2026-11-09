// ==========================================
// PROJETO FINAL - CÓDIGO CRIATIVO (p5.js)
// Tema: Acelerómetro -> Elipses Sobrepostas[cite: 1]
// (Deteta automaticamente se estás no PC ou Telemóvel)
// ==========================================

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  // Fundo escuro para dar um aspeto visual elegante e destacar as elipses
  background(15, 15, 30);

  // Variáveis de posição e tamanho
  let posX, posY, tamanhoBase;

  // DETEÇÃO AUTOMÁTICA DO DISPOSITIVO:
  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    // --- MODO TELEMÓVEL: Usa o acelerómetro (inclinar para cima/baixo/lados) ---
    posX = map(rotationY, -90, 90, 0, width);
    posY = map(rotationX, -90, 90, 0, height);
    tamanhoBase = map(abs(rotationX), 0, 90, 400, 50); // Grande no centro, pequeno nas pontas
  } else {
    // --- MODO PC: Usa o movimento do rato para testar confortavelmente ---
    posX = mouseX;
    posY = mouseY;
    tamanhoBase = map(abs(mouseX - width / 2), 0, width / 2, 400, 50);
  }

  // Garante que o desenho não sai dos limites do ecrã
  posX = constrain(posX, 0, width);
  posY = constrain(posY, 0, height);

  // ----------------------------------------------------
  // EXPRESSÃO VISUAL: Elipses Sobrepostas Generativas
  // ----------------------------------------------------
  push();
  translate(width / 2, height / 2); // Centrar o ponto de origem no meio do ecrã

  // Ciclo que cria múltiplas elipses multiplicadas no ecrã
  let numElipses = 6;
  
  for (let i = 0; i < numElipses; i++) {
    let desvio = i * 45; // Distância entre as várias elipses sobrepostas
    
    // Cores dinâmicas que mudam de tom consoante o índice do ciclo
    stroke(60 + i * 35, 170, 255, 130);
    noFill();
    strokeWeight(2);
    
    // Desenhar as elipses a reagir aos valores de movimento
    ellipse(posX - width / 2, posY - height / 2, tamanhoBase + desvio, tamanhoBase / (i + 1));
  }
  
  pop();

  // Pequeno texto informativo no canto superior esquerdo para saberes o modo ativo
  fill(255, 180);
  noStroke();
  textSize(14);
  text(isMobile ? "Modo: Acelerómetro (Telemóvel)" : "Modo: Rato (PC)", 30, 40);
}

// Necessário para pedir permissão aos sensores em iPhones/iPads
function mousePressed() {
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission()
      .then(response => {
        if (response == 'granted') {
          // Permissão concedida
        }
      })
      .catch(console.error);
  }
}

// Garante que o canvas se adapta perfeitamente se redimensionares a janela
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}