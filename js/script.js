const tag = {
  adultos: document.getElementById("adultos"),
  criancas: document.getElementById("criancas"),
  duracao: document.getElementById("duracao"),
  resultado: document.getElementById("resultado"),
};

function app() {
  let totalAdutos = tag.adultos.value;
  let totalCriancas = tag.criancas.value;
  let duracao = tag.duracao.value;

  let carne = carnePP(duracao, totalAdutos, totalCriancas);
  let bebidas = bebidasPP(duracao, totalAdutos, totalCriancas);
  let cerveja = cervejaPP(duracao, totalAdutos);


  tag.resultado.innerHTML = `<p>${Math.ceil(carne)}Kg de carne</p>
  <p>${Math.ceil(cerveja)} latas de cerveja</p>
  <p>${Math.ceil(bebidas)} pet´s 2L de bebida</p>`
}

function cervejaPP(tempo, adultos) {
  let qdtTotalCerveja;

  if (tempo >= 6) {
    qdtTotalCerveja = 2000 * adultos;
  } else {
    qdtTotalCerveja = 1200 * adultos;
  }
  return qdtTotalCerveja/355;
} 

function bebidasPP(tempo, adultos, criancas) {
  let qdtTotalbebida;

  if (tempo >= 6) {
    qdtTotalbebida = 1500 * adultos + (1500 / 2) * criancas;
  } else {
    qdtTotalbebida = 1000 * adultos + (1000 / 2) * criancas;
  }
  return qdtTotalbebida/2000;
}

function carnePP(tempo, adultos, criancas) {
  let qdtTotalCarne;

  if (tempo >= 6) {
    qdtTotalCarne = 650 * adultos + (650 / 2) * criancas;
  } else {
    qdtTotalCarne = 400 * adultos + (400 / 2) * criancas;
  }
  return qdtTotalCarne /1000;
}
