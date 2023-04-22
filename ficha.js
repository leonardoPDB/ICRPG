function salvarFicha() {
  const ficha = {
    nome: document.getElementById('nome').value,
    raca: document.getElementById('raca').value,
    forca: document.getElementById('forca').value,
    destreza: document.getElementById('destreza').value,
    constituicao: document.getElementById('constituicao').value,
    inteligencia: document.getElementById('inteligencia').value,
    sabedoria: document.getElementById('sabedoria').value,
    carisma: document.getElementById('carisma').value,
    habilidades: document.getElementById('habilidades').value,
    itens: document.getElementById('itens').value,
  }
  localStorage.setItem('ficha', JSON.stringify(ficha))
  alert('Ficha salva com sucesso!')
}

function carregarFicha() {
  const ficha = JSON.parse(localStorage.getItem('ficha'))
  if (ficha) {
    document.getElementById('nome').value = ficha.nome
    document.getElementById('raca').value = ficha.raca
    document.getElementById('forca').value = ficha.forca
    document.getElementById('destreza').value = ficha.destreza
    document.getElementById('constituicao').value = ficha.constituicao
    document.getElementById('inteligencia').value = ficha.inteligencia
    document.getElementById('sabedoria').value = ficha.sabedoria
    document.getElementById('carisma').value = ficha.carisma
    document.getElementById('habilidades').value = ficha.habilidades
    document.getElementById('itens').value = ficha.itens
  }
}

function rolarAtributo(idAtributo) {
  // Obtém o elemento input do atributo
  const inputAtributo = document.getElementById(idAtributo)
  // Obtém o valor do atributo como um número
  const valorAtributo = Number(inputAtributo.value)
  // Gera um número aleatório entre 1 e 20
  const valorDado = Math.floor(Math.random() * 20) + 1
  // Calcula a soma do valor do dado e do atributo
  const valorTotal = valorAtributo + valorDado
  // Descobre onde colocar o resultado
  const resultado = document.getElementById('resultado' + idAtributo)
  // Mostra o Resultado
  resultado.innerHTML = valorTotal
}