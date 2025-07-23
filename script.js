fetch('cursos.json')
  .then(response => response.json())
  .then(data => {
    const lista1 = document.getElementById('lista-modulo1');
    const lista2 = document.getElementById('lista-modulo2');

    data.forEach((item, index) => {
      const bloco = document.createElement('div');
      bloco.className = 'item';
      bloco.innerHTML = `<a href="${item.link}" target="_blank">${item.nome}</a>`;

      // Distribui os conteúdos em dois módulos (exemplo simples por ordem)
      if (index < 9) {
        lista1.appendChild(bloco);
      } else {
        lista2.appendChild(bloco);
      }
    });
  })
  .catch(error => {
    console.error("Erro ao carregar o JSON:", error);
  });
