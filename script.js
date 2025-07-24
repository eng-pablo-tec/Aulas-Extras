const dados = {
  modulo1: [
    { nome: "HTML CSS 1", link: "https://vimeo.com/1090682476?share=copy" }
  ],
  modulo2: [
    { nome: "(29/04/2025)- Teoria Fundamentos de Teste de Sistemas", link: "#" },
    { nome: "(29/04/2025)-Testes Unitários", link: "#" },
    { nome: "(28/04/2025)-Técnicas de Teste", link: "#" }
  ],
  modulo3: [
    { nome: "(28/04/2025)-Modelagem de Sistemas", link: "#" },
    { nome: "(28/04/2025)-Scrum", link: "https://docs.google.com/document/d/1fYewaUDnIkU_wQmb9K0Su85xndyiXfiD69_FSxy8_4c/edit?usp=sharing" },
    { nome: "(28/04/2025)-Documentação e Planejamento", link: "#" },
    { nome: "(28/04/2025)-Boas Práticas e Carreira", link: "#" },
    { nome: "(28/04/2025)-Integracao POKEAPI", link: "#" }
  ],
  modulo4: [
    { nome: "SELENIUM JAVASCRIPT 1", link: "https://drive.google.com/drive/folders/1KlSodjBM_EDbMpJz5-_qrcZRfiHTc8UA?usp=sharing" },
    { nome: "SELENIUM JAVASCRIPT 2", link: "https://docs.google.com/document/d/1Ef7iYP_aH5STHaTyONp6K7ZEX3XRm5IeFT-Z7yFbeVQ/edit?usp=sharing" },
    { nome: "(28/04/2025)-Cypress", link: "#" },
    { nome: "(28/04/2025)-Postman Automatizado", link: "#" },
    { nome: "(28/04/2025)-Cucumber", link: "#" },
    { nome: "(28/04/2025)-Jest", link: "#" }
  ],
  modulo5: [
    { nome: "(28/04/2025)-Teste Segurança", link: "#" },
    { nome: "Teste Carga", link: "https://vimeo.com/1090711667?share=copy" },
    { nome: "(28/04/2025)-Ferramentas de Teste", link: "#" }
  ]
};

for (let i = 1; i <= 5; i++) {
  const lista = document.getElementById(`lista-modulo${i}`);
  dados[`modulo${i}`].forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<a href="${item.link}" target="_blank">${item.nome}</a>`;
    lista.appendChild(div);
  });
}
