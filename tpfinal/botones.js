class byf {
  constructor() {
    this.t=0;
    this.drc=50;
    this.izq=390;
    this.down=500;
    
  }
//BOTONES
//mostrar boton 1
mostrarBU(o1){
  fill(255);  
  rect(this.drc,this.izq,this.down,75);
  fill(20);
textSize(40);
text(""+o1,200,440);
}
//mostrar 2 botones
mostrarB2(o1,o2){
  stroke(20);
  fill(240);
rect(310,490,250,75);
rect(25,490,250,75);
textSize(18);
fill(16);
textSize(15)
text(""+o1, 314, 530);
text(""+o2, 30, 530);
}

//mostrar 3 botones
//Circulos
mostrarC(o1,o2,o3,t1,t2,t3){
  textSize(18);
  fill(255);
  text(""+t1, 250, 417);
    text(""+t2, 90, 417);
    text(""+t3, 420, 417);
    circle(150, 500, 100);
    circle(300, 500, 100);
    circle(450, 500, 100);
    fill(20);
    textSize(50);
    text(""+o1, 132, 515);
    text(""+o2, 287, 515);
    text(""+o3, 434, 515);
}
//botonMenu
menuB(){
  textSize(50);
  rect(150, 200, 300, 60);
  fill(20);
  text("Jugar", 240, 245);
  fill(255);
  rect(150, 300, 300, 60);
  fill(20);
  text("Creditos", 210, 345);
  fill(255);
}
flautistaImagen(i){
 image(imagenes[i], 0, 0);
}
texto(t){
  fill(255);
  textSize(18);
 text(textos[t], 10, height / 2, 570, 170);
}
}
