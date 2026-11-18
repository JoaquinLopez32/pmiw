var imagen = [];
var texto = [];
var soindo = []

var dialogo = 0
var cantidad = 0
var velocidad = 50
var ultimoCaracter = 0
var textoActual

var dialogo1 = 0
var cantidad1 = 0
var ultimoCaracter1 = 0
var textoActual1

var dialogo2 = 0
var cantidad2 = 0
var ultimoCaracter2 = 0
var textoActual2

var visita1 = false
var visita2 = false
var visita3 = false
var visita4 = false
var visita5 = false

var pantalla = 0;

//pantalla 1
var posy1 = 0;
var posx1 = 800

//pantalla 2

var tamx1 = 0
var tamy1 = 0

//pantalla 3
var transparencia1 = 0
//laucha
var distancia1 = dist(mouseX, mouseY, 275, 335)
//mur
var distancia2 = dist(mouseX, mouseY, 207, 124)
//palo
var distancia3 = dist(mouseX, mouseY, 375, 120)
//babo
var distancia4 = dist(mouseX, mouseY, 568, 130)
//sapo
var distancia5 = dist(mouseX, mouseY, 438, 295)

//pantalla 9
var tamx2 = 0;
var tamy2 = 0;




function MichaInterroga(imagen1, imagen2, posx, posy) {
    // Cada personaje tiene su propio texto
    textoActual = texto[dialogo];
    textoActual1 = texto[dialogo1];

    imageMode(CORNER);
    image(imagen1, 0, 0);

    imageMode(CENTER);
    image(imagen2, posx, posy);

    // DIÁLOGO DE LA MICHA
    if (cantidad < textoActual.length &&
        millis() - ultimoCaracter > velocidad) {

        cantidad++;
        ultimoCaracter = millis();
    }

    // Cuadro de diálogo de la Micha
    rectMode(CORNER);
    fill(0, 100);
    stroke(255);
    rect(15, 15, 775, 100, 20);

    // Texto de la Micha
    fill(255);
    noStroke();
    textAlign(LEFT, TOP);
    text(textoActual.substring(0, cantidad), 30, 30, 745, 75);


    // DIÁLOGO DEL OTRO PERSONAJE
    // Empieza cuando la Micha termina
    if (cantidad >= textoActual.length) {

        if (cantidad1 < textoActual1.length &&
            millis() - ultimoCaracter1 > velocidad) {

            cantidad1++;
            ultimoCaracter1 = millis();
        }

        // Segundo cuadro de diálogo
        rectMode(CORNER);
        fill(0, 100);
        stroke(255);
        rect(15, 340, 775, 100, 20);

        // Texto del otro personaje
        fill(255);
        noStroke();
        text(textoActual1.substring(0, cantidad1),
            30, 350, 745, 75);
    }
}



function michaAcusaMal(posx1, posy1, posx2, posy2, posx3, posy3, posx4, posy4) {

    // Cada personaje tiene su propio texto
    textoActual = texto[dialogo];
    textoActual1 = texto[dialogo1];
    textoActual2 = texto[dialogo2];

    imageMode(CORNER);
    image(imagen[18], posx4, posy4);

    rectMode(CORNER);
    textSize(20);
    textAlign(LEFT, TOP);

    // primer dialogo

    if (cantidad < textoActual.length &&
        millis() - ultimoCaracter > velocidad) {

        cantidad++;
        ultimoCaracter = millis();
    }

    fill(0, 150);
    stroke(255);
    rect(posx1, posy1, 150, 60, 20);

    noStroke();
    fill(255);
    text(textoActual.substring(0, cantidad),
        posx1 + 10, posy1 + 10, 130, 60);


    // segundo dialogo

    if (cantidad >= textoActual.length) {

        if (cantidad1 < textoActual1.length &&
            millis() - ultimoCaracter1 > velocidad) {

            cantidad1++;
            ultimoCaracter1 = millis();
        }

        fill(0, 150);
        stroke(255);
        rect(posx2, posy2, 150, 90, 20);

        noStroke();
        fill(255);
        text(textoActual1.substring(0, cantidad1),
            posx2 + 10, posy2 + 10, 130, 90);
    }


    // tercer dialogo

    if (cantidad1 >= textoActual1.length) {

        if (cantidad2 < textoActual2.length &&
            millis() - ultimoCaracter2 > velocidad) {

            cantidad2++;
            ultimoCaracter2 = millis();
        }

        fill(0, 150);
        stroke(255);
        rect(posx3, posy3, 120, 115, 20);

        noStroke();
        fill(255);
        text(textoActual2.substring(0, cantidad2),
            posx3 + 10, posy3 + 10, 120, 115);
    }
}


function dibujartodoslosanimales() {
    imageMode(CENTER);
    //babosa
    image(imagen[5], 570, 135)
    //sapo
    image(imagen[6], 440, 300)
    //laucha
    image(imagen[7], 280, 345)
    //murcielago
    image(imagen[3], 213, 129)
    //paloma
    image(imagen[4], 370, 120)
}

