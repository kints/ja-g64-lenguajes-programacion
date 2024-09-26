package poo;

// Subclase AutoFamiliar
class AutoFamiliar extends Auto {
  public AutoFamiliar(int numeroDeRuedas, String tipoDeCombustible, int velocidadMaxima, String color,
      int numeroDePuertas) {
    super(numeroDeRuedas, tipoDeCombustible, velocidadMaxima, color, numeroDePuertas);
  }

  @Override
  public void acelerar() {
    System.out.println("El auto familiar está acelerando con seguridad.");
  }
}
