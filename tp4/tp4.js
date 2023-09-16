//video:https://youtu.be/ayTxr8fGWkA
let pantalla = 0;
//contadores
let contador = 3600;
let contador2 = 800;
let puntos = 0;
let menu;
//recursos vicuales
let fuente;
let fuente2;
let fondo;
let fondo2;
let fondoX = 0;
let personaje;
//historia
let h = [];
let h2 = 3;
let hp1 = 0;
let b=0;
//tomates cayendo
let Yp = [];
//animacion del personaje
let moverY=400;
let mover=300;
let personajeBox = {
  x: mover,
  y: moverY,
  ancho:200,
  alto:200,
  }



function setup() {
  createCanvas(600, 600);
  frameRate(60);
  personaje = loadImage('assets/personaje.png');
  menu = loadImage('assets/inicio4.png');
  fondo = loadImage('assets/fondo1.png');
  fondo2 = loadImage('assets/fondo2.png');
  cargarHistoria();

  for (let i = 0; i < 10; i++) {
    Yp.push(random(height));
  }
}

function draw() {
  switch (pantalla) {
    //menu
  case 0:
    image(menu, 0, 0);
    textFont(fuente);
    textSize(33);
    fill(210)
      text('Jugar', 30, 270);
    text('Creditos', 20, 330)
      break;
    //primera pantalla de la historia
  case 1:
    image(h[hp1], 0, 0);
    if (frameCount % 80 == 0 && hp1 < h2 - 1) {
      hp1++;
    }
    fill(240);
    rect(50, 80, 520, 130);
    fill(20);
    textSize(20);
    text('Tu eres Juan, Juan es un vendedor de tomates en la ruta. Todo venia bien hasta que te das cuenta de que tu carrito con tomates no esta, y ves a un gigante escapando con el. Ahi decides ir tras el agarrando todos los tomates que puedas.', 70, 100, 500);
    if (contador2 <= 800) {
      contador2--;
      if (contador2 == 0) {
        pantalla = 2;
      }
    }
    break;
    //pantalla de juego
  case 2:
    background(0, 200, 200);
    image(fondo, fondoX, 0);
    image(fondo2, fondoX + width, 0);
    fondoX--;
    if (fondoX <= -width) {
      fondoX = 0;
    }

    // Actualiza el rectángulo de colisión del personaje
    personajeBox.x = mover;
    personajeBox.y = 400;
    //contador
    if (contador <= 3600) {
      contador--;
      if (contador == 0 && puntos>=75) {
        pantalla = 4;
      }
      if (contador == 0 && puntos<=75) {
        pantalla =3;
      }
    }
    fill(220);
    textSize(50);
    let minutos = floor(contador / 60);
    let segundos = contador % 60;
    textFont(fuente2);
    text(minutos + ":" + nf(segundos, 2), 250, 100);
    text("puntos:"+ puntos, 200, 150);
    //mecanica de los tomates cayendo
    fill(200, 0, 0);


    // Mecánica de los tomates rojos
    fill(200, 0, 0);
    for (let i = 0; i < 7; i++) {
      let distancia = dist(i * 60 + 30, Yp[i], personajeBox.x + personajeBox.ancho / 2, personajeBox.y + personajeBox.alto / 2);
      let radioTomate = 15; // Radio de los tomates rojos
      let radioPersonaje = 100; // Radio de colisión del personaje

      if (distancia < radioTomate + radioPersonaje) {
        // Colisión con el tomate rojo
        puntos++;
        Yp[i] = -15;
      }

      circle(i * 60 + 30, Yp[i], 30);
      Yp[i] += 2;
      if (Yp[i] > height + 15) {
        Yp[i] = -15;
      }
    }
    image(personaje, personajeBox.x, personajeBox.y)
      break;

    //pantalla de que perdiste
  case 3:
    background(242, 10, 65);
    textFont(fuente2);
    fill(220);
    textSize(100);
    fill(20);
    text('Perdiste', 200, 250);
    siguiente();
    contador=3600;
    contador2=800;
    break;
    //pantalla de ganaste
  case 4:
    background(98, 227, 48);
    textFont(fuente2);
    fill(220);
    textSize(100);
    fill(20);
    text('Ganaste', 100, 250);
    siguiente();
    contador=3600;
    contador2=800;
    break;
  }
}

function mousePressed() {
  if (pantalla == 0 && mouseX > 30 && mouseX < 130 && mouseY > 240 && mouseY < 280) {
    pantalla = 1;
  }
  if (pantalla==3 && mouseX>50 && mouseX<550 && mouseY>490 && mouseY<560) {  //boton siguiente
    pantalla=0;
  }
  if (pantalla==4 && mouseX>50 && mouseX<550 && mouseY>490 && mouseY<560) {  //boton siguiente
    pantalla=0;
  }
}

function keyPressed() {
  if (keyCode=== LEFT_ARROW && mover>=0) {
    mover-=20;
  }
  if (keyCode=== RIGHT_ARROW && mover<=width) {
    mover+=20;
  }
}
