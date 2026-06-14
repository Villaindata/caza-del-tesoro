let pista = 0;

const preguntas = [
  {
    q: "¿En qué fecha nos dimos nuestro primer beso?",
    a: "26/12/2025"
  },
  {
    q: "¿En qué fecha tuvimos nuestra primera cita?",
    a: "4/01/2026"
  },
  {
    q: "¿Cuál emoji usamos más en nuestras conversaciones?",
    a: "❤️‍🩹"
  }
];

// ELEMENTOS
const texto = document.getElementById("texto");
const entrada = document.getElementById("entrada");
const btnInicio = document.getElementById("botones-inicio");
const btnJuego = document.getElementById("botones-juego");
const btnInv = document.getElementById("btn-invitacion");
const btnAce = document.getElementById("btn-aceptar");

// INICIO
function aceptar() {
  btnInicio.style.display = "none";
  entrada.style.display = "inline-block";
  btnJuego.style.display = "block";

  mostrarPista();
}

function rechazar() {
  texto.innerText = "😏 Tú te lo pierdes, :c
(Aunque aquí estaré
por si cambias de opinión 💜)";
}

// MOSTRAR PISTA
function mostrarPista() {
  texto.innerText = preguntas[pista].q;
  entrada.value = "";
}

// VERIFICAR
function verificar() {

  let res = entrada.value.trim().toLowerCase();
  let cor = preguntas[pista].a.toLowerCase();

  if (res === cor) {

    pista++;

    if (pista >= preguntas.length) {

      texto.innerText = "🎉 ¡Felicidades! Has encontrado tu regalo 💜";

      entrada.style.display = "none";
      btnJuego.style.display = "none";

      btnInv.style.display = "inline-block";

    } else {

      texto.innerText = "✨ ¡Correcto! Has desbloqueado la siguiente pista.";

      setTimeout(() => {
        mostrarPista();
      }, 1200);

    }

  } else {
    texto.innerText = "😏 Intenta otra vez, ¡Animo!";
  }
}

// ATRÁS
function atras() {

  if (pista > 0) {
    pista--;
    mostrarPista();
  }
}

// INVITACIÓN
function abrirInvitacion() {

  texto.innerText = `
💌 INVITACIÓN OFICIAL 💌

📍 Lugar: Piscilago
🗓 Fecha: 19/06/2026 (Viajamos desde el 18)
🕒 Hora: 9:00 AM
✨ Dress code:Ropa cómoda + traje de baño 😏
`;

  btnInv.style.display = "none";
  btnAce.style.display = "inline-block";
}

// CONFIRMAR
function confirmar() {
  texto.innerText = "❤️‍🩹 Cita confirmada ❤️‍🩹";
}