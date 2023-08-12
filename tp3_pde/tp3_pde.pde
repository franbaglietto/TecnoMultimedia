

  int g;
  int num;

void setup() {
  size(800,400); // Define el tamaño de la ventana
  background(255); // Establece el color de fondo en blanco
  noLoop(); // Detiene la actualización automática del lienzo
}

void draw() {

  int g = 20; // Tamaño de la cuadrícula
  int num = width / g; // Número de cuadrados en cada fila y columna
  
  // Dibuja la cuadrícula de patrón
  for (int i = 0; i < num; i++) {
    for (int j = 0; j < num; j++) {
      int x = i * g; // Coordenada x del cuadrado actual
      int y = j * g; // Coordenada y del cuadrado actual
      
      // Determina si el cuadrado debe ser negro o blanco según su posición
      if ((i + j) % 2 == 0) {
        fill(0); // Cuadrado negro
      } else {
        fill(255); // Cuadrado blanco
      }
      
      rect(x, y,g,g); // Dibuja el cuadrado en la posición correspondiente
      circulo();
    }
  }
}

void circulo(){
  noStroke();
  fill(190,190,190,18);
circle(600,200,250);
};
