class  Piedras{
  constructor() {
    this.piedras = 5;
    this.piedraImg = loadImage('assets/mini/piedra.png');
    this.tam = 50;
    this.piedrasY = [];
    for (let i = 0; i < this.piedras; i++) {
      this.piedrasY[i] = random(height); // Inicializa las posiciones de las piedras de forma aleatoria
    }
  }

  piedrasCayendo() {
    for (let i = 0; i < this.piedras; i++) {
      image(this.piedraImg, i * 100 + 30, this.piedrasY[i]);
      this.piedrasY[i] += 1;//velocidad

      // Reinicia la posición cuando una piedra se sale de la pantalla
      if (this.piedrasY[i] > height) {
        this.piedrasY[i] = -15;
      }
    }
  }


 colision(personaje) {
    const personajeCoordenadas = personaje.obtenerCoordenadas();

    for (let i = 0; i < this.piedras; i++) {
      const piedraX = i * 100 + 30;
      const piedraY = this.piedrasY[i] + 25; // Ajuste para centrar la piedra

      const distanciaX = abs(personajeCoordenadas.x - piedraX);
      const distanciaY = abs(personajeCoordenadas.y - piedraY);

      const distanciaColisionX = (personajeCoordenadas.ancho + this.tam) / 2;
      const distanciaColisionY = (personajeCoordenadas.alto + this.tam) / 2;

      if (distanciaX < distanciaColisionX && distanciaY < distanciaColisionY) {
        this.piedrasY[i] = -15;
        return true; // Hay colisión
      }
    }

    return false; // No hay colisión
  }
}
