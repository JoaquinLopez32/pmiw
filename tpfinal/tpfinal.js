var imagen = [];
var texto = [];

function preload(){
imagen [0] = loadImage("data/fondo1.png");
imagen [1] = loadImage("data/micha.png");
imagen [2] = loadImage("data/fondo2.png");
imagen [3] = loadImage("data/murcielago.png");
imagen [4] = loadImage("data/paloma.png");
imagen [5] = loadImage("data/babosa.png");
imagen [6] = loadImage("data/sapo.png");
imagen [7] = loadImage("data/laucha.png");
imagen [8] = loadImage("data/fondoMurcielago.png");
imagen [9] = loadImage("data/murcielago2.png");
imagen [10] = loadImage("data/fondoPaloma.png");
imagen [11] = loadImage("data/paloma2.png");
imagen [12] = loadImage("data/fondoBabosa.png");
imagen [13] = loadImage("data/babosa2.png");
imagen [14] = loadImage("data/fondoSapo.png");
imagen [15] = loadImage("data/sapo2.png");
imagen [16] = loadImage("data/fondoLaucha.png");
imagen [17] = loadImage("data/laucha2.png");
imagen [18] = loadImage("data/michaAcusa.png");
imagen [19] = loadImage("data/michaLlora.png");
imagen [20] = loadImage("data/michaFesteja.png");
imagen [21] = loadImage("data/pensionados.png");

//-------------------------------------------//

texto [0] = "OH NOO!, uno de estos animales saqueó mi cofre y me dejó sin comida. Me quedan 10 min antes de que el ultimo humano abandone la casa, y si no descubro quien fue, los humanos me van culpar a mi. No lo puedo permitir. Tengo tiempo solo para preguntarle a 3 bestias"; 

texto [1] ="Uno de estos 5 fue... Pero quiennnn...";
texto [2] ="FUISTE VOSSSSSSSSSSSSSSSSSS!?"; //repite//
texto [3] ="Naaaaa nada que ver mostro";
texto [4] ="Eeeeeeeee no ni idea";
texto [5] ="No chabon no se nada yo";
texto [6] ="que? que yo hice que?";
texto [7] ="guatafac nada que ver chabon";
texto [8] ="Tengo que ya mismo agarrar al culpable, y creo que ya se quien fue...";
texto [9] ="TE AGARRÉ FUISTE VOS CHABÓN"; //repite//
texto [10] ="No flaco la posta que no fui yo";
texto [11] ="Es verdad, anduvo con migo toda la mañana";
texto [12] ="Bueno si, me atrapaste, perdón chabon";
texto [13] ="Te iba a decir pero queria ver que pasaba";
texto [14] ="Despues de no haber encontrado a un responsable, la micha calló en un castigo sebero, sin premios, y la mitad de su racion de comida, porque quedó marcada como angurrienta";
texto [15] ="Despues de encontrar al resposable, lo entregó, y convencion a los humanos de que guarden mejor su alimento, y le dieron premios por resolverlo solita ";

}

//-------------------------------------------//


function setup(){
createCanvas(800, 450);
    
}

function draw(){
image(imagen [0],0,0);
ellipse(mouseX, mouseY, 100, 100);

}