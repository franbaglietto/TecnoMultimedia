function preload(){
fuente = loadFont('assets/CCOverbyteOffW00-Regular.ttf')
fuente2 = loadFont('assets/CCOverbyteOn.ttf');
}

function cargarHistoria() {
  for (let i = 0; i < h2; i++) {
    h[i] = loadImage("assets/historia/h0" + i + ".png"); 
  }
}
function textoC (){
  fill(20);
textSize(20);
} 
function fondo1(){
fondo = loadImage("assets/fondo1");
fondo2 = loadImage("assets/fondo2");
}
function animacio(){
for (let i = 0; i < h2; i++) {
    a[i] = loadImage("assets/movimientoDRC/Cdrc0" + i + ".png"); 
  }
}


function siguiente(){//boton siguiente
  stroke(20);
  fill(245);
rect(50,490,500,75);
fill(20);
textSize(50);
text("Reiniciar",205,540);
}
