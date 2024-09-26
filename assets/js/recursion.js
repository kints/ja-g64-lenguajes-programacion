/*
5! = 5 * 4 * 3 * 2 * 1
5! = 5 * 4!
4! = 4 * 3 * 2 * 1
4! = 4 * 3!
3! = 3 * 2 * 1
2! = 2 * 1
1! = 1
0! = 1
0*0 = 1
*/

function factorial(num) {
  if (num == 1 || num == 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

function factorialCiclo(num) {
  let factorial = num;
  let numSiguiente = num;
  while (numSiguiente != 1) {
    numSiguiente -= 1;
    factorial *= numSiguiente;
  }
  return factorial;
}