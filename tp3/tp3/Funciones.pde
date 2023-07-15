void siguiente(){//boton siguiente
  stroke(20);
  fill(245);
rect(50,490,500,75);
fill(20);
textSize(50);
text("Siguiente",205,540);
}

void dosB(){//dos botones
   stroke(20);
   fill(240);
rect(25,490,250,75);
}

void dosB2(){//dos botones parte 2
 stroke(20);
   fill(240);
rect(310,490,250,75);
}

void finales(){//finales
  fill(255);
textSize(50);
text("Final de la aventura",100,100);
textSize(18);
}
void texto (){//acomodar texto
textSize(18);
fill(255);
}

void titulo(){
textSize(50);
fill(255);
}

void cirB(){
 for (int i = 150; i <= 450; i += 150) {
    circle(i, 550, 100);
  }
}
void menu(){
stroke(20);
  fill(245);
rect(50,490,500,75);
fill(20);
textSize(50);
text("Volver al menu",150,540);
}
boolean dentroDecircB( int x, int y, int r ){
  return dist(mouseX, mouseY, x, y) <= r; 
}
