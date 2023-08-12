//video:https://youtu.be/ix-X0JPa7mk
PImage img;
int tam=20;
int vel=1 ;
int a=5 ;
float hmouse=0;
float h = 0;
boolean mouseActivo = false;

void setup() {
  size(800, 400);
  img = loadImage("rectangulos.jpg");
}

void draw() {
  image(img, 0, 0);

  // Config rectangulos
  strokeWeight(11);
  rectMode(CENTER);

  // for principal
  for (int i = 0; i < 4; i++) {
    push();
    if (i == 1) {
      translate(700, 100);
    } else if (i == 2) {
      translate(500, 300);
    } else if (i == 3) {
      translate(700, 300);
    } else {
      translate(500, 100);
    }


    // for de los rectángulos
    for (int t = 190; t > 0; t -= tam) {

      // color
      float Distrect = dist(0, 0, t, t);
      h = map(Distrect, 0, 190, 235, 50 );

      //Calcular tono en base al mouse
      hmouse=map(mouseY, 0, height, 0, 255);
      if (esClicDerecho()) {
        h-=hmouse;
      }
      coloR(i, int(h));
      // rectángulo
      rect(0, 0, t, t);
    }
    pop();
  }
}
void keyPressed() {
  if (keyCode == UP) {
    //mas cuadrados
    if (tam>1) {
      tam-=1;
    }
    if (tam>15) {
      tam-=vel;
    }
  }

  //menos cuadrados
  if (keyCode == DOWN) {
    tam+=vel;
  }
  //aumentar velocidad
  if (tam==30) {
    vel+=a;
  }

  //reiniciar
  if (key == 'R' || key == 'r') {
    tam=20;
    mouseActivo =false;
  }
}
