class Piedras {
  constructor() {
    this.piedras = 5;
    this.piedraImg = loadImage('assets/piedra.png');
    this.tam = 50;
    this.piedrasY = [];

    for (let i = 0; i < this.piedras; i++) {
      this.piedrasY[i] = random(height); // Inicializa las posiciones de las piedras de forma aleatoria
    }
  }

  piedrasCayendo() {
    for (let i = 0; i < this.piedras; i++) {
      image(this.piedraImg, i * 100 + 30, this.piedrasY[i]);
      this.piedrasY[i] += 1;

      // Reinicia la posición cuando una piedra se sale de la pantalla
      if (this.piedrasY[i] > height) {
        this.piedrasY[i] = -15;
      }
    }
  }

colision(personaje) {
  const personajeCoordenadas = personaje.obtenerCoordenadas();
  for (let i = 0; i < this.piedras; i++) {
    const piedraX = 60 * i + 30;
    const piedraY = this.piedrasY[i];

    const distanciaX = abs(personajeCoordenadas.x - piedraX);
    const distanciaY = abs(personajeCoordenadas.y - piedraY);

    const distanciaColisionX = (personajeCoordenadas.ancho + this.tam) / 2;
    const distanciaColisionY = (personajeCoordenadas.alto + this.tam) / 2;

    // Amplía el rango de detección vertical
    // Puedes ajustar el valor 30 según tus necesidades
    if (distanciaX < distanciaColisionX && distanciaY < (distanciaColisionY + 40)) {
      // Reinicia la posición de la piedra
      this.piedrasY[i] = -15;
      return true; // Hay colisión
    }
  }
  return false; // No hay colisión
}
}
