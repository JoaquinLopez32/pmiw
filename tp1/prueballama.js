let avanza = [];
let descanzo = [];

let FActual1 = 0;
let FActual2 = 0;

let marca1 = 0;
let marca2 = 0;

let intervalo = 100;

let escena = 0;
let marcaEstado = 0;

let posx = 0;
let posx1 = 0;
let posx2 = 820;


//cordenadas de montaña2
let posx3 = 0;
let posx4 = 815;

//cordenadas de montaña1
let posx5 = 0;
let posx6 = 815;

let suelo;
let cielo;
let montana1;
let montana2;


function preload() {

  cielo = loadImage("data/cielo.png");
  suelo = loadImage("data/suelo.png");
  montana1 = loadImage("data/montana1.png");
  montana2 = loadImage("data/montana2.png");

  // Secuencia AVANZA
  for (let i = 0; i < 6; i++) {
    avanza[i] = loadImage("data/llama" + i + ".png");
  }

  // Secuencia DESCANSO
  for (let i = 0; i < 4; i++) {
    descanzo[i] = loadImage("data/descanso" + i + ".png");
  }
}


function setup() {
  createCanvas(800, 600);
}


function draw() {

  //CIELO
  image(cielo, 0, 0, 800, 600);


  //MONTAÑAS FONDO
  image(montana2, posx3, 100, 820, 600);
  image(montana2, posx4, 100, 820, 600);

  if (posx3 < -800) {
    posx3 = 820;
  }
  if (posx4 < -800) {
    posx4 =820;
  }

  //MONTAÑAS FRENTE
  image(montana1, posx5, 0, 820, 600);
  image(montana1, posx6, 0, 820, 600);

  if (posx5 < -800) {
    posx5 = 820;
  }
  if (posx6 < -800) {
    posx6 =820;
  }

  //-------------------------------------------------------------//

  // CAMBIO DE ESTADO segun milis

  estados();

  //-------------------------------------------------------------//

  // ANIMACIÓN AVANZA

  if (millis() - marca1 >= intervalo) {
    FActual1++;
    marca1 = millis();
  }
  //loopeo de secuencia perri
  if (FActual1 >= avanza.length) {
    FActual1 = 0;
  }


  // ANIMACIÓN DESCANSO
  if (millis() - marca2 >= intervalo) {
    FActual2++;
    marca2 = millis();
  }
  //secuencia de loopeo perro
  if (FActual2 >= descanzo.length) {
    FActual2 = 0;
  }
  //-------------------------------------------------------------//

  // ELEGIR ANIMACIÓN SEGÚN EL ESTADO

  switch (escena) {

  case 0:
    image(descanzo[FActual2], posx, 335, 200, 200);
    break;

  case 1:
    image(avanza[FActual1], posx, 335, 200, 200);
    posx+=2;
    break;

  case 2:
    image(avanza[FActual1], posx, 335, 200, 200);
    posx1-=2;
    posx2-=2;
    posx3-=0.5;
    posx4-=0.5;
    posx5-=1;
    posx6-=1;

    break;

  case 3:

    image(descanzo[FActual2], posx, 335, 200, 200);

    if (posx > 0 ) {
      posx-=2;
      posx1-=2;
      posx2-=2;
      posx3-=0.5;
      posx4-=0.5;
      posx5-=1;
      posx6-=1;
    }

    break;
  }


  // SUELO


  image(suelo, posx1, 503, 820, 100);
  image (suelo, posx2, 503, 820, 100);

  if (posx1 < -800) {
    posx1 = 820;
  }
  if (posx2 < -800) {
    posx2 =820;
  }

  console.log(escena);
}


// futuro posible anocheser

//fill(1, 9, 107, 150);
//rect(0, 0, 800, 600);

function estados () {
  if (escena == 0 && millis() - marcaEstado >= 3000) {
    escena = 1;
    marcaEstado = millis();
  }

  if (escena == 1 && millis() - marcaEstado >= 2000) {
    escena = 2;
    marcaEstado = millis();
  }

  if (escena == 2 && millis() - marcaEstado >= 5000) {
    escena = 3;
    marcaEstado = millis();
  }

  if (escena == 3 && millis() - marcaEstado >= 2000) {
    escena = 0;
    marcaEstado = millis();
  }
}
