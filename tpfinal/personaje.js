class Personaje{
constructor(){
this.personaje= loadImage('assets/mini/personaje.png');
this.personajeY=420;
this.personajeX=300;
this.ancho=135;
this.alto=135;
}


dibujarPersonaje(){
image(this.personaje,this.personajeX,this.personajeY);
}


moverPersonaje(tecla,moverIZQ,moverDRC){
if(tecla==moverIZQ){
  this.personajeX-=20;
}
if(tecla==moverDRC){
  this.personajeX+=20;
}
}

 obtenerCoordenadas() {
    return {
      x: this.personajeX,
      y: this.personajeY,
      ancho: this.ancho, // Asume que la imagen del personaje está cargada
      alto: this.alto,
    };
  }
//termina aca
}
