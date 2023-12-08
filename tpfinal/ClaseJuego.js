class ClaseJuego {

   constructor() {
    this.pantalla = 0;
    this.b = new byf();
   this.fondo = loadImage('assets/mini/cueva00.png');
   this.fuente= loadFont('assets/CCOverbyteOn.ttf');
   this.mini = new mini();
  }
   
PantallaEstados(){
switch(this.pantalla){
  //Pantalla de inicio
 case 0:
 textFont(this.fuente);
 this.b.flautistaImagen(0);
  this.b.menuB();
 break;

case 1:
   this.b.flautistaImagen(1);
  this.b.mostrarBU("Siguiente");
  this.b.texto(0);
break;

case 2:
  this.b.flautistaImagen(1);
  this.b.mostrarB2("Escuchar al hombre misterioso","Prender fuego las ratas");
  this.b.texto(1);
break;
//final 1
case 3:
  this.b.flautistaImagen(3);
  this.b.mostrarBU("Volver al menu");
  this.b.texto(2);
break;

case 4:
  this.b.flautistaImagen(2);
  this.b.mostrarB2("Aceptar la oferta","Rechazar la oferta");
  this.b.texto(5);
break;

case 5:
  this.b.flautistaImagen(6);
  this.b.mostrarBU("Siguiente");
  this.b.texto(7);
break;
//tres caminos 1
case 6:
  this.b.flautistaImagen(7);
  this.b.mostrarC("A","B","C","Pagar y \n no aceptarlo","No pagar y \n no aceptarlo","Pagar y \n aceptarlo");
  this.b.texto(9);
break;

case 7:
  this.b.flautistaImagen(12);
  this.b.mostrarBU("Siguiente");
  this.b.texto(14);
break;
//bucle 
case 8:
  this.b.flautistaImagen(9);
  this.b.mostrarBU("Siguiente")
  this.b.texto(11);
break;
//final3
case 9:
  
  this.b.flautistaImagen(8);
  this.b.mostrarBU("Volver al menu");
  this.b.texto(13);
break;
//bucle 2
case 10:
  this.b.flautistaImagen(10);
  this.b.mostrarB2("Darle mas dinero","Mandar al pueblo a enferentarlo");
  this.b.texto(19);
break;
//final 4
case 11:
 this.b.flautistaImagen(11);
  this.b.mostrarBU("Volver al menu");
  this.b.texto(12);
break;
//Aca sigue la historia, no pagar ni aceptar
case 12:
  this.b.flautistaImagen(13);
  this.b.mostrarC("A","B","C","Seguir al \n flautista","Hacer bailes \n del fortnite","Hablar con \n el flautista")
  this.b.texto(9);
break;
//final 5
case 13://fortnite
  this.b.flautistaImagen(18);
  this.b.mostrarBU("Volver al menu");
  this.b.texto(20);
break;
//seguir al falutista
case 14:
this.b.flautistaImagen(14);
  this.b.mostrarB2("Seguirlo","volver al pueblo");
  this.b.texto(15);
break;
//hablar con el
case 15: 
  this.b.flautistaImagen(14);
  this.b.mostrarBU("Siguiente");
  this.b.texto(15);
  text(this.pantalla,300,300);
break;
//mini juego
case 16:
  this.b.flautistaImagen(14);
  this.b.mostrarBU("Jugar")
  this.b.texto(17);
break;

//meter al minijuego
case 17:
image(this.fondo, 0, 0);
this.mini.actualizarM(this);
////termina mini
  break;

//perder y reiniciar
case 18:
this.b.flautistaImagen(16);
this.b.texto(9);
this.b.mostrarBU("Volver a intentar");
break;
//Creditos
case 19:
this.b.flautistaImagen(19);
fill(255,0,0);
text("Hecho y programado por \n Baglietto Francisco y \n Ansin Facundo",100,200);
this.b.mostrarBU("Volver al menu");
break;
//volver al pueblo final 7
case 20:
  this.b.flautistaImagen(17);
  this.b.mostrarBU("Volver al menu");
  this.b.texto(18);
break;
//Final bueno
case 21:
background(20);
  this.b.flautistaImagen(7);
  this.b.mostrarBU("Voler al menu");
  this.b.texto(5);
break;
case 22:
this.b.flautistaImagen(5);
this.b.texto(6);
this.b.mostrarBU("Volver al menu");
break;
}
}


///eventos de mouse o teclado
botonUno(mx,my){
  //1 solo boton
  if(this.pantalla==1 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=2;
  }
  else if (this.pantalla==3 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=0;
  }
  else if (this.pantalla==5 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=6;
  }
  else if (this.pantalla==8 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=10;
  }
  else if (this.pantalla==9 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=0;
  }
  else if (this.pantalla==7 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=12;
  }
  else if (this.pantalla==16 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=17;
  }
  else if (this.pantalla==20 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=0;
  }
  else if (this.pantalla==18 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=16;
  }
  else if (this.pantalla==11 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=0;
  }
   else if (this.pantalla==21 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=0;
  }
   else if (this.pantalla==22 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=0;
  }
   else if (this.pantalla==13 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=0;
  }
  else if (this.pantalla==15 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=9;
  }
  else if (this.pantalla==19 && mx>50 && mx<550 && my>390 && my<450){ 
    this.pantalla=0;
  }
}
//menu
menu(mx,my){
  if(this.pantalla==0 && mx>150 && mx<450 && my>200 && my<250){ 
    this.pantalla=1;
}
else if (this.pantalla==0 && mx>150 && mx<450 && my>301 && my<357){
  this.pantalla=19;
}
}
//2 botones
//izq
botonDos1(mx, my) {
  if (this.pantalla == 2 && mx > 25 && mx < 273 && my > 490 && my < 564) {
    this.pantalla = 3;
  }
  else if (this.pantalla == 4 && mx > 25 && mx < 273 && my > 490 && my < 564) {
    this.pantalla = 22;
  }
  else if (this.pantalla == 10 && mx > 25 && mx < 273 && my > 490 && my < 564) {
    this.pantalla = 11;
  }
  else if (this.pantalla == 14 && mx > 25 && mx < 273 && my > 490 && my < 564) {
    //volver al pueblo
    this.pantalla = 20;
  }
}
//drc
botonDos2(mx,my){
  if(this.pantalla==2 && mx>311 && mx<558 && my>490 && my<564){
    this.pantalla=4;
  }
  else if(this.pantalla==4 && mx>311 && mx<558 && my>490 && my<564){
    this.pantalla=5;
  }
  else if(this.pantalla==10 && mx>311 && mx<558 && my>490 && my<564){
    this.pantalla=8;
  }
  else if(this.pantalla==14 && mx>311 && mx<558 && my>490 && my<564){
    this.pantalla=16;
  }
}

//botones circulares
botonTres(mx,my){
  if(this.pantalla==6 && dist(mx,my,150,500)<=50){
    this.pantalla=7;
  }
  else if(this.pantalla==6 && dist(mx,my,300,500)<=50){
    this.pantalla=8;
  }
  else if(this.pantalla==6 && dist(mx,my,450,500)<=50){
    this.pantalla=9;
  }
  //Segunda vez que lo llamo

  if(this.pantalla==12 && dist(mx,my,150,500)<=50){
    this.pantalla=13;
  }
  else if(this.pantalla==12 && dist(mx,my,300,500)<=50){
    this.pantalla=14;
  }
  else if(this.pantalla==12 && dist(mx,my,450,500)<=50){
    this.pantalla=15;
  }
}
//TECLAS
teclas() {
  this.mini.p.moverPersonaje(keyCode, LEFT_ARROW, RIGHT_ARROW);
}

////final de la clase
}
