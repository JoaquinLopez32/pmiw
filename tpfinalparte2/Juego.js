class Juego{
    constructor(){
        this.jugador = new Jugador(350,250);
        this.paloma = new Paloma(this.jugador);

        this.botonIniciar = new Boton();
        this.botonCreditos = new Boton();
        this.botonVolver = new Boton();

        this.estado = 0;

        this.contadorTiempo = millis();
        this.contadorTiempoInicio = 0;
        this.contadorTiempoFinal = 10000;

        this.fondoJuego = loadImage("data/fondoPiso.jpeg");
        this.objetivo = loadImage("data/pensionados.png");
        this.imagenPerdiste = loadImage("data/michaLlora.png");
        this.imagenGanaste = loadImage("data/michaFesteja.png");

    }

    dibujar(){
        if(this.estado === 0){
            background(0);

            textAlign(CENTER,CENTER);
            fill(255);
            textSize(20);
            text("Usá las flechas del teclado para moverte y atrapar la paloma.", 390,100);
            text("¡Rápido, antes de que se termine el tiempo y se escape!", 380,130);

            this.botonIniciar.dibujar(350,250,"Iniciar");
            this.botonCreditos.dibujar(350,300,"Créditos");            

        }else if(this.estado === 2){
            background(0);

            textAlign(CENTER,CENTER);
            fill(255);
            textSize(20);
            text("Créditos", 390,100);
            text("Joaquin Lopez Bravo (legajo)", 400,130);

            this.botonVolver.dibujar(350,300,"Volver");

        }else if(this.estado === 1){
            this.dibujarJuego();

        }else if(this.estado === 3){
            image(this.fondoJuego,0,0,800,450);

            textAlign(CENTER,CENTER);
            fill(255);
            textSize(20);
            text("Perdiste :(", 390,100);

            image(this.imagenPerdiste,300,150,200,210);
            this.botonVolver.dibujar(350,390,"Volver");
        }else if(this.estado === 4){
            image(this.fondoJuego,0,0,800,450);

            textAlign(CENTER,CENTER);
            fill(255);
            textSize(20);
            text("Ganaste :D", 390,100);

            image(this.imagenGanaste,300,150,200,210);
            this.botonVolver.dibujar(350,390,"Volver");
        }
            
    }

    dibujarJuego(){
        image(this.fondoJuego,0,0,800,450);
        image(this.objetivo,600,230,200,250);

        this.contadorTiempo = millis() - this.contadorTiempoInicio;

        fill(255);
        text("Tiempo: " + (int((this.contadorTiempoFinal - this.contadorTiempo) / 1000)), 400,10);

        this.jugador.dibujar();
        this.paloma.dibujar();

        this.comprobarColision();

        if(this.contadorTiempo >= this.contadorTiempoFinal){
            this.estado = 3;
        }

        if(dist(this.jugador.posX+40,this.jugador.posY+30,700,355)<70 && this.paloma.huyendo === false){
            this.estado = 4; 
        }
    }

    comprobarColision(){
        this.distancia = dist(this.jugador.posX+40,this.jugador.posY+30,this.paloma.posX+25,this.paloma.posY+30);
        if(this.distancia<30 && this.paloma.huyendo === true){
            this.paloma.huyendo = false;
        }
    }
    

    inputTeclado(keyCode){
        this.jugador.moverConTeclado(keyCode);
    }

    inputMouse(mouseX, mouseY){
        if(this.estado === 0){
            if(this.botonIniciar.comprobarClick(mouseX,mouseY)){
                this.jugador.posX = 350;
                this.jugador.posY = 200;
                this.paloma.posX = 0;
                this.paloma.posY = 0;

                this.riniciarContadores();
                this.paloma.huyendo =true;
                this.estado = 1;
            }else if(this.botonCreditos.comprobarClick(mouseX,mouseY)){
                this.estado = 2;
            }
            
        }else if(this.estado === 2){
            if(this.botonVolver.comprobarClick(mouseX,mouseY)){
                this.estado = 0;
            }
        }else if(this.estado === 1){
            if(this.botonReiniciar.comprobarClick(mouseX,mouseY)){
                this.estado = 0;
            }
        }else if(this.estado === 3 || this.estado === 4){
            if(this.botonVolver.comprobarClick(mouseX,mouseY)){
                this.estado = 0;
            }
        }
    }

    riniciarContadores(){
        this.contadorTiempo = 0;
        this.contadorTiempoInicio = millis();
    }
}
