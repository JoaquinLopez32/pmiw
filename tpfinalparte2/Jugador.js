class Jugador{
    constructor(posX,posY){
        this.imagen = loadImage("data/micha.png");
        this.posX = posX;
        this.posY = posY;
        this.velocidad = 20;
    }

    dibujar(){
        image(this.imagen,this.posX,this.posY,80,90);
    }

    moverConTeclado(keyCode){
        if(keyCode === LEFT_ARROW){
            this.movimientoIzquierda();
        }else if(keyCode === RIGHT_ARROW){
            this.movimientoDerecha();
        }else if(keyCode === UP_ARROW){
            this.movimientoArriba();
        }else if(keyCode === DOWN_ARROW){
            this.movimientoAbajo();
        }
    }

    movimientoIzquierda(){
        if(this.posX > 0){
            this.posX -= this.velocidad;
        }
    }

    movimientoDerecha(){
        if(this.posX < 800-80){
            this.posX += this.velocidad;
        }
    }

    movimientoArriba(){
        if(this.posY > 0){
            this.posY -= this.velocidad;
        }
    }

    movimientoAbajo(){
        if(this.posY < 450-90){
            this.posY += this.velocidad;
        }
    }

}
