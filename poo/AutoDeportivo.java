package poo;

// Subclase AutoDeportivo
class AutoDeportivo extends Auto {
  public AutoDeportivo(int numeroDeRuedas, String tipoDeCombustible, int velocidadMaxima, String color,
      int numeroDePuertas) {
    super(numeroDeRuedas, tipoDeCombustible, velocidadMaxima, color, numeroDePuertas);
  }

  @Override
  public void acelerar() {
    System.out.println("El auto deportivo está acelerando rápidamente.");
  }
}