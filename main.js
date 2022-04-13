let cuantosCachipun = +prompt("¿Cuántos Cachipun quieres jugar?");

for (i = 1; i <= cuantosCachipun; i++) {

  let cachipunPersona = prompt("Elije: Piedra | Papel | Tijera |");
  let cachipunCompu = Math.floor(Math.random() * 3);


  if (cachipunCompu == 0) {
    compuTraducido = "Tijera";
  } else if (cachipunCompu == 1) {
    compuTraducido = "Piedra";
  } else if (cachipunCompu == 2) {
    compuTraducido = "Papel";
  }

  if (cachipunPersona == "Tijera" || cachipunPersona == "tijera") {
    personaTraducido = 0;
  } else if (cachipunPersona === "Piedra" || cachipunPersona == "piedra") {
    personaTraducido = 1;
  } else if (cachipunPersona === "Papel" || cachipunPersona == "papel") {
    personaTraducido = 2;
  } else {
    alert("Datos incorrectos, comienza el juego de nuevo.")
  };


  if (personaTraducido == 1 && cachipunCompu == 0 || personaTraducido == 2 && cachipunCompu == 1 || personaTraducido == 0 && cachipunCompu == 2) {
    alert("Sacaste " + cachipunPersona + " y la máquina sacó " + compuTraducido + ". Felicidades, ¡Ganaste!");
    document.write("Ronda " + i + ". Sacaste " + cachipunPersona + " y la máquina sacó " + compuTraducido + ". Felicidades, ¡Ganaste! <br>");
  } else if (personaTraducido == 0 && cachipunCompu == 1 || personaTraducido == 2 && cachipunCompu == 0 || personaTraducido == 1 && cachipunCompu == 2) {
    alert("Sacaste " + cachipunPersona + " y la máquina sacó " + compuTraducido + ". Lo siento, has perdido contra la máquina.");
    document.write("Ronda " + i + ". Sacaste " + cachipunPersona + " y la máquina sacó " + compuTraducido + ". Lo siento, has perdido contra la máquina. <br>");
  } else if (personaTraducido === cachipunCompu) {
    alert("Sacaste " + cachipunPersona + " y la máquina sacó " + compuTraducido + ". Empate");
    document.write("Ronda " + i + ". Sacaste " + cachipunPersona + " y la máquina sacó " + compuTraducido + ". Empate <br>");
  } else {
    alert("Datos errados, para poder jugar ingresa Piedra, papel o tijera ¡Intenta de nuevo!");
  }
}


