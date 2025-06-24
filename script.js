fetch('cursos.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('plataformas');
    
    data.forEach((plataforma, index) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div style="font-size: 1.5rem; margin-bottom: 10px;">${index + 1}</div>
        <div><a href="${plataforma.link}" target="_blank">${plataforma.nome}</a></div>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Erro ao carregar o JSON:", error);
  });
