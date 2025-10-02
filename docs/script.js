const niveisHeroi = [
  { limite: 1000, nome: "Ferro" },
  { limite: 2000, nome: "Bronze" },
  { limite: 5000, nome: "Prata" },
  { limite: 7000, nome: "Ouro" },
  { limite: 8000, nome: "Platina" },
  { limite: 9000, nome: "Ascendente" },
  { limite: 10000, nome: "Imortal" },
  { limite: Infinity, nome: "Radiante" },
];

function classificarNivel(xp) {
  for (const nivel of niveisHeroi) {
    if (xp <= nivel.limite) {
      return nivel.nome;
    }
  }
  return "Desconhecido"; // Caso XP seja maior que o último limite
}

document.getElementById("formHeroi").addEventListener("submit", function (e) {
  e.preventDefault();

  const nomeInput = document.getElementById("nome");
  const xpInput = document.getElementById("xp");
  const resultadoDiv = document.getElementById("resultado");

  const nome = nomeInput.value.trim();
  const xp = parseInt(xpInput.value);

  if (!nome) {
    resultadoDiv.innerText = "Por favor, digite o nome do herói.";
    return;
  }

  if (isNaN(xp) || xp < 0) {
    resultadoDiv.innerText = "Por favor, digite um valor de XP válido e positivo.";
    return;
  }

  const nivel = classificarNivel(xp);
  resultadoDiv.innerText = `O Herói de nome ${nome} está no nível de ${nivel}`;
});

