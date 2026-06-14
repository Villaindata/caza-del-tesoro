let pista = 0;

const preguntas = [
  {q: "¿En qué fecha nos dimos nuestro primer beso?", a: "26/12/2025"},
  {q: "¿En qué fecha tuvimos nuestra primera cita?", a: "4/01/2026"},
  {q: "¿Cuál emoji usamos más en nuestras conversaciones?", a: "❤️‍🩹"}
];

function aceptar() {
  document.getElementById("texto").innerText = preguntas[pista].q;
  document.getElementById("botones-inicio").style.display = "none";
}

function rechazar() {
  document.getElementById("texto").innerText = "😏 Tú te lo pierdes...";
}

function verificar() {

  let respuesta = document.getElementById("entrada").value.trim().toLowerCase();
  let correcta = preguntas[pista].a.toLowerCase();

  if (respuesta === correcta) {

    pista++;

    if (pista >= preguntas.length) {
      document.getElementById("texto").innerText = "🎉 ¡Felicidades! Has encontrado tu regalo 💜";
      document.getElementById("btn-invitacion").style.display = "inline-block";
    } else {
      document.getElementById("texto").innerText = "✨ ¡Correcto! siguiente pista.";
      setTimeout(() => {
        document.getElementById("texto").innerText = preguntas[pista].q;
      }, 1500);
    }

  } else {
    document.getElementById("texto").innerText = "😏 Intenta otra vez...";
  }

}

function atras() {
  if (pista > 0) {
    pista--;
    document.getElementById("texto").innerText = preguntas[pista].q;
  }
}

function abrirInvitacion() {
  document.getElementById("texto").innerText = `
💌 INVITACIÓN OFICIAL 💌

📍 Lugar: Piscilago
🗓 Fecha: 19/06/2026
🕖 Hora: 9:00 AM (Nos vamos desde el 18)
✨ Dress code: Ropa cómoda + traje de baño 😏
`;

  document.getElementById("btn-aceptar").style.display = "inline-block";
}

function confirmar() {
  document.getElementById("texto").innerText = "❤️‍🩹 Reserva confirmada ❤️‍🩹";
}