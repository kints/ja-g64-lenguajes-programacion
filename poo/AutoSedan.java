package poo;

// Subclase AutoSedan
class AutoSedan extends Auto {
  public AutoSedan(int numeroDeRuedas, String tipoDeCombustible, int velocidadMaxima, String color,
      int numeroDePuertas) {
    super(numeroDeRuedas, tipoDeCombustible, velocidadMaxima, color, numeroDePuertas);
  }

  @Override
  public void acelerar() {
    System.out.println("El auto sedán está acelerando suavemente.");
  }

}