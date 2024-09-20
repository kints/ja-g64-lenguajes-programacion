let equipo1 = "Los Ángeles Lakers";
let jugadoresEquipo1 = [["Colin Castleton", 14, "C", 24, "2.08 m", "Florida"],
["Max Christie", 10, "G", 21, "1.96 m", "Michigan State"],
["Anthony Davis", 3, "AP", 31, "2.08 m", "Kentucky"],
["Jordan Goodwin", , "G", 25, "1.93 m", "Saint Louis"],
["Rui Hachimura", 28, "AP", 26, "2.03 m", "Gonzaga"],
["Jaxson Hayes", 11, "C", 24, "2.13 m", "Texas"],
["Blake Hinson", 36, "A", 24, "2.03 m", "Pittsburgh"],
["Jalen Hood-Schifino", 0, "G", 21, "1.96 m", "Indiana"],
["Bronny James", 9, "G", 19, "1.88 m", "USC"],
["LeBron James", 23, "SF", 39, "2.06 m", "--"],
["Kylor Kelley", , "C", 27, "2.13 m", "Oregon State"],
["Dalton Knecht", 4, "G", 23, "1.96 m", "Tennessee"],
["Maxwell Lewis", 21, "A", 22, "2.01 m", "Pepperdine"],
["Quincy Olivari", , "G", 23, "1.91 m", "Xavier"],
["Austin Reaves", 15, "E", 26, "1.96 m", "Oklahoma"],
["Cam Reddish", 5, "SF", 25, "2.01 m", "Duke"],
["DAngelo Russell", 1, "BA", 28, "1.91 m", "Ohio State"],
["Armel Traore", 37, "A", 21, "2.06 m", "--"],
["Jarred Vanderbilt", 2, "AP", 25, "2.03 m", "Kentucky"],
["Gabe Vincent", 7, "BA", 28, "1.88 m", "UC Santa Barbara"],
["Christian Wood", 35, "A", 28, "2.03 m", "UNLV"]];
let equipo2 = "Chicago Bulls";
let jugadoresEquipo2 = [["Lonzo Ball", 2, "BA", 26, "1.98 m", "UCLA"],
["Onuralp Bitim", 17, "SF", 25, "1.98 m", "--"],
["Matas Buzelis", , "A", 19, "2.06 m", "--"],
["Jevon Carter", 5, "BA", 29, "1.85 m", "West Virginia"],
["Torrey Craig", 13, "SF", 33, "1.96 m", "South Carolina Upstate"],
["Marcus Domask", , "A", 26, "1.98 m", "Illinois"],
["Ayo Dosunmu", 12, "E", 24, "1.96 m", "Illinois"],
["Chris Duarte", , "E", 27, "1.96 m", "Oregon"],
["Josh Giddey", , "E", 21, "2.03 m", "--"],
["Talen Horton-Tucker", , "SF", 23, "1.93 m", "Iowa State"],
["Zach LaVine", 8, "E", 29, "1.96 m", "UCLA"],
["E.J. Liddell", , "A", 23, "1.98 m", "Ohio State"],
["Kenneth Lofton Jr.", , "A", 22, "1.98 m", "Louisiana Tech"],
["Julian Phillips", 15, "A", 20, "2.03 m", "Tennessee"],
["Adama Sanogo", 21, "C", 22, "2.06 m", "UConn"],
["Jalen Smith", 25, "AP", 24, "2.06 m", "Maryland"],
["DJ Steward", 9, "G", 22, "1.88 m", "Duke"],
["Dalen Terry", 25, "A", 22, "2.01 m", "Arizona"],
["Nikola Vucevic", 9, "C", 33, "2.08 m", "USC"],
["Coby White", 0, "BA", 24, "1.96 m", "North Carolina"],
["Patrick Williams", 44, "AP", 23, "2.01 m", "Florida State"]];
/*
let htmlElementoJugadores1;
let htmlElementoJugadores2;
let htmlElementoMarcador1;
let htmlElementoMarcador2;
let equipo1nombre;
let equipo2nombre;*/
let marcadorEquipo1 = 0;
let marcadorEquipo2 = 0;

