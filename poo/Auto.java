package poo;

// Auto auto1 = new Auto(4,"Gasolina", 150, "rojo"0,4);
// Clase base Auto
public class Auto {
  private int numeroDeRuedas;
  private String tipoDeCombustible;
  private int velocidadMaxima;
  private String color;
  private int numeroDePuertas;

  // Constructor
  public Auto(int numeroDeRuedas, String tipoDeCombustible, int velocidadMaxima, String color, int numeroDePuertas) {
    this.numeroDeRuedas = numeroDeRuedas;
    this.tipoDeCombustible = tipoDeCombustible;
    this.velocidadMaxima = velocidadMaxima;
    this.color = color;
    this.numeroDePuertas = numeroDePuertas;
  }

  // Getters y Setters
  public int getNumeroDeRuedas() {
    return numeroDeRuedas;
  }

  public void setNumeroDeRuedas(int numeroDeRuedas) {
    this.numeroDeRuedas = numeroDeRuedas;
  }

  public String getTipoDeCombustible() {
    return tipoDeCombustible;
  }

  public void setTipoDeCombustible(String tipoDeCombustible) {
    this.tipoDeCombustible = tipoDeCombustible;
  }

  public int getVelocidadMaxima() {
    return velocidadMaxima;
  }

  public void setVelocidadMaxima(int velocidadMaxima) {
    this.velocidadMaxima = velocidadMaxima;
  }

  public String getColor() {
    return color;
  }

  public void setColor(String color) {
    this.color = color;
  }

  public int getNumeroDePuertas() {
    return numeroDePuertas;
  }

  public void setNumeroDePuertas(int numeroDePuertas) {
    this.numeroDePuertas = numeroDePuertas;
  }

  // Métodos
  public void prenderAuto() {
    System.out.println("El auto está encendido.");
  }

  public void acelerar() {
    System.out.println("El auto está acelerando.");
  }
  /*
   * 
   * 
   * switch (combustible){
   * case Gasolina: auto1.llenarCombustibleGasolina(); break;
   * case Electrico: auto1.llenarCombustibleElectrico(); break;
   * case Diesel: auto1.llenarCombustibleDiesel(); break;
   * }
   * 
   * 
   * llenarCombustibleGasolina()
   * llenarCombustibleElectrico()
   * llenarCombustibleDiesel()
   * 
   * Con sobrecarga
   * 
   * auto1.llenarCombustible(Electricidad)
   * 
   */

  @Override
  public void llenarCombustible(Gasolina gasolina) {
    System.out.println("Se llena el auto con gasolina");

  @Override
  public void llenarCombustible(Electrico electrico) {
    System.out.println("Se llena el auto con electricidad");
  }

  @Override
  public void llenarCombustible(Diesel diesel) {
    System.out.println("Se llena el auto con Diesel");
  }
}
