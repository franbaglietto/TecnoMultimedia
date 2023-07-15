//Resolución de 600x600----Listo----
//Al menos 1 función propia con parámetros (al menos 1) que NO retorna un valor----Listo----
//Al menos 1 función propia con parámetros (al menos 1) que RETORNA un valor----Listo----
//Condicionales (if - else).----Listo----
//Ciclos FOR----Listo----
//Manejo de arreglos----Listo----
//Eventos (mouse y/o teclado): modificación de variables.----Listo----
//Algunas funciones matemáticas: dist(), map(), random();----Listo----
color fondo;
int pantalla;
int t;
int f=20;
String [] textos = new String[t];
PImage [] flautista = new PImage[f];

void setup() {
  size(600, 600);
  pantalla=0;
  fondo=150;
  t=20;
  textos = loadStrings("textos.txt");
  for ( int i = 0; i < f; i++ ) {
    flautista[i] = loadImage( "imagenes/flautista" + i + ".jpg" );
  }
}
void draw() {
  switch(pantalla) {
  case 0:
    background(fondo);
    image( flautista[0], 0, 0 );
    textSize(50);
    text("Bienvenido al Menu", 100, 100);
    rect(150, 200, 300, 60);
    fill(20);
    text("Jugar", 240, 245);
    fill(255);
    rect(150, 300, 300, 60);
    fill(20);
    text("Creditos", 210, 345);
    fill(255);
    break;

  case 1:
    fondo=255;
    image( flautista[1], 0, 0 );
    texto();
    text(textos[0], CENTER, 350, 570, 170);
    siguiente();
    break;

  case 2:
    image( flautista[1], 0, 0 );
    dosB();
    dosB2();
    fill(255);
    textSize(50);
    text(textos[1], CENTER, TOP, 570, 170);
    fill(20);
    textSize(18);
    text("Prender fuego las ratas", 314, 530);
    text("Escuchar al hombre misterioso", 30, 530);
    println(mouseX, mouseY);
    break;

  case 3:
    image( flautista[2], 0, 0 );
    fill(255);
    textSize(50);
    text(textos[5], CENTER, TOP, 570, 170);//que decides hacer
    textSize(18);
    text(textos[4], CENTER, 350, 570, 170);
    dosB();
    dosB2();
    fill(20);
    text("Rechazar la oferta", 314, 530);
    text("Aceptar la oferta", 30, 530);
    break;

  case 4://final 1
    image( flautista[5], 0, 0 );
    fill(255);
    textSize(18);
    text(textos[2], CENTER, 350, 570, 170);
    finales();
    menu();
    break;

  case 5:
    image( flautista[6], 0, 0 );
    texto();
    text(textos[7], CENTER, 350, 570, 170);
    siguiente();
    break;

  case 6://final2
    image( flautista[5], 0, 0 );
    finales();
    text(textos[6], CENTER, 350, 570, 170);
    menu();
    break;

  case 7:
    image( flautista[7], 0, 0 );
    titulo();
    text(textos[9], CENTER, TOP, 570, 170);//que decides hacer
    cirB();
    texto();
    text(textos[8], CENTER, 350, 570, 170);
    text("Pagar y \n no aceptarlo", 250, 450);
    text("No pagar y \n no aceptarlo", 90, 450);
    text("Pagar y \n aceptarlo", 420, 450);
    fill(20);
    textSize(50);
    text("A", 135, 560);
    text("B", 289, 560);
    text("C", 436, 560);
    println(mouseX, mouseY);
    break;

  case 8://Historia principal
    image( flautista[12], 0, 0 );
    texto();
    text(textos[14], CENTER, 350, 570, 170);
    siguiente();

    break;

  case 9://interesado
    image( flautista[9], 0, 0 );
    texto();
    text(textos[11], CENTER, 350, 570, 170);
    siguiente();
    break;

  case 10://final feliz
    image( flautista[8], 0, 0 );
    finales();
    texto();
    text(textos[13], CENTER, 350, 570, 170);
    menu();
    break;

  case 11:
    image( flautista[10], 0, 0 );
    titulo();
    text(textos[9], CENTER, TOP, 570, 170);
    texto();
    text(textos[19], CENTER, 350, 570, 170);
    dosB();
    dosB2();
    fill(20);
    text("Mandar al pueblo a confrontarlo", 314, 530);
    text("Darle mas dinero", 30, 530);
    break;

  case 12:
    image( flautista[11], 0, 0 );
    finales();
    texto();
    stroke(20);
    text(textos[12], CENTER, 450, 570, 170);
    menu();
    break;

  case 13:
    image( flautista[13], 0, 0 );
    titulo();
    text(textos[9], CENTER, TOP, 570, 170);
    fill(20);
    cirB();
    texto();
    text(textos[13], 25, 350, 570, 170);
    text("hacer bailes \n del fortnite", 250, 450);
    text("seguir al \n flautista", 90, 450);
    text("Hablar con \n el flautista", 420, 450);
    fill(255);
    textSize(50);
    text("A", 135, 560);
    text("B", 289, 560);
    text("C", 436, 560);
    break;

  case 14://historia principal
    image( flautista[13], 0, 0 );
    fill(20);
    titulo();
    text(textos[9], CENTER, TOP, 570, 170);
    dosB();
    dosB2();
    texto();
    fill(255);
    text(textos[16], CENTER, 350, 570, 170);
    fill(20);
    text("volver al pueblo", 314, 530);
    text("Seguirlo", 30, 530);
    break;

  case 15:
    image( flautista[18], 0, 0 );
    finales();
    texto();
    text(textos[20], CENTER, 350, 570, 170);
    menu();
    break;

  case 16://final feliz
    image( flautista[14], 0, 0 );
    texto();
    text(textos[15], CENTER, 350, 570, 170);
    siguiente();
    break;

  case 17://seguirlo
    image( flautista[16], 0, 0 );
    finales();
    texto();
    text(textos[17], CENTER, 350, 570, 170);
    menu();
    break;

  case 18://final
    image( flautista[17], 0, 0 );
    finales();
    texto();
    text(textos[18], CENTER, 350, 570, 170);
    menu();
    break;

  case 19:
    finales();
    texto();
    text(textos[2], CENTER, 350, 570, 170);
    menu();
    break;

  case 20:
    image( flautista[3], 0, 0 );
    finales();
    texto();
    text(textos[2], CENTER, 350, 570, 170);
    menu();
    break;
  };
}