function equipoMarco(noEquipo, puntos, jugador) {
  let htmlElementoMarcador = document.getElementById(
    (noEquipo === 1 ? "marcadorEquipo1" : "marcadorEquipo2"));
  let jugadoresEquipo = noEquipo === 1 ? jugadoresEquipo1 : jugadoresEquipo2;
  if (noEquipo === 1) {
    marcadorEquipo1 += puntos;
  } else {
    marcadorEquipo2 += puntos;
  }
  htmlElementoMarcador.innerText = noEquipo === 1 ? "" + marcadorEquipo1 : "" + marcadorEquipo2;
  let numeroPlayera = traerNumPlayera(jugadoresEquipo, jugador);
  let jugadorAnotador = `<tr>
  <td>${numeroPlayera != undefined ? numeroPlayera : '--'}</td>
  <td>${jugador}</td>
  <td>${puntos}</td>
</tr >`;
  let htmlElementoMarcadorAnotadores = document.getElementById(noEquipo === 1 ? "listaAnotadoresEquipo1" : "listaAnotadoresEquipo2");
  htmlElementoMarcadorAnotadores.innerHTML = htmlElementoMarcadorAnotadores.innerHTML + jugadorAnotador;
}

function traerNumPlayera(arregloJugadores, jugador) {
  let i = 0;
  do {
    if (arregloJugadores[i][0] === jugador) {
      return arregloJugadores[i][1];
    }
    i++;
  } while (i < arregloJugadores.length);
  return undefined;
}

function ponerJugadores(noEquipo) {
  let jugadores = "";
  let jugadoresEquipo;
  let equipoNombre;
  let nombreEquipo;
  let htmlElementoJugadores;

  let htmlElementoMarcadorNombreEquipo = document.getElementById(
    (noEquipo === 1 ? "equipo1AnotadoresNombre" : "equipo2AnotadoresNombre")
  );

  if (noEquipo === 1) {
    jugadoresEquipo = jugadoresEquipo1;
    nombreEquipo = equipo1;
    equipoNombre = document.getElementById("equipo1nombre");
    htmlElementoJugadores = document.getElementById("lista-equipo1");
  } else {
    jugadoresEquipo = jugadoresEquipo2;
    nombreEquipo = equipo2;
    equipoNombre = document.getElementById("equipo2nombre");
    htmlElementoJugadores = document.getElementById("lista-equipo2");
  }

  for (i = 0; i < jugadoresEquipo.length; i++) {
    /* let numeroPlayera;
     if (jugadoresEquipo1[i][1] != undefined) {
       numeroPlayera = jugadoresEquipo1[i][1];
     } else {
       numeroPlayera = "--";
     }*/
    jugadores += "<tr>" +
      "<td>" + (jugadoresEquipo[i][1] != undefined ? jugadoresEquipo[i][1] : "--") + "</td>" +
      "<td>" + jugadoresEquipo[i][0] + "</td>" +
      "<td>" + jugadoresEquipo[i][2] + "</td>" +
      "<td>" + jugadoresEquipo[i][4] + "</td>" +
      "<td>" + jugadoresEquipo[i][5] + "</td>" +
      "<td><button onclick=\"equipoMarco(" + noEquipo + ", 1, '" + jugadoresEquipo[i][0] + "')\">1</button>" +
      "<button onclick=\"equipoMarco(" + noEquipo + ", 2, '" + jugadoresEquipo[i][0] + "')\">2</button>" +
      "<button onclick=\"equipoMarco(" + noEquipo + ", 3, '" + jugadoresEquipo[i][0] + "')\">3</button></td>" +
      "</tr>";
  }
  equipoNombre.innerText = nombreEquipo;
  htmlElementoJugadores.innerHTML = jugadores;
  htmlElementoMarcadorNombreEquipo.innerText = nombreEquipo;
}


