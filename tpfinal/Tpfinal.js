let c;
let imagenes = [];
let textos=[];


function setup() {
  c = new ClaseJuego();
  createCanvas(600, 600);
  for(let i = 0; i < 20; i++){
    let nombreImagen = 'assets/imagenes/flautista' + i + '.jpg';// carga de imagenes y textos
    imagenes[i] = loadImage(nombreImagen);
}
textos = loadStrings('assets/textos.txt');
}


function draw() {
  c.PantallaEstados();//clase juego, pantallas
}
function mousePressed(){//botones
c.menu(mouseX,mouseY);
c.botonUno(mouseX,mouseY);
c.botonDos1(mouseX,mouseY);
c.botonDos2(mouseX,mouseY);
c.botonTres(mouseX,mouseY);
}
function keyPressed(){
c.teclas();//movimiento del personaje
}