void mousePressed() {
  if (pantalla==0 && mouseX>150 && mouseX<450 && mouseY>200 && mouseY<250) {
    pantalla=1;
  } else if (pantalla==1 && mouseX>50 && mouseX<550 && mouseY>490 && mouseY<560) {  //boton siguiente
    pantalla=2;
  } else if (pantalla==2 && mouseX>25 && mouseX<273 && mouseY>490 && mouseY<564) {//dos botones
    pantalla=3;
  } else if (pantalla==3 && mouseX>311 && mouseX<558 && mouseY>490 && mouseY<564) {
    pantalla=6;
  } else if (pantalla==3 && mouseX>25 && mouseX<273 && mouseY>490 && mouseY<564) {//dos botones
    pantalla=5;
  } else if (pantalla==5 && mouseX>50 && mouseX<550 && mouseY>490 && mouseY<560) {  //boton siguiente
    pantalla=7;
  }
  //botones circulares
  else if ( pantalla==7 && dentroDecircB(150, 550, 50)) {
    pantalla=8;
  } else if ( pantalla==7 && dist(mouseX, mouseY, 300, 550)<=50) {
    pantalla=9;
  } else if ( pantalla==7 && dist(mouseX, mouseY, 450, 550)<=50) {
    pantalla=10;
  }
  //fin
  else if (pantalla==9 && mouseX>50 && mouseX<550 && mouseY>490 && mouseY<560) {  //boton siguiente
    pantalla=11;
  } else if (pantalla==11 && mouseX>25 && mouseX<273 && mouseY>490 && mouseY<564) {//dos botones
    pantalla=9;
  } else if (pantalla==11 && mouseX>311 && mouseX<558 && mouseY>490 && mouseY<564) {
    pantalla=12;
  } else if (pantalla==8 && mouseX>50 && mouseX<550 && mouseY>490 && mouseY<560) {  //boton siguiente
    pantalla=13;
  } else if ( pantalla==13 && dist(mouseX, mouseY, 150, 550)<=50) {
    pantalla=14;
  } else if ( pantalla==13 && dist(mouseX, mouseY, 300, 550)<=50) {
    pantalla=15;
  } else if ( pantalla==13 && dist(mouseX, mouseY, 450, 550)<=50) {
    pantalla=16;
  } else if (pantalla==16 && mouseX>50 && mouseX<550 && mouseY>490 && mouseY<560) {  //boton siguiente
    pantalla=10;
  } else if (pantalla==14 && mouseX>25 && mouseX<273 && mouseY>490 && mouseY<564) {//dos botones
    pantalla=17;
  } else if (pantalla==14 && mouseX>311 && mouseX<558 && mouseY>490 && mouseY<564) {
    pantalla=18;
  } else if (pantalla==2 && mouseX>311 && mouseX<558 && mouseY>490 && mouseY<564) {
    pantalla=20;
  } else if (pantalla==4 && mouseX>311 && mouseX<558 && mouseY>490 && mouseY<564) {
    pantalla=0;
  } else if (pantalla==6 && mouseX>50 && mouseX<550 && mouseY>490 && mouseY<560) {  //boton siguiente
    pantalla=0;
  } else if (pantalla==10 && mouseX>50 && mouseX<550 && mouseY>490 && mouseY<560) {  //boton siguiente
    pantalla=0;
  } else if (pantalla==17 && mouseX>50 && mouseX<550 && mouseY>490 && mouseY<560) {  //boton siguiente
    pantalla=0;
  } else if (pantalla==18 && mouseX>50 && mouseX<550 && mouseY>490 && mouseY<560) {  //boton siguiente
    pantalla=0;
  } else if (pantalla==19 && mouseX>50 && mouseX<550 && mouseY>490 && mouseY<560) {  //boton siguiente
    pantalla=0;
  } else if (pantalla==12 && mouseX>311 && mouseX<558 && mouseY>490 && mouseY<564) {
    pantalla=0;
  } else if (pantalla==15 && mouseX>50 && mouseX<550 && mouseY>490 && mouseY<560) {  //boton siguiente
    pantalla=0;
  } else if (pantalla==12 && mouseX>50 && mouseX<550 && mouseY>490 && mouseY<560) {  //boton siguiente
    pantalla=0;
  } else if (pantalla==20 && mouseX>50 && mouseX<550 && mouseY>490 && mouseY<560) {  //boton siguiente
    pantalla=0;
  }
}//final del mouse pressed
