class Boton{
    constructor(){
        this.colorTexto = color(255,255,255);
        this.colorIdle = color(100,100,100);
        this.colorHover = color(200,200,200);

        this.ancho = 100;
        this.alto = 40;

        this.posX = 0;
        this.posY = 0;

    }

    dibujar(posicionX,posicionY,texto){
        this.posX = posicionX;
        this.posY = posicionY;

        this.hover = this.comprobarClick(mouseX,mouseY);

        
        if(this.hover){
            fill(this.colorHover);
        }else{
            fill(this.colorIdle);
        }
        push();
        rect(this.posX,this.posY,this.ancho,this.alto);
        fill(255);
        textAlign(CENTER,CENTER);
        textSize(18);
        text(texto, this.posX+(this.ancho/2), this.posY+(this.alto/2));
        pop();

    }

    comprobarClick(mouseX,mouseY){
        if (mouseX > this.posX && mouseX < this.posX+this.ancho && mouseY > this.posY && mouseY < this.posY+this.alto) {
            return true;
        } else {
            return false;
        }
    }

}