class Paloma{
    constructor(player){
        this.imagen = loadImage("data/paloma.png");
        this.posX = 0;
        this.posY = 0;
        this.velocidad = 30;
        this.huyendo = true;

        this.jugador = player;
    }

    dibujar(){
        image(this.imagen, this.posX, this.posY,50,60)
        
        this.actualizarPosicion();
    }

    actualizarPosicion(){
        if(this.huyendo){
            this.direccion = int(random(0,4))

            if(this.direccion === 0){
                this.movimientoIzquierda();
            }else if(this.direccion === 1){
                this.movimientoDerecha();
            }else if(this.direccion === 2){
                this.movimientoArriba();
            }else if(this.direccion === 3){
                this.movimientoAbajo();
            }
        }else{
            this.posX = this.jugador.posX;
            this.posY = this.jugador.posY;
        }
        
    }

    movimientoIzquierda(){
        if(this.posX > 0){
            this.posX -= this.velocidad;
        }
    }

    movimientoDerecha(){
        if(this.posX < 800-50){
            this.posX += this.velocidad;
        }
    }

    movimientoArriba(){
        if(this.posY > 0){
            this.posY -= this.velocidad;
        }
    }

    movimientoAbajo(){
        if(this.posY < 450-60){
            this.posY += this.velocidad;
        }
    }

}