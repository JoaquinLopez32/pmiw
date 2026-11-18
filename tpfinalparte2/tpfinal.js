var colorT, colorB1, colorB2;
let mainJuego;

function preload() {
    mainJuego = new Juego();
}

function setup() {
    createCanvas(800, 450);

}

function draw() {
    mainJuego.dibujar();
}

function mousePressed() {
    mainJuego.inputMouse(mouseX,mouseY);
}

function keyPressed() {
    mainJuego.inputTeclado(keyCode);
}